class PlayersController < ApplicationController
    skip_before_action :authorized, only: [:index]
    def index
        players = Player.all
        render json: players, status: 200
    end

    def destroy
        player = Player.find(params[:id])
        player.destroy
        render json: {}, status: 200
    end

    def create
        team=Team.find(params[:team_id])
        player=Player.create!(in_game_name:params[:in_game_name], team:team)
        game=team.board.game
        render json: player, status: :created
    end
end
