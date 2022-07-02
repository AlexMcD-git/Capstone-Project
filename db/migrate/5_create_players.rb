class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :in_game_name
      t.references :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
