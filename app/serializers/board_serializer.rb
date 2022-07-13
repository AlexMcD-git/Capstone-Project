class BoardSerializer < ActiveModel::Serializer
  attributes :id, :score
  has_many :tiles
  belongs_to :team
end
