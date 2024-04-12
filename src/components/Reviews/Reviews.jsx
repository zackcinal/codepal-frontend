import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { getReviews } from "../../services/reviews.js";
import { getProfile } from "../../services/profile.js";

function Reviews(props) {
  const [profile, setProfile] = useState([]);
  const [reviews, setReviews] = useState([]);
  console.log(props.review.reviewed_user)

  useEffect(() => {
    const fetchReviews = async () => {
      if (props.profile && props.profile.id) {
        const revUser = await getReviews(props.profile.id);
        setReviews(revUser);
      }
    };

    const fetchProfile = async () => {
      if (props.profile && props.profile.id) {
        const userProfile = await getProfile(props.profile.id);
        setProfile(userProfile);
      }
    };

    fetchReviews();
    fetchProfile();
  }, [props.profile]);

  return (
    <div className="reviewContainer">
      <p>{props.review.review}</p>
      <p>{props.review.reviewed_user.description}</p>
    </div>
  );
}

export default Reviews;
