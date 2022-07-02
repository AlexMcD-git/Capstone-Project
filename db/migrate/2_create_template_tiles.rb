class CreateTemplateTiles < ActiveRecord::Migration[7.0]
  def change
    create_table :template_tiles do |t|
      t.references :game, null: false, foreign_key: true
      t.integer :position
      t.string :description
      t.string :image_url
      t.integer :value

      t.timestamps
    end
  end
end
