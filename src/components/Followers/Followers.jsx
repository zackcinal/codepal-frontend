import "./Followers.css"

function Followers({ followers }) {

  return (
    <div className="follow-item">
      {followers?.map((follow) => {
        return (
        <div className="follow-container"> 
          <h2>{follow.user.first_name}</h2>
          <div className="follow-image">
          <img src={"http://127.0.0.1:8000/" + follow.profile_picture} alt="User Description" />
          </div>
          <p>{follow.description}</p>
        </div>
        )})}
    </div>
  );
}


export default Followers