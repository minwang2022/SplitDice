class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    if params[:query].present?
      @friends = User.where('username ~ ? OR username ~ ? OR username ~ ?', params[:query].upcase, params[:query].downcase, params[:query].capitalize)
    else
      @friends = User.none
    end
    render :friends
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
  