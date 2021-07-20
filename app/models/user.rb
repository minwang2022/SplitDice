# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
    validates :username, :session_token, :password_digest, :email, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :username, uniqueness: true
  
    after_initialize :ensure_session_token

    attr_reader :password

    has_many :friendships,
        foreign_key: :user_id,
        class_name: :Friendship,
        dependent: :destroy

    has_many :friends,
        through: :friendships,
        source: :friend,
        dependent: :destroy

    has_many :bills,
        foreign_key: :author_id,
        class_name: :Bill
        
    has_many :requested_billsplits,
        foreign_key: :recipient_id,
        class_name: :Billsplit

    has_many :received_bills,
        through: :requested_billsplits,
        source: :Bill
    
    ########Bills Logic########

    def net_payments(current_user_id)
        payments_hash = {"owed" => {}, "owe" => {}}
        
        owe_hash = owe(current_user_id)
        owed_hash = owed(current_user_id)
        # debugger 
        user_payments = (owe_hash.keys + owed_hash.keys).uniq
        # debugger 
        user_payments.each do |user|
            # debugger 
          # user is in owe_hash and NOT owed_hash
          if owe_hash.has_key?(user) && !owed_hash.has_key?(user)
            payments_hash["owe"][user] = owe_hash[user]
          # user is NOT in owe_hash and in owed_hash
        #   debugger 
          elsif !owe_hash.has_key?(user) && owed_hash.has_key?(user)
            payments_hash["owed"][user] = owed_hash[user]
          # user is in both owe hash and owed hash
        #   debugger
          else
                amount = (owed_hash[user] - owe_hash[user]).round(2)
                if amount > 0
                    # Goes to you are owed
                    payments_hash["owed"][user] = amount
        
                elsif amount < 0
                    payments_hash["owe"][user] = -amount
                    # Goes to you owe
                end
            end 
        end
        # debugger
        payments_hash
    end

    #### you are owed 
    #  {"May"=>15.0, "June"=>10.0, "mat"=>10.0, "T"=>22.22} owed
    ####
    def owed(current_user_id)

        owed_list = {}
        # debugger
        bills = Bill.joins(:bill_splits)
                    .joins(:bill_author)
                    .where('author_id = ?', current_user_id)
                    .where('recipient_paid = false')
                    .where('paid = false')

        bills.uniq.each do |bill|
            # debugger
            
            bill.bill_splits.each do |split|
                # debugger
                recipient_id = split.recipient_id
                recipient_username = User.find_by(id: recipient_id).username
                # debugger
                if owed_list.has_key? recipient_username
                    temp_amount = owed_list[recipient_username]
                    owed_list[recipient_username] = temp_amount + split.splited_bill_amount
                else
                    owed_list[recipient_username] = split.splited_bill_amount
                end
            end
        end
        # debugger
        owed_list
    
    end

    #### you owe
    #  {"May"=>15.0, "June"=>10.0, "mat"=>10.0, "T"=>22.22} owed
 
    ####

    def owe(current_user_id)

        owe_list = {}
        # debugger
        billsplits = Billsplit
                    .joins(:bill)
                    .where('recipient_id = ?', current_user_id)
                    .where('recipient_paid = false')
                    .where('paid = false')
    
        billsplits.each do |bill|
            # debugger
            bill_author_id = Bill.find_by(id: bill.bill_id).author_id
            # debugger
            bill_author_name = User.find_by(id: bill_author_id).username
            # debugger
            if owe_list.has_key? bill_author_name
                temp_amount = owe_list[bill_author_name]
                owe_list[bill_author_name] = temp_amount + bill.splited_bill_amount
        #  debugger
            else
                owe_list[bill_author_name] = bill.splited_bill_amount
            end
        end
        # debugger
        owe_list
    end

    def settle_up(settle_from, settle_to, amount)
        # debugger
        # You are looking for all of the billsplits where the recipient id is payer (settle_from) because those are the ones you want to now fulfill
        billsplits = Billsplit
                        .joins(:bill)
                        .where('author_id = ?', settle_to)
                        .where('recipient_id = ?', settle_from)
                        .where('recipient_paid = false')
    
    
        # this actually needs to be calculated from net payments
        bill_settle_list = []
    
    
        billsplits.each do |split|
            # debugger
          temp_bill = []
          amount -= split.splited_bill_amount
          if amount > 0
            # debugger
            temp_bill.push(split.id)
            temp_bill.push(true)
            temp_bill.push(0)
            bill_settle_list.push(temp_bill)
    
          elsif amount < 0  # if settle up amount is less than a single billsplit amount
            # debugger
            temp_bill.push(split.id)
            temp_bill.push(false)
            temp_bill.push(-amount.round(2)) # settle_from user now still owes settle_to user by negative amount
            bill_settle_list.push(temp_bill)
            break # Do not continue going through billsplits
            # debugger
          else
            temp_bill.push(split.id)
            temp_bill.push(true)
            temp_bill.push(0)
            bill_settle_list.push(temp_bill)
            break # Do not continue going through billsplits
            # debugger
          end
        end
    
        # If after going through all of the billsplits amount > 0, then an overpayment has been made
        # and a new bill/billsplit needs to be created in the opposite direction.
        if amount > 0
          temp_bill = []
          temp_bill.push("new")
          temp_bill.push(false)
          temp_bill.push(amount.round(2))
          bill_settle_list.push(temp_bill)
        end
        # debugger
        bill_settle_list
    
    end

    def bill_paid
        # debugger
        bill_ids_to_update = []
        bills = Bill.includes(:bill_splits)
        # debugger
        bill_paid = true
        bills.each do |bill|
            # debugger
            bill.bill_splits.each do |split|
            bill_paid = bill_paid && split.recipient_paid
            end
            # debugger
            if bill_paid
                # debugger
            bill_ids_to_update.push(bill.id)
            end
            # debugger
            # Reset bill_paid back to true for when you go through first billsplit that has a false recipient_paid
            bill_paid = true
        end
        # debugger
        bill_ids_to_update

    end
    

    #USER Auth#

    
    def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
    end

    def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
    end

    private

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

end
