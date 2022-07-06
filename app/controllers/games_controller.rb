class GamesController < ApplicationController
    require 'pry'
    def create
        tiles=params[:tiles]
        game=Game.create!(game_params)
        tiles.each do |tile|
            puts tile[:position], tile[:description], tile[:value]
            tile=TemplateTile.create!(game:game, position: tile[:position], description: tile[:description], value: tile[:value])
        end
        render json: game, status: :created
    end

    def index
        games=Game.all
        render json: games, status: 200
    end

    def show
        game=Game.find(params[:id])
        render json: game, status: 200
    end

    private
    
    def game_params
        params.permit(:name)
    end

    def tile_params
        params.permit(:position, :description, :value)
    end
end
