class Game < ApplicationRecord
    has_many :template_tiles, dependent: :destroy
    has_many :boards, dependent: :destroy
    
    has_many :teams, through: :boards
    has_many :tiles, through: :boards

end
