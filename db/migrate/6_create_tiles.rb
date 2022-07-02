class CreateTiles < ActiveRecord::Migration[7.0]
  def change
    create_table :tiles do |t|
      t.integer :position
      t.string :description
      t.string :image_url
      t.integer :value
      t.references :board, null: false, foreign_key: true

      t.timestamps
    end
  end
end
