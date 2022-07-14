class TilesController < ApplicationController
    
    def accept
         tile = Tile.find(params[:id])
         tile.update!(status:"complete")
         UpdateScoreJob.perform_later(tile.board)
         render json: tile, status: 200
    end

    def decline
        tile = Tile.find(params[:id])
        tile.update!(status:"incomplete")
        render json: tile, status: 200
    end

    def pending
        tiles= Tile.pending_tiles
        render json: tiles, status: 200
    end

    def link_submit
        tile= Tile.find(params[:id])
        tile.update!(status:"pending", image_url: params[:image_url])
        render json: tile, status: 200
    end

end
