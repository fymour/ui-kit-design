import React from 'react'
import { Route, Routes } from "react-router-dom";
import Introduction from "./Introduction";
import './Pages.css'

export default function Pages() {
  return (
    <div className='pages'>
        <Routes>
          <Route path="/introduction" element={<Introduction/>}/>
        </Routes>
    </div>
  )
}
