import React from 'react'
import whatsapp from '../../assets/whatsapp.png'
import phone from '../../assets/phone.png'
import facebook from '../../assets/facebook.png'
import gmail from '../../assets/gmail.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {

  return (
    <footer>
      <div className='foot'>
<div className='footerContainer'>
 
  <ul>   
    <a href='https://goo.gl/maps/41dci6PXoMP6WBQUA'> <button className='directions'>Get Directions</button></a>
  </ul>
</div>
<div className='footerContainer'>
 
  <ul>
   
     <h4 className='copyright'>&copy; Copyrights {new Date().getFullYear()} Neptunes Refrigeration & Air Conditioning</h4>
  
    
  </ul>
</div>
<div className='footerContainer'>
    <ul>
   
      <div id='id001' className='contact'>
        <a href="https://wa.me/254742338179">
          <img src={whatsapp} alt=''/>
          </a> 
          <a href="tel:254742338179">
            <img src={phone} alt=''/>
          </a>
          <a href="mailto:refrigerationneptune@gmail.com"><img src={gmail}/></a>
          <a href="mailto:refrigerationneptune@gmail.com"><img src={twitter}/></a>
          <a href='https://www.facebook.com/profile.php?id=100078332770429'><img src={facebook} alt=''/></a>
      </div>
    
    </ul>
</div>
      </div>
   
    </footer>
  )
}

export default Footer