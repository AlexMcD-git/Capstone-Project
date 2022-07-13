class GamesController < ApplicationController
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
        render json: example, include: ['boards', 'boards.tiles', 'boards.team']
    end

    def getActive
        game = Game.find_by(is_active: true)
        render json: game, include: ['boards', 'boards.tiles', 'boards.team', 'boards.team.players']
    end

    def setActive
        game = Game.find(params[:id])
        games = Game.all
        games.each {|game| game.update!(is_active: false)}
        puts game.is_active
        game.update!(is_active: true)
        puts game.is_active
        render json: game, include: ['boards', 'boards.tiles']

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
