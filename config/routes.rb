Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :games, only: [:index, :show, :create]
  resources :players, only: [:create, :index, :destroy]
  resources :teams, only: [:create, :index, :destroy]

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"

  patch "teams/:team_id/add_to_game/:game_id", to: "teams#add_to_game"
  get "games/example", to: "games#example"

end
