class Board < ApplicationRecord
  belongs_to :team
  belongs_to :game
  has_many :tiles, dependent: :destroy

  def update_score
    values=[]
    completed_tiles=self.tiles.where(status:"complete").each do |tile|
      values.push(tile.value)
    end
    score = values.reduce(0) { |sum, num| sum + num }
    self.update(score:score)
  end

end
