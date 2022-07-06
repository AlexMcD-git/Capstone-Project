class GameSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :template_tiles
  
end
