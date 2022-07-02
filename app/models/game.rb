class Game < ApplicationRecord
    has_many :template_tiles
    has_many :boards
end
