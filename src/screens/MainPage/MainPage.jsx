import React from 'react'
import "./MainPage.css"

function MainPage() {
  return (
    <div className='mainPageContainer'>
      <div className='mainPageProfileContainer'>


      </div>
      <div className='mainPageScreen'>
        <div className='mainPageOptions'>
          <button className='mainPageOptionsBtn'>Projects</button>
          <button className='mainPageOptionsBtn'>Reviews</button>
          <button className='mainPageOptionsBtn'>Followers</button>
          <button className='mainPageOptionsBtn'>Following</button>
        </div>
        <div className='mainPageDisplay'>
          <div className='review'>Review</div>
          <div className='review'>Review</div>
          <div className='review'>Review</div>
          <div className='review'>Review</div>
          <div className='review'>Review</div>
          <div className='review'>Review</div>
          <div className='review'>Review</div>
        </div>
      </div>



    </div>
  )
}

export default MainPage