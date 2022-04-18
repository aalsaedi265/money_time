Rails.application.routes.draw do
  resources :transactions, only: [:index, :show, :create, :destroy]

  post "/signup", to: "users#create"
  update "/me", to: "users#update"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get 'sessions/—no-test-framework'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
