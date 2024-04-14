import "./Following.css";

function Following({ following }) {
  return (
    <div className="following-container">
      {following?.map((follow) => {
        return (
          <div className="following-individual">
            <img
              src={"http://127.0.0.1:8000/" + follow.profile_picture}
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
