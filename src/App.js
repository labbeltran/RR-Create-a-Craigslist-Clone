// Import data
import React, { useState } from 'react'
// Import components
import './App.css';
import Searchbar from './Searchbar.js'
import Directory from './Directory.js'
import Sidebar from './Sidebar.js'
import Help from './Help.js'


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
