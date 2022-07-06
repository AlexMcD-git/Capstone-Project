class BoardSerializer < ActiveModel::Serializer
  attributes :id, :score
  has_many :tiles
end
