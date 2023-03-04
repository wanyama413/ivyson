import React, { useState } from 'react'
import classes from './Slider.module.css'

import one from '../../assets/five.png'
import two from '../../assets/six.png'
import bitzer from '../../assets/bitzer.png'
import danfos from '../../assets/danfoss.png'

const Slider = () => {
    const [currentSlider,setCurrentSlider]=useState(0)
    const data=[one,bitzer,danfos]
    const prevSlide=()=>{
        setCurrentSlider(currentSlider===0?2:prevState=>prevState-1)
    }
    const nextSlide=()=>{
         setCurrentSlider(currentSlider===2?0:prevState=>prevState+1)
    }
  return (
    <div className={classes.slider}>
        <div className={classes.container} style={{transform:`translateX(-${currentSlider*100}vw)`}}>
            <img className={classes.img} src={data[0]} alt=''/>
            <img className={classes.img} src={data[1]} alt=''/>
            <img className={classes.img} src={data[2]} alt=''/>
            
        </div>
        <div className={classes.icons}>
            <div className={classes.icon} onClick={prevSlide}>{"<"}</div> 
             <div className={classes.icon} onClick={nextSlide}>{">"}</div> 

        </div>
    </div>
  )
}

export default Slider