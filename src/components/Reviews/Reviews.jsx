import React from "react";
import "./Reviews.css";

function Reviews({ review }) {
  return (
    <div className="">
    <div className="review-item">
      
      <div className="review-image">
        
        <img
          src={review.reviewer.profile_picture}
          alt={review.name}
        />
      </div>
      <div className="reviewName">
        
        <h3>{review.reviewer.user.username}</h3>
      </div>
      <div className="reviewComment">
       
        <p>{review.review}</p>
      </div>
    </div>
    </div>
  );
}

export default Reviews;
