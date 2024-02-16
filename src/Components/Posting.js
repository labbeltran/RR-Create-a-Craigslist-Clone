import React, {useState} from 'react'
const craigPost = require('../postings.js')

function Posting(){
let postList = craigPost.postings.map((data, i)=>{
    return <Posting data={data} key={i}/>;
})
    return(
    
        <div className="posting">
            <h1>Postings</h1>
            {postList}
        </div>
    );
}

export default Posting