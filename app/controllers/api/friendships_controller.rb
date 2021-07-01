class Api::FriendshipsController < ApplicationController
    before_action :require_logged_in, only: [:create, :index]

    def index 
        @friendships = Friendship.where(user_id: params[:user_id])
        render :index
    end

    # def create 
    #     @friendship = Friendship.new(friendship_params)
    #     @friend = User.find_by(username: )
    #     if @friendship.save 
    #         render json: @friend 
    #     else
    #         render json: ['Invalid user'], status: 401
    #     end
    
    # end
    

    def destroy
        friendship = Friendship.find(params[:id])
        if friendship.delete 
            render :index
        else
            render json ['Invalid user'], status: 401
        end 
    end

    private 

    def friendship_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end

end