import React, { useEffect, useState } from 'react'

function Timer({ballXY}) {
  const [time, setTime] = useState(0);
  const [stop, setStop] = useState(false);
  const checkHoleReached = (id) => {
    if(ballXY.left === '250px' && ballXY.top === '250px'){
      setStop(true);
      clearInterval(id);
    }
  }
  const updateTime= () =>{
    if(!stop){
      setTime(time+1);
    }
  }
  useEffect(()=> {
    const id = setInterval(()=>{
      checkHoleReached(id);
        updateTime();
    }, 1*1000)
    return ()=> clearInterval(id);
  }, [time])

  return (
    <div className='heading-timer'>{time}</div>
  )
}

export default Timer