import "./UserPreview.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addFollows } from "../../services/follows";
import { useEffect, useState } from "react";
import Modal from "react-modal"
import { addReview } from "../../services/reviews";

function UserPreview({ profile, myProfile, isFollowed, checkIfFollowed }) {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [followed, setFollowed] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [reviewContent, setReviewContent] = useState("");

  useEffect(() => {
    setFollowed(isFollowed);
  }, []);

  function outerButtonClick() {
    navigate(`/userprofile/${profile.id}`);
  }

  async function innerButtonClick(event) {
    console.log("Inner button clicked");
    event.stopPropagation();
    await addFollows(myProfile.id, profile.id);
    checkIfFollowed();
    navigate("/home");
  }

  function handleAddReviewClick() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleReviewContentChange(event) {
    setReviewContent(event.target.value);
  }

  async function handleSubmitReview(event) {
    event.preventDefault();

    // create review
    await addReview(profile.id, { review: reviewContent })

    setModalIsOpen(false);
    setReviewContent("");
  }

  return (
    <button
      // onClick={() => {
      //   outerButtonClick();
      // }}
      className="profileCard"
    >
      <div className="profileCardHeader">
        <Link to={`/userprofile/${profile.id}`}>
          <img src={profile.profile_picture} alt={profile.user.username} />
        </Link>
        <h2>{`${profile.user.first_name} ${profile.user.last_name}`}</h2>
        <h4>{profile.location}</h4>
        <h4>
          {profile.role == "FS"
            ? "Full Stack"
            : profile.role == "FE"
            ? "Front End"
            : profile.role == "BE"
            ? "Back End"
            : profile.role == "UX"
            ? "User Experience"
            : ""}
        </h4>
      </div>

      
      <div className="profileCardFollowers">
        {myProfile && !isFollowed && (
          <>
            <button
              onClick={(event) => {
                innerButtonClick(event);
              }}
              className="profileCardFollowBtn"
            >
              Follow
            </button>
          </>
        )}
        <button onClick={handleAddReviewClick}>Add Review</button>
      </div>
  
      <Modal
        className="modal-content"
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Add Review Modal"
      >
        <button className="profileCardFollowBtn" onClick={handleCloseModal}>Close</button>
        <div className="reviewModal">
          <h2>Add Review</h2>
          <form onSubmit={handleSubmitReview}>
            <textarea
              value={reviewContent}
              onChange={handleReviewContentChange}
              placeholder="Enter your review here"
              rows={4}
              cols={50}
            />
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </Modal>
    </button>
  );
}
export default UserPreview;
