Rails.application.routes.draw do
  resources :meow_mails, except: [:update]
  resources :catpanions, only: []
  resources :comments, only: [:index, :create, :destroy]
  resources :meow_posts
  resources :users, except: [:update] # Potentially add update
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
