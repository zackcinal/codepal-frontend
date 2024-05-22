import "./Followers.css";

function Followers({ followers }) {
  return (
    <div className="followers-container">
      {followers?.map((follow) => {
        return (
          <div className="follower-individual">
            <img
              src={follow.profile_picture}
              alt="User Description"
              className="follower-img"
            />
            <div className="name-description">
              <h2>{follow.user.first_name}</h2>
              <p>{follow.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Followers;
