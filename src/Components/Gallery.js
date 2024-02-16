// Gallery.js
import React from 'react';
import { postings } from '../path/to/postings'; // Adjust the import path as necessary
import Posting from './Component/Posting'; // Adjust the path to where your Posting component is located

function Gallery() {
  const postList = postings.map((posting, index) => (
    <Posting key={index} {...posting} />
  ));

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      {postList}
    </div>
  );
}

export default Gallery;