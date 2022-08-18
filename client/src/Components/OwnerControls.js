import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setGame } from '../features/game'


function OwnerControls() {
    const dispatch = useDispatch()
    const [games, setGames]= useState([])
    //i named too many variables game
    const [ga, setGa]= useState("")
    const [newAdmin, setNewAdmin]= useState({
        username: "",
        password: ""
    })

    function formChange(e){
        const target = e.target
        setNewAdmin({...newAdmin, target: e.target.value})
    }

    useEffect(() => {
        fetch('/games').then(r=>r.json()).then(setGames).then(setGame(games[0]))
    },[])

    function submitActive(e){
        e.preventDefault()
        const newActiveGame = games.filter(g=>g.name === ga)[0]
        fetch(`games/${newActiveGame.id}/set_active`,{
            method: 'PATCH',
        })
        .then(r=>r.json())
        .then(data=>{
            fetch('/games').then(r=>r.json()).then(setGames).then(setGame(games[0]))
            dispatch(setGame(data))
        })
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

        <form>
            <label>Create a new admin</label><br/>
            <label>Username:</label>
            <input value={newAdmin.username} onChange={updateNewAdmin(e)}></input><br/>
            <label>Password:</label>
            <input value={newAdmin.password} onChange={updateNewAdmin(e)}></input><br/>

        </form>
    </div>
  )
}

export default OwnerControls