import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
function IntroductionPage() {
    const dispatch=useDispatch()

    const [exampleGame, setExampleGame] = useState({})

    useEffect (() => {
        fetch("/games/example").then(res=>res.json()).then(setExampleGame)
    },[])

    // useEffect(()=> {
    //   fetch("/games/active").then(res=>res.json()).then(game=>dispatch(setGame(game)))
    // },[])
  return (
    <div>IntroductionPage
        
    </div>
  )
}

export default IntroductionPage