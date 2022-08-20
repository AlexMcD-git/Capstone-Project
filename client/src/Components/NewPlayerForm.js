import React, {useState} from 'react'

function NewPlayerForm({teams}) {
    const [newPlayerName, setNewPlayername] = useState("")
    const [selectTeam, setSelectTeam] = useState("")



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
  return (
    <form onSubmit={(e)=>createPlayer(e)}>
    <label>Add a player: </label>
    <input type="text" name="player" value={newPlayerName} onChange={(e)=>setNewPlayername(e.target.value)}></input>
    <select value={selectTeam} onChange={e=>setSelectTeam(e.target.value)}>
        <option>Pick A Team For This Player</option>
        {teams.map(team=><option key={team.id}>{team.team_name}</option>)}
    </select>
    <button type="submit">Create Player</button>
</form>
  )
}

export default NewPlayerForm