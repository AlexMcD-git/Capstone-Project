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

    function updateNewAdmin(e){
        const changedValue = e.target.name
        setNewAdmin({...newAdmin, [changedValue]: e.target.value})
    }

    function submitNewAdmin(e){
        e.preventDefault()
        fetch(`/admins`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAdmin)
        })
        .then(r=>r.json())
        .then(data=>window.alert(`${data.username} created.`)
        )
        setNewAdmin({
            username: "",
            password: ""
        })
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
                <option>Select a Game to Set as Active</option>
            {games.map(game=> <option key={game.id}>{game.name}</option>)}
            </select>
            <button type="submit">Change Active Game</button><br/>
        </form>

        <form onSubmit={(e)=>submitNewAdmin(e)}>
            <label>Create a new admin</label><br/>
            <label>Username:</label>
            <input name="username" value={newAdmin.username} onChange={(e)=>updateNewAdmin(e)}></input><br/>
            <label>Password:</label>
            <input name="password" value={newAdmin.password} onChange={(e)=>updateNewAdmin(e)}></input><br/>
            <button type="submit">Add New Admin</button>

        </form>
    </div>
  )
}

export default OwnerControls