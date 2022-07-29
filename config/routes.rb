Rails.application.routes.draw do
  resources :meow_mails, only: []
  resources :catpanions, only: []
  resources :comments, only: []
  resources :meow_posts, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :destroy] # Potentially add update
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
