class Tile < ApplicationRecord
  belongs_to :board

  def self.pending_tiles
    Tile.where(status:"pending")
  end

  validates :status, inclusion: {in: %w(incomplete pending complete)}
end
