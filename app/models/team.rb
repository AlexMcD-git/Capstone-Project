class Team < ApplicationRecord
  belongs_to :board
  has_many :players
end
