import "./ProfileCard.css";

const ProfileCard = () => {
  const user = {
    name: "Sundari",
    bio: "Frontend developer .",
    gender: "female",
    age: 21,
    isFollowing: true,
    image: "./tiger.jpg",
  };

  return (
    <div className="card">
      <img src={user.image} alt="profile" className="avatar" />

      <h3>{user.name}</h3>
      <p className="bio">{user.bio}</p>
<hr/>
      <div className="stats">
        <span>gender:{user.gender}</span>
        <span>age:{user.age}</span>
      </div>

      <button className={user.isFollowing ? "btn unfollow" : "btn follow"}>
        {user.isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default ProfileCard;
