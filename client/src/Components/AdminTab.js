import React, { useState, useEffect } from 'react'
import OwnerControls from './OwnerControls'
import { useSelector, useDispatch } from "react-redux"
import TileListItem from './TileListItem'
import { setGame } from '../features/game'
import NewGameForm from './NewGameForm'
import NewPlayerForm from './NewPlayerForm'

function AdminTab() {
    const dispatch = useDispatch()
    const admin = useSelector ((state) => state.admin.value)
    const [newTeamName, setNewTeamName] = useState("")
    const [players, setPlayers] = useState([])
    const [teams, setTeams] = useState([])
    const [pendingTiles, setPendingTiles] = useState([])


    const activeGame = useSelector ((state) => state.game.value)
    useEffect(()=>{setTeams(activeGame.boards.map(board=>board.team))},[])
    useEffect(()=>{setPlayers(activeGame.boards.map(board=>board.team).map(t=>t.players).flat(1))},[])

    useEffect(()=> {
        fetch('tiles/pending').then(r=>r.json()).then(data=>setPendingTiles(data))
    },[])

    function acceptTile(id){
        fetch(`/tiles/${id}/accept`,{
            method: 'PATCH'
        })
        .then(res=>res.json())
        .then(tile=>setPendingTiles([...pendingTiles].filter(t=>t.id!==tile.id)))
    }
    function declineTile(id){
        fetch(`/tiles/${id}/decline`,{
            method: 'PATCH'
        })
        .then(res=>res.json())
        .then(tile=>setPendingTiles([...pendingTiles].filter(t=>t.id!==tile.id)))
    }

    //creates a board for the team too in order to link it to the game
    function createTeam(e){
        e.preventDefault()
        fetch(`/teams/${activeGame.id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({team_name: newTeamName})
        }).then(res=>res.json())
        //this returns the game that the team is associated with, through its board
        .then(game=>{
            dispatch(setGame(game))
            setNewTeamName("")
        })
    }   


    function deletePlayer(id){
        fetch(`/players/${id}`,{
            method: 'DELETE'
        })
        .then(setPlayers([...players].filter(p => p.id !== id)))
    }
  return (
    <div>
        {admin.is_owner?<OwnerControls/>:null}
        <h1>Pending Tiles:</h1>
        <ul>
        {pendingTiles.map(tile=><TileListItem key={tile.id} tile={tile} acceptTile={acceptTile} declineTile={declineTile}/>)}
        </ul>
        <br/>

        <h1>Manage Teams</h1>
        {/* add a new team to the active game */}
        <form onSubmit={(e)=>createTeam(e)}>
            <label>Add a team: </label>
            <input type="text" name="team" value={newTeamName} onChange={(e)=>setNewTeamName(e.target.value)}></input>
            <button type="submit">Create Team</button>
        </form>

        {/* create a new player */}
        <NewPlayerForm teams={teams}/>

        <br/>
        <h2>Player List:</h2>
        <ul>
            {players.map(p=><li key={p.id}>{p.in_game_name} <button onClick={()=>deletePlayer(p.id)}>Delete</button></li>)}
        </ul>

        <h1>Create a new game</h1>
        <NewGameForm/>
    </div>
  )
}

export default AdminTab