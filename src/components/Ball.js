import React, { useEffect, useState } from 'react'

function Ball({getStyle}) {
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);
    const [style, setStyle] = useState({
        left: '0px',
        top: '0px'
    });
    const [dest, setDest] = useState(false);

    const timerStyle = () => {
        if(x === 250 && y === 250){
            setDest(true);
        }
        getStyle(style);
    }

    const updateXY = (newX, newY) => {
        setx(newX);
        sety(newY);
        setStyle({
            left: newX + 'px',
            top : newY + 'px'
        })
        if(dest){
            setStyle({
                left: 250 + 'px',
                top : 250 + 'px'
            })
        }
        getStyle(style);
    }

    useEffect(()=> {
        timerStyle();
        const ballMovement = (e) => {
            if(e.keyCode === 37){ // left
                updateXY(x-5, y);
            } else if(e.keyCode === 38){ //up
                updateXY(x, y-5);
            } else if(e.keyCode === 39){ // right
                updateXY(x+5, y);
            } else if (e.keyCode === 40){ // down
                updateXY(x, y+5);
            }
        }

        document.addEventListener('keydown', ballMovement);
        return ()=> document.removeEventListener('keydown', ballMovement)
    })
  return (
    <div className='ball' style={style} onLoad={timerStyle}></div>
  )
}

export default Ball