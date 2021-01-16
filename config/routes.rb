Rails.application.routes.draw do
  namespace :api do
    get 'hackathons/index'
    get 'hackathons/show'
    get 'hackathons/create'
    get 'hackathons/update'
    get 'hackathons/destroy'
  end
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
end
