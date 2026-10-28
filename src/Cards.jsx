import { useState } from 'react';
const Cards = ({ nombre , imagen, onLike}) => {
  const [likes ,setLikes]= useState(0);

  const handleClick = ()=>{
    setLikes(likes + 1)
    onLike();
  }
   
  return (
    <div style={{ border:'1px solid #ccc', 
      padding: '20px',
      margin: '10px',
      borderRadius: '5px',
      alignItems: 'center',
      textAlign: 'center',
      borderColor: 'rgb(168, 85, 247)',


    }}> 
      <img src={imagen} alt={nombre} width="130px" height="130px" />
      <h3>{nombre}</h3>
      <button style ={{
        width: '100px',
        padding: '7px',
        margin: '10px',
        backgroundColor: 'rgb(34, 197, 94)',
        border: 'none',
        borderRadius: '5px',
        color: 'white', 
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
      onClick={handleClick}
      >

        Like {likes}
      </button>
      {likes >=3 && <p style={{color: 'rgb(232, 16, 128)',}}>¡Me encanta este futbolista!</p>}
    </div>
  );
};

export default Cards;
