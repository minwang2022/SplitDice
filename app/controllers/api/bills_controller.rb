class Api::BillsController < ApplicationController
  before_action :require_logged_in, only: [:create, :index]
    def create

      split = bill_params[:amount].to_f / (bill_params[:recipients].length + 1)
  
      @bill = Bill.new(
                      amount: bill_params[:amount].to_f,
                      description: bill_params[:description],
                      bill_date: bill_params[:bill_date],
                      author_id: current_user.id,
                      category: bill_params[:category],
                      nums_splits: bill_params[:recipients].length + 1
                    )
      if @bill.save
        # Create billsplits for each recipient_id
        bill_params[:recipients].each do |id|
          Billsplit.create(bill_id: @bill.id, recipient_id: id, splited_bill_amount: split.round(2) )
        end
        @bills = current_user.net_payments(current_user.id)
        render json: @bills.to_json
      else
        render json: @bill.errors.full_messages, status: 422
      end
    end
    
    def index 
      
      @bills = current_user.net_payments(current_user.id)

      render json: @bills.to_json
    end

    def update

      ############### NEED TO EDIT PARAMS SO THAT IT WORKS WITH CURRENT USER #######
      new_billsplit_info = current_user.settle_up(bill_params[:settleFrom].to_i, bill_params[:settleTo].to_i, bill_params[:amount].to_f)
      # Helper method to find all of the paid ones
  
      paid_and_other_list = find_paid_splits(new_billsplit_info)
  
      # paid_other_list[0] will either be a single array or and array of arrays
      if paid_and_other_list[0][0].kind_of?(Array)
        paid_billsplit_ids = paid_and_other_list[0].collect { |idx| idx[0] }
      else
        # In the case of paid_and_other_list[0] being an empty array
        if paid_and_other_list[0].first == nil
          paid_billsplit_ids = []
        else
          paid_billsplit_ids = [paid_and_other_list[0].first]
        end
      end
  
      if paid_billsplit_ids.length > 0
        Billsplit.where(id: paid_billsplit_ids).update_all(recipient_paid: true, split_amount: 0)
      end
  
  
  
      if paid_and_other_list[1].length > 0
        uneven_payment(paid_and_other_list[1])
      end
  
      # Updating paid column for bills after billsplits have been updated
      bill_paid_info = current_user.bill_paid
  
      Bill.where(id: bill_paid_info).update_all(paid: true)
  
      @bills = current_user.net_payments(current_user.id)
      render json: @bills.to_json
  
    end
  
    ###########
   
    def find_paid_splits(array)
    
      counter = 0
      array.each do |split|
        if split[2] == 0
          counter += 1
        end
      end
  
      if counter == 0
        return array.unshift([])
      else
  
        paid_splits = array.slice(0, counter)
  
        if array.length > counter
          paid_splits.push(array[array.length - 1])
        else
          paid_splits.push([])
        end
  
        paid_splits
      end
  
  
    end
  
    ###########
    # Uneven_payment is a helper method for when the billsplit is an overpayment or underpayment
    
    ###########
    def uneven_payment(billsplit)
  
      if billsplit[0].is_a? Integer
  
        Billsplit.find(billsplit[0]).update(recipient_paid: billsplit[1], split_amount: billsplit[2])
      elsif billsplit[0].is_a? String
  
        new_bill = Bill.create(amount: billsplit[2],
                              description:"Overpayment",
                              bill_date: Time.now.strftime("%Y/%m/%d").gsub(/\//,'-'),
                              author_id: bill_params[:settleFrom],
                              split: 2
                              )
        Billsplit.create(bill_id: new_bill.id, recipient_id: bill_params[:settleTo], split_amount: billsplit[2])
  
      end
  
    end
  
    def destroy
  
    end
  

    def destroy
  
    end
  
    private
  
    def bill_params
      params.require(:bills).permit(:amount, {:recipients => []}, :description, :bill_date, :category)
    end
  
  end