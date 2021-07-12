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

  def addFriend
    friend_username = user_params[:username]
    @friend = User.find_by(username: friend_username)
    # debugger 
    if @friend.nil?
      # debugger
      render json: ['User does not exist!'], status: 401
    elsif @friend.id == current_user.id
      # debugger
      render json: ['You cannot friend yourself'], status: 401
    else
      # debugger
      @friendship = Friendship.new(user_id:current_user.id, friend_id: @friend.id)

      if @friendship.save!
        # debugger
        @friends = current_user.friends
        # @friendships = Friendship.where(user_id: current_user.id)

        render json: @friends
        # debugger
      else
        # debugger
        render json: ['Invalid user, user does not exist'], status: 401
      end
    end

  end

  def searchUsers
    if params[:query].present?
      @friends = User.where('username ~ ? OR username ~ ? OR username ~ ?', params[:query].upcase, params[:query].downcase, params[:query].capitalize)
    else
      @friends = User.none
    end

    render :friends
  end

  def searchFriends
    # current_user = User.find_by(id: 2); ## testing
    if params[:query].present?
      @friends = current_user.friends.where('username ~ ? OR username ~ ? OR username ~ ?', params[:query].upcase, params[:query].downcase, params[:query].capitalize)
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
  