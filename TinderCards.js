import React, { useEffect, useState } from 'react'
import './TinderCard.css';
import TinderCard from 'react-tinder-card';
import axios from './axios';


function TinderCards() {

  const [people, setpeople] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const req=await axios.get('/tinder/cards');
      setpeople(req.data);
    }
    fetchData();
  },[])
  const swiped=(direction,nameToDelete)=>{// removing card means swipe elon musk left or right ie removing out of screen
      console.log("removing"+nameToDelete);
      
  };
  const outOfFrame=(name)=>{
   console.log(name+"left screen")
  };

  return (
    <div className='tinderCards'>
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          //    
          return <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={()=>outOfFrame(person.name)}
        >

          <div
           style={{backgroundImage:`url(${person.imgUrl})`}}
           className="card"
           >
            <h2>{person.name}</h2>
          </div>
        </TinderCard>
       })}
        </div >
    </div>
   
  )


}

export default TinderCards
