import React from 'react'

function TileListItem({tile, acceptTile, declineTile}) {

  return (
    <li>
        <p>Does this fit the description: {tile.description}</p>
        <button onClick={()=>acceptTile(tile.id)}>Approve This Claim</button>
        <button onClick={()=>declineTile(tile.id)}>Deny This Claim</button> <br/>
        <img 
            src={tile.image_url}
            alt={tile.description}
        />
    </li>
  )
}

export default TileListItem