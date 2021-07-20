Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] do 
      collection do
        post 'addFriend'
        get 'searchFriends'
        get 'searchUsers'
      end 
      resources :friendships, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:create]
    resources :bills, only: [:create, :index]
    resource :bills, only: [:update]
    
  end


  root "static_pages#home"
end
