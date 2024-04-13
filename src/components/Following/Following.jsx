import "./Following.css"

function Following({ following }) {
 
  return (
    <div>
      {following?.map((follow) => {
        return (
        <div> 
          <h2>{follow.user.first_name}</h2>
          <img src={"http://127.0.0.1:8000/" + follow.profile_picture} alt="User Description" />
          <p>{follow.description}</p>
        </div>
        )})}
    </div>
  );
}


export default Following