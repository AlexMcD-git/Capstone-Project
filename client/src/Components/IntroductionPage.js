import React, {useState, useEffect} from 'react'

function IntroductionPage() {
    const [exampleGame, setExampleGame] = useState({})

    useEffect (() => {
        fetch("/games/example").then(res=>res.json()).then(setExampleGame)
    },[])
  return (
    <div>IntroductionPage
        
    </div>
  )
}

export default IntroductionPage