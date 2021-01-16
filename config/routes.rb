Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    get 'all_hackathons', to: 'hackathons#all_hackathons'
    resources :hackathons do 
      resources :objectives
      resources :teams do 
        resources :members
      end
    end
  end
end
