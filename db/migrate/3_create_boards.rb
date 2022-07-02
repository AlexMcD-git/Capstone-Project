class CreateBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :boards do |t|
      t.references :game, null: false, foreign_key: true
      t.integer :score

      t.timestamps
    end
  end
end
