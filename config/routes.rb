Rails.application.routes.draw do
  resources :meow_mails, only: []
  resources :catpanions, only: []
  resources :comments, only: []
  resources :meow_posts, only: []
  resources :users, only: []
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
