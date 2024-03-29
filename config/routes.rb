Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "games/example", to: "games#example"
  
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  patch "/games/:id/set_active", to: "games#setActive"
  get "/games/active", to: "games#getActive"

  patch "teams/:team_id/add_to_game/:game_id", to: "teams#add_to_game"
  
  patch "/tiles/:id/accept", to: "tiles#accept"
  patch "/tiles/:id/decline", to: "tiles#decline"
  patch "/tiles/:id/link_submit", to: "tiles#link_submit"
  get "tiles/pending", to: "tiles#pending"

  post "/teams/:game_id", to:"teams#create"
  post "players/:team_id", to:"players#create"
  post "admins", to: "admins#create"

  resources :games, only: [:index, :show, :create]
  resources :players, only: [:index, :destroy]
  resources :teams, only: [:create, :index, :destroy]



end
