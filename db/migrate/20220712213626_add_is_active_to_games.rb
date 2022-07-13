class AddIsActiveToGames < ActiveRecord::Migration[7.0]
  def change
    add_column :games, :is_active, :boolean
  end
end
