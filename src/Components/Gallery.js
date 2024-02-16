// Gallery.js
import React from 'react';
import { postings } from '../postings'; 
import Posting from './Component/Posting'; 

function Gallery() {
  const postList = postings.map((posting, index) => {
    return <Posting data={data} key={i}/>
  }
  );

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      {postList}
    </div>
  );
}

export default Gallery;