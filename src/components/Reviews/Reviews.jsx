import React from "react";
import "./Reviews.css";

function Reviews({review}) {
  return (
    <div className="reviewContainer">
      <h1>By {review.reviewer.user.username}</h1>
      <p>{review.review}</p>
    </div>
  );
}

export default Reviews;
