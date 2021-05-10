class Api::SessionsController < ApplicationController

    def create
      @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
      if @user.nil?
        render json: ["Invalid username/password combination"], status: 401
      else
        login(@user)
        render json: @user
      end
  
    end
  
  
  
    def destroy
      if current_user.nil?
        render json: ["Not a valid User, please retry"], status: 404
      else
        logout
        render json: {}
      end
    end
  
  end
  