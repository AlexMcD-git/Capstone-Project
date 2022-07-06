class AddBoardToTeams < ActiveRecord::Migration[7.0]
  def change
    add_reference :teams, :board, foreign_key: true
  end
end
