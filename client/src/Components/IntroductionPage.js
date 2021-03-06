import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
function IntroductionPage() {

  return (
    <div>
      <h1>Welcome, to Runescape Bingo!</h1>

      <h1>What?</h1>
      <h2>For those unfamiliar <a href="https://www.runescape.com/">RuneScape</a> is a long-running online game with very little restriction on what you can do at any given time.</h2>
      <h2>Activities are usually broken down into two main categories, "Skilling" and "Bossing" or "PvM"(Player vs. Monster)</h2>
      <h2>Over the last couple years, people have started to run "Bingo" games, where each tile on the Bingo board represents some sort of achievement in game. To keep things fair, all individuals or teams have the same board and tiles award points. The goal is to either be the first group to complete the board or have the most points at the end of the event.</h2>
      <h2>While this doesn't really seem like "conventional" bingo, where you are trying to complete a row, column, or diagonal, that is the name the community has come to call it, so I will keep that name</h2>
      <h2>In reality, it is kind of just a list of tasks, but presented in a "Bingo"-like format. Due to random elements of the game, there is still a luck-based component.</h2>
        
      <h1>So, how does it work?</h1>
      <h2>If you found yourself here, someone is probably running a Bingo game. Talk to the admins to get yourself added. I've reserved this functionality to admins.</h2>
      <h2>In the "boards" tab, you can see the current standings for the active game, as well as each team's progress</h2>
      <h2>In the "submit for a tile" you will submit a link to the screenshot of you fulfulling the requirements for a tile. You will select the tile and your team (viewable in Boards tab).</h2>
      <h2>Admins: Login to view the Admins tab. Here you will see a description with an image. Approve or decline the claim based on the image. You can also create teams and add players to those teams.</h2>
    </div>
  )
}

export default IntroductionPage