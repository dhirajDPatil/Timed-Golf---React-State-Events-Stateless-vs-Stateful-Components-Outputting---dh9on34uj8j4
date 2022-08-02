import React, { useEffect, useState } from 'react'

function Timer({ballXY , stop}) {
  const [time, setTime] = useState(1);

  const checkHoleReached = (id) => {
    if(ballXY.left === '250px' && ballXY.top === '250px'){
      setTime(0);
      clearInterval(id);
    }
  }

  const updateTime= () =>{
      setTime(time+1);
  }
  
  useEffect(()=> {
    const id = setInterval(()=>{
      checkHoleReached(id);
      if(!stop){
        updateTime();
      }
    }, 1*1000)
    return ()=> clearInterval(id);
  }, [time])

  return (
    <div className='heading-timer'>{time}</div>
  )
}

export default Timer