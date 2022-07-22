import React from 'react'
import { Route, Routes } from "react-router-dom";
import Introduction from "./Introduction";
import './Pages.css'
import { ButtonPage } from './ButtonPage/ButtonPage';
import CollapsePage from './CollapsePage/CollapsePage';
import InputPage from './InputPage/InputPage';
import ScrollAreaPage from './ScrollAreaPage/ScrollAreaPage';
import TabsPage from './TabsPage/TabsPage';
import { FooterPage } from './FooterPage/FooterPage';
import { Glossary } from './Glossary/Glossary';


export default function Pages() {
  return (
    <div className='pages'>
        <Routes>
          <Route path="/" element={<Introduction/>}/>
          <Route path="/glossary" element={<Glossary/>}/> 
          <Route path="/button" element={<ButtonPage/>}/> 
          <Route path="/collapse" element={<CollapsePage/>}/> 
          <Route path="/input" element={<InputPage/>}/> 
          <Route path="/footer" element={<FooterPage/>}/> 
          <Route path="/scrollarea" element={<ScrollAreaPage/>}/> 
          <Route path="/tabs" element={<TabsPage/>}/> 
          <Route path="/footer" element={<FooterPage/>}/> 

        </Routes>
    </div>
  )
}
