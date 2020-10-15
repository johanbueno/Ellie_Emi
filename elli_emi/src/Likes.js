import React, { useState } from 'react';

function Likes() {
    const [counter,setCounter] = useState(0);
    return (
        <div>
        ❤️
        <button onClick={() => setCounter(counter+1)}> {counter} </button>
        </div>
        
    )

}

export default Likes;



    