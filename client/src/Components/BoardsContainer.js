import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setGame } from '../features/game'
import Leaderboard from './Leaderboard'
import BoardCard from './BoardCard'


function BoardsContainer() {
  const dispatch=useDispatch()

  useEffect(()=> {
    fetch("/games/active").then(res=>res.json()).then(game=>dispatch(setGame(game)))
  },[])


  return (
    <div>BoardsContainer
        <Leaderboard/>
        <BoardCard/>
    </div>
  )
}

export default BoardsContainer