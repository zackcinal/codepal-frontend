import React from 'react'
import "./Footer.css"
import "../../assets/abdoul.png"

function Footer() {
  return (
    <div className='footerMainPage'>
      <h3 className='footerTitle'>{` < About Us />`}</h3>
      <div className='footerCreators'>
        <a href="https://github.com/arehmanlatif1" target='_blank'>
        <div className='creatorProfile'>
          <div className='creatorProfilePicture' id="abdoul"></div>
          <div>ABDOUL<br/>REHMAN</div>
        </div>
        </a>
        <a href="https://devportfolioant.netlify.app/" target='_blank'>
        <div className='creatorProfile'>
          <div className='creatorProfilePicture' id="antonio"></div>
          <div>ANTONIO<br/>FELIX</div>
        </div>
        </a>
        <a href="https://www.cesariparrea.com" target='_blank'>
        <div className='creatorProfile'>
          <div className='creatorProfilePicture' id="cesar"></div>
          <div>CESAR<br/>IPARREA</div>
        </div>
        </a>
        <a href="https://www.zackcinal.com" target='_blank'>
        <div className='creatorProfile'>
          <div className='creatorProfilePicture' id="zack"></div>
          <div>ZACK<br/>CINAL</div>
        </div>
        </a>
      </div>
    </div>
  )
}

export default Footer