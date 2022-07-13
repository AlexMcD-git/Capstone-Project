import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setGame } from '../features/game'


function OwnerControls() {
    const dispatch = useDispatch()
    const [games, setGames]= useState([])
    //i named too many variables game lol
    const [ga, setGa]= useState("")

    useEffect(() => {
        fetch('/games').then(r=>r.json()).then(setGames).then(setGame(games[0]))
    },[])

    function submitActive(e){
        e.preventDefault()
        const newActiveGame = games.filter(g=>g.name === ga)[0]
        console.log(newActiveGame)
        fetch(`games/${newActiveGame.id}/set_active`,{
            method: 'PATCH',
        })
        .then(r=>r.json())
        .then(data=>dispatch(setGame(data)))
    }


  return (
    <div>
        <form onSubmit={(e)=>submitActive(e)}>
            
            <select value={ga} onChange={e=>setGa(e.target.value)}>
            {games.map(game=> <option key={game.id}>{game.name}</option>)}
            </select>
            <br/>
            <button type="submit">Change Active Game</button>
        </form>
    </div>
  )
}

export default OwnerControls