class AddStatusToTiles < ActiveRecord::Migration[7.0]
  def change
    add_column :tiles, :status, :string
  end
end
