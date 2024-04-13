import "./UserPreview.css"
import { useNavigate, useParams } from "react-router-dom";
import { addFollows } from "../../services/follows";

function UserPreview({ profile, myProfile }) {
  const navigate = useNavigate();
  const { userId } = useParams();


  function outerButtonClick() {
      navigate(`/userprofile/${profile.id}`);
  }

  async function innerButtonClick(event) {
      console.log("Inner button clicked");
      event.stopPropagation();
      await addFollows(myProfile.id, profile.id)
      navigate("/home");
  }

  return (
    <button 
      onClick={() => {
      outerButtonClick()
    }}
    className='profileCard'>
      <div className='profileCardHeader'>
        <img src={profile.profile_picture} alt={profile.user.username}/>
        <h2>{`${profile.user.first_name} ${profile.user.last_name}`}</h2>
        <h4>{profile.location}</h4>
        <h4>{profile.role=="FS" ? "Full Stack" : profile.role=="FE" ? "Front End" : profile.role=="BE" ? "Back End" : profile.role=="UX" ? "User Experience" : ""}</h4>
      </div>
      <div className='profileCardFollowers'> 
        {myProfile && <button 
          onClick={(event) => {
            innerButtonClick(event)
          }}
        className='profileCardFollowBtn'>Follow</button>}
      </div>
    </button>
  )
}
export default UserPreview