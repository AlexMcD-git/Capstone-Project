import React, {useEffect, useState} from 'react'
import { useSelector } from "react-redux"

function Leaderboard() {
  const [rankedBoards, setRankedBoards] = useState([])
  const activeGame = useSelector ((state) => state.game.value)
  useEffect(()=>{
    setRankedBoards([...activeGame.boards].sort((a, b) => (a.score<b.score)?1:-1))
  },[]) 

  return (
    <div>
        <h1>Current Standings:</h1>
        <div className="Leaderboard">
        {rankedBoards.map(board=><div key={board.id}>{board.score} points: {board.team.team_name+" "}({board.team.players.map(p=>p.in_game_name+", ").join('').slice(0,-2)})</div>)}
        </div>
    </div>
  )
}

export default Leaderboard