import React, {useEffect, useState} from 'react'
import { useSelector } from "react-redux"
function TileSubmit() {
  const activeGame = useSelector ((state) => state.game.value)
  // console.log(activeGame)


  const initialState={
    image_url: "",
    team: activeGame.boards[0].team.team_name,
    tile: activeGame.boards[0].tiles[0].description
}

const [formState, setFormState] = useState(initialState)

const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prevState) => ({...prevState, [name]: value}))
}
function handleSubmit(e){
  e.preventDefault()
  const boardToUpdate= activeGame.boards.filter(board => board.team.team_name === formState.team)[0]
  const tileToUpdate = boardToUpdate.tiles.filter(tile => tile.description===formState.tile)[0]
  fetch(`tiles/${tileToUpdate.id}/link_submit`,{
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({image_url: formState.image_url})
  }).then(r=>r.json)
  .then(setFormState(initialState))
}

  return (
    
    <div>
      <h1>Have you acquired a drop for a Bingo tile? Submit it here!</h1>
      <h2>Reminder: You are submitting a *link* so upload it elsewhere for admins to review</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Image Url: </label>
        <input type="text" name="image_url" value={formState.image_url} onChange={handleChange}></input>
        <br/>
        <label>Which team are you submitting for? </label>
        <select name="team" value={formState.team} onChange={handleChange}>
          {activeGame.boards.map(board => <option key={board.team.id}>{board.team.team_name}</option>)}
        </select>
        <br/>
        <label>Which tile? </label>
        <select name="tile" value={formState.tile} onChange={handleChange}>
          {activeGame.boards[0].tiles.map(tile=><option key={tile.id}>{tile.description}</option>)}
        </select>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TileSubmit