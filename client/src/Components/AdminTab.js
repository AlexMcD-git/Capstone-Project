import React, { useState, useEffect } from 'react'
import OwnerControls from './OwnerControls'
import { useSelector, useDispatch } from "react-redux"
import TileListItem from './TileListItem'
import { setGame } from '../features/game'
import NewGameForm from './NewGameForm'

function AdminTab() {
    const dispatch = useDispatch()
    const admin = useSelector ((state) => state.admin.value)
    const [newPlayerName, setNewPlayername] = useState("")
    const [newTeamName, setNewTeamName] = useState("")
    const [players, setPlayers] = useState([])
    const [teams, setTeams] = useState([])
    const [pendingTiles, setPendingTiles] = useState([])
    const [selectTeam, setSelectTeam] = useState("")

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

    function createPlayer(e){
        e.preventDefault()
        const teamForNewPlayer = teams.filter(t=>t.team_name===selectTeam)[0]
        fetch(`/players/${teamForNewPlayer.id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({in_game_name: newPlayerName})
        })
        .then(res=>res.json())
        .then(data=>{
            // dispatch(setGame(data))
            setNewPlayername("")
        })
    }

    function deletePlayer(id){
        fetch(`/players/${id}`,{
            method: 'DELETE'
        })
        .then(setPlayers([...players].filter(p => p.id !== id)))
    }
    console.log(admin)
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
        <form onSubmit={(e)=>createPlayer(e)}>
            <label>Add a player: </label>
            <input type="text" name="player" value={newPlayerName} onChange={(e)=>setNewPlayername(e.target.value)}></input>
            <select value={selectTeam} onChange={e=>setSelectTeam(e.target.value)}>
                {teams.map(team=><option key={team.id}>{team.team_name}</option>)}
            </select>
            <button type="submit">Create Player</button>
        </form>
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