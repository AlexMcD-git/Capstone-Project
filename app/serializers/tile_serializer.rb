class TileSerializer < ActiveModel::Serializer
  attributes :id, :position, :description, :image_url, :value, :status
end
