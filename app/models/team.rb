class Team < ApplicationRecord
  has_one :board, dependent: :destroy
  has_many :players, dependent: :destroy

  has_many :tiles, through: :board
end
