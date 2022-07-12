import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux"
import {useNavigate} from 'react-router-dom'

import TileSubmit from "./TileSubmit";
import IntroductionPage from "./IntroductionPage";
import NavBar from "./NavBar";
import BoardsContainer from "./BoardsContainer";
import AdminTab from "./AdminTab";

function App() {
  const navigate = useNavigate()
  const admin = useSelector ((state) => state.admin.value)
  useEffect (() => navigate("/welcome"),[])


  return(
    <>
    <NavBar/>

    <Routes>
      <Route exact path="/welcome" element={<IntroductionPage/>}/>
      <Route exact path="/submit" element={<TileSubmit/>}/>
      <Route exact path="/boards" element={<BoardsContainer/>}/>
      {admin.username!==""?<Route exact path="/admin" element={<AdminTab/>}/>:null}
    </Routes>
    </>
  )
}

export default App;
