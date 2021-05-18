class Api::FriendshipsController < ApplicationController
    # before_action :require_logged_in, only: [:create, :index, :destroy]

    def index 
        @friendships = Friendship.where(user_id: params[:user_id])
    end

    def create 
        @friendship1= Friendship.new(friendship_params)
        @friendship2 = Friendship.new(user_id: @friendship1.friend_id, friend_id: @friendship1.user_id)
    
        if @friendship1.save && @friendship2.save
            render '/api/friendships/index'
        else
            render json: ['Invalid user'], status: 401
        end
    
    end

    def destroy
        friendship = Friendship.find(params[:id])
        friendship.delete 
        render 'api/friendships/index'
    end

    private 

    def friendship_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end

end