import React, {useState, useEffect} from 'react'

function BoardCard({board}) {
  const [sortedTiles, setSortedTiles] = useState([])
  useEffect(()=>{
    setSortedTiles([...board.tiles].sort((a,b)=> (a.id>b.id)?1:-1))
  },[])

  return (
    <div>
      <h2>{board.team.team_name}</h2>
      <div className="grid2">
        {sortedTiles.map(tile=><div key={tile.id} className={tile.status==="complete"?"grid2-item-complete":"grid2-item"}>
          <p>{tile.description}</p>
          <p>Value: {tile.value} points</p>
          <p>Status: {tile.status}</p>
        </div>)}

      </div>
      
    
    </div>
  )
}

export default BoardCard