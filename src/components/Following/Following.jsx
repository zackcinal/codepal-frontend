import "./Following.css"

function Following({ following }) {

 
  return (
    <div className="following-item">
      {following?.map((follow) => {
        return (
        <div className="following-container"> 
          <h2>{follow.user.first_name}</h2>
          <div className="following-image">
          <img src={"http://127.0.0.1:8000/" + follow.profile_picture} alt="User Description" />
          </div>
          <p>{follow.description}</p>
        </div>
        )})}

    </div>
  );
}


export default Following