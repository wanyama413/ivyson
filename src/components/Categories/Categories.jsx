import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Categories.module.css'
import two from '../../assets/cold.jpeg'
import aircondition from '../../assets/aircondition.jpeg'

import sick from '../../assets/sick.jpg'
import service from '../../assets/service.jpeg'
import setup from '../../assets/setup.jpg'
const Categories = () => {
  return (
    <div className={classes.category}>
        <div className={classes.one}>
<img src={sick} alt=''/>
            <button className={classes.btn}><Link to='/subcategory/6'>Air condition equipment</Link></button>
        </div>
        <div className={classes.two}>
          <img src={setup} alt=''/>
            <button className={classes.btn}><Link to='/products/2'>Laboratory equipments</Link></button>
        </div>
        <div className={classes.three}>
          <img src={service} alt=''/>
            <button className={classes.btn}><Link>Refriegeration spareparts</Link></button>
        </div>
        <div className={classes.four}>
          <img src={setup} alt=''/>
            <button className={classes.btn}><Link>Setting up laboratories</Link></button>
        </div>
        <div className={classes.five}>
          <img src={two} alt=''/>
            <button className={classes.btn}><Link>Cold storage units</Link></button>
        </div>
        <div className={classes.six}>
          <img src={aircondition} alt=''/>
            <button className={classes.btn}><Link>Air condition installation</Link></button>
        </div>
    </div>
  )
}

export default Categories