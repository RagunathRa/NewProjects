import React, { useState } from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
const Counter = () => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const Increment = () => {
    setCount((prevValue) => prevValue + 1);
    setLiked(true);
    setDisliked(false);
  };

  const Decrement = () => {
    setCount((prevValue) => prevValue - 1);
    setLiked(false);
    setDisliked(true);
  };

  const Reset = () => {
    setCount(0);
    setLiked(false);
    setDisliked(false);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      padding: '10px',
          border: 'none',
    //   width:'200px'
    },
    ram: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30vh',
    },
    bor: {
      border: '2px solid blue',
      height: '400px',
    },
    new: {
      border: 'none',
        padding: '30px',
    
    },
    like: {
      fontSize: '5.2rem',
      color: liked ? 'red' : 'initial',
    },
    dislike: {
      fontSize: '5.2rem',
      color: disliked ? 'blue' : 'initial',
      },
      count: {
        fontSize: '5.2rem',
          color: count ? 'green' : 'initial',
          border: 'none',
          //  
      },
      one:{
        padding: '30px',
          marginTop: '40px',
          marginBottom: '20px',
          
     }
  };

  return (
    <div>
      <h1 style={styles.ram}>Counter</h1>
      <div style={styles.container}>
        <button style={styles.new}    onClick={Increment}>
        <ThumbUpOffAltIcon style={styles.like} />
                 
          <p>like</p>
          
        </button>
  
              <button style={styles.count} >
          <i style={styles.one}>({count})</i>
         
                  </button>

        <button style={styles.new} onClick={Decrement}>
   
                  <ThumbDownOffAltIcon style={styles.dislike} />
                  <p>Dislike</p>
        </button>

        <button style={styles.new} onClick={Reset}>
                  <RestartAltIcon sx={{ fontSize:'5.2rem'}} />
                  <p>Reset</p>
        </button>
      </div>
    </div>
  );
};

export default Counter;
