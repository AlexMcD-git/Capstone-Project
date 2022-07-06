class TeamsController < ApplicationController
    def create
        team=Team.create!(team_params)
        render json: team,  status: :created
    end

    def index
        teams = Team.all
        render json: teams, status: 200
    end

    def destroy
        team = Team.find(params[:id])
        render json: {}, status: 200
    end

    def add_to_game
        team = Team.find(params[:team_id])
        game = Game.find(params[:game_id])

        board=Board.create!(game:game, score: 0, team: team)
        25.times do |n|
            template=TemplateTile.find_by(position:n+1, game:board.game)
            Tile.create!(board:board, position:template[:position], description:template[:description], value:template[:value], status:"incomplete")
        end
        render json: team, include: ['board','board.tiles'], status: 200
    end


    private
    def team_params 
        params.permit(:team_name)
    end
end
