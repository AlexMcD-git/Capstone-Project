class GamesController < ApplicationController
    skip_before_action :authorized, only: [:example, :show, :index, :getActive]
    require 'pry'
    def create
        tiles=params[:tiles]
        game=Game.create!(game_params)
        create_tiles(game, tiles)
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

    def example
        example = Game.find_by(name: "Bingo Example")
        render json: example, include: ['boards', 'boards.tiles', 'boards.team', 'boards.team.players']
    end

    def getActive
        game = Game.find_by(is_active: true)
        render json: game, include: ['boards', 'boards.tiles', 'boards.team', 'boards.team.players']
    end

    def setActive
        game = Game.find(params[:id])
        games = Game.where.not(id: params[:id])
        games.each {|g| g.update!(is_active: false)}
        game.update!(is_active: true)
        render json: game, include: ['boards', 'boards.tiles', 'boards.team', 'boards.team.players']

    end

    private
    
    def game_params
        params.permit(:name)
    end

    def create_tiles (game, tiles)
        tiles.each do |tile|
            tile=TemplateTile.create!(game:game, position:tile[:position],description: tile[:description],value: tile[:value])
        end
    end

end
