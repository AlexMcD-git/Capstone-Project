class TilesController < ApplicationController
    
    def accept
         tile = Tile.find(params[:id])
         tile.status="complete"
         UpdateScoreJob.perform_later(tile.board)
         render json: tile, status: 200
    end

    def decline
        tile = tile.find(params[:id])
        tile.status="incomplete"
        render json: tile, status: 200
    end

    def pending
        tiles= Tile.pending_tiles
        render json: tiles, status: 200
    end

end
