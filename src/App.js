// Import data
import React, { useState } from 'react'
// Import components
import './App.css';
import Searchbar from './Components/Searchbar.js'
import Directory from './Components/Directory.js'
import Gallery from './Components/Gallery.js'
import Sidebar from './Components/Sidebar.js'
import Help from './Components/Help.js'


function App(){
  return (
   <div className="App">
      <Searchbar/>
      <Directory/>
      <Gallery/>
      <Posting/>
      <Sidebar/>
      <Help/>
   </div>
  );
}

export default App;
