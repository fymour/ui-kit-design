import React from 'react'
import { Route, Routes } from "react-router-dom";
import Introduction from "./Introduction";
import './Pages.css'
import { ButtonPage } from './ButtonPage/ButtonPage';
import CollapsePage from './CollapsePage/CollapsePage';
import InputPage from './InputPage/InputPage';
import ScrollAreaPage from './ScrollAreaPage/ScrollAreaPage';
import TabsPage from './TabsPage/TabsPage';

export default function Pages() {
  return (
    <div className='pages'>
        <Routes>
          <Route path="/introduction" element={<Introduction/>}/>
          <Route path="/button" element={<ButtonPage/>}/> 
          <Route path="/collapse" element={<CollapsePage/>}/> 
          <Route path="/input" element={<InputPage/>}/> 
          <Route path="/scrollarea" element={<ScrollAreaPage/>}/> 
          <Route path="/tabs" element={<TabsPage/>}/> 
        </Routes>
    </div>
  )
}
