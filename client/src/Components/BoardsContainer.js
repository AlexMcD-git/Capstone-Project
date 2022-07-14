import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setGame } from '../features/game'
import Leaderboard from './Leaderboard'
import BoardCard from './BoardCard'


function BoardsContainer() {
  const dispatch=useDispatch()
  useEffect(()=> {
    fetch("/games/active").then(res=>res.json()).then(game=>dispatch(setGame(game)))
  },[])

  const [boards, setBoards] = useState([])
  const activeGame = useSelector ((state) => state.game.value)
  useEffect(()=>{
    setBoards([...activeGame.boards])
  },[]) 

  return (
    <div>BoardsContainer
        <Leaderboard/>
        <h1>Board Progress For Each Team:</h1>
        {boards.map(b=><BoardCard key={b.id} board={b}/>)}
    </div>
  )
}

export default BoardsContainer