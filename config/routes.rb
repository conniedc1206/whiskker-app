Rails.application.routes.draw do
  resources :meow_mails, only: [:index, :create, :destroy]
  resources :catpanions, only: [:index, :create, :destroy]
  resources :comments, only: [:index, :create, :destroy]
  resources :meow_posts
  resources :users
  
  # custom routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
