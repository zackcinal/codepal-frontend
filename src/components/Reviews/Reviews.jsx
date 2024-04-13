import React from "react";
import "./Reviews.css";

function Reviews({review}) {
  return (
    <div className="reviewContainer">
       <img src={review.reviewer.profile_picture} alt={review.name} className="review-image" />
      <h1>By {review.reviewer.user.username}</h1>
      <p>{review.review}</p>
     
    </div>
  );
}

export default Reviews;
