# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'pry'
puts "Planting the 🌱🌱🌱seeds🌱🌱🌱..."
example_teams_count = 2
players_per_example_team = 2
statuses=["incomplete", "complete", "pending"]

game_example=Game.create(name: "Bingo Example", is_active: false)
25.times do |n|
    tile=TemplateTile.create(game: game_example, position: n+1, description:"EXAMPLE #{n+1}", value: 5)
end

example_teams_count.times do |n|
    team=Team.create(team_name:"Team #{n+1}")
    players_per_example_team.times do
        player=Player.create(in_game_name:Faker::Name.name, team:team)
    end
    board=Board.create!(game:game_example, score: 0, team: team)
    team.board=board

    25.times do |n|
        template=TemplateTile.find_by(position:n+1, game:board.game)
        Tile.create!(board:board, position:template[:position], description:template[:description], value:template[:value], status:statuses.sample, image_url:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350")
    end
end
puts "The seeds have (supposedly) been planted :-)"