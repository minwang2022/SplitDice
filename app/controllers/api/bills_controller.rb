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

    def destroy
  
    end
  
    private
  
    def bill_params
      params.require(:bills).permit(:amount, {:recipients => []}, :description, :bill_date, :category)
    end
  
  end