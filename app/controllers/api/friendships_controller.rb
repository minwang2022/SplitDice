class Api::FriendshipsController < ApplicationController
    before_action :require_logged_in, only: [:create, :index]

    def index 
        @friendships = Friendship.where(user_id: params[:user_id])
        render :index
    end

  

    private 

    def friendship_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end

end