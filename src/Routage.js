import React from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from './composant/page/Landing';
import Contact from './composant/page/Contact';
import Home from './composant/page/Home';
export default function Routage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />     
        <Route path="/*" element={<Landing />} />     
      </Routes>
    </div>
  )
}
