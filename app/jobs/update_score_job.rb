class UpdateScoreJob < ApplicationJob
  queue_as :default

  def perform (board)
    board.update_score
  end
end
