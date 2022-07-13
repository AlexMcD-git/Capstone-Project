class TeamSerializer < ActiveModel::Serializer
  attributes :id, :team_name
  has_one :board
  has_many :players
end
