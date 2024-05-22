import "./Following.css";

function Following({ following }) {
  return (
    <div className="following-container">
      {following?.map((follow) => {
        return (
          <div className="following-individual">
            <img
              src={follow.profile_picture}
              alt="User Description"
              className="following-img"
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

export default Following;
