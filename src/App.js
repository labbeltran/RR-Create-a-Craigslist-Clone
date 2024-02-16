// Import data
import React from 'react'
// Import components
import './App.css';
import Searchbar from './Components/Searchbar.js'
import Directory from './Components/Directory.js'
import Gallery from './Components/Gallery.js'
import Sidebar from './Components/Sidebar.js'



function App(){
  return (
   <div className="App">
      <Searchbar/>
      <Gallery/>
      <Sidebar/>
      <Directory/>
   </div>
  );
}

export default App;
