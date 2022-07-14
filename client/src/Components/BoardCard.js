import React from 'react'

function BoardCard({board}) {
  console.log(board)
  return (
    <div>
      <h2>{board.team.team_name}</h2>
      <div className="grid2">
        {board.tiles.map(tile=><div key={tile.id} className={tile.status==="complete"?"grid2-item-complete":"grid2-item"}>
          <p>{tile.description}</p>
          <p>Value: {tile.value} points</p>
          <p>Status: {tile.status}</p>
        </div>)}

      </div>
      
    
    </div>
  )
}

export default BoardCard