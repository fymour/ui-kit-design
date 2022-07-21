import React from 'react'
import { Route, Routes } from "react-router-dom";
import Introduction from "./Introduction";
import './Pages.css'
import { ButtonPage } from './ButtonPage/ButtonPage';
import CollapsePage from './CollapsePage/CollapsePage';

export default function Pages() {
  return (
    <div className='pages'>
        <Routes>
          <Route path="/introduction" element={<Introduction/>}/>
          <Route path="/button" element={<ButtonPage/>}/> 
          <Route path="/collapse" element={<CollapsePage/>}/> 
        </Routes>
    </div>
  )
}
