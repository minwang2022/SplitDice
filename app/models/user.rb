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
  
    # after_initialize :ensure_session_token

    attr_reader :password

    has_many :friendships,
        foreign_key: :user_id,
        class_name: :User,
        dependent: :destroy

    has_many :friends,
        through: :friendships,
        source: :friend,
        dependent: :destroy

    has_many :bills,
        foreign_key: :author_id,
        class_name: :Bill
        
    has_many :requested_bill_splits,
        foreign_key: :recipient_id,
        class_name: :Bill_split

    has_many :received_bills,
        through: :requested_bill_splits,
        source: :Bill
    
    
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
