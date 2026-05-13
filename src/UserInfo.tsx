function UserInfo() {
 let user = {
    name: "Aden",
    about:
      "I am a passionate web developer with experience in building responsive and user-friendly websites. I enjoy learning new technologies and improving my skills.",
    profileImg:
      "https://avatars.githubusercontent.com/u/12345678?v=4", 
    profileUrl: "https://github.com/Maryamjbl",
  };
  return (
     <div className="card shadow rounded m-5 card-size">
      <img src={user.profileImg} className="card-img-top " alt="..." />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.about}</p>
        <a href={user.profileUrl} className="btn success">
          View My Profile
        </a>
      </div>
    </div>
  );
}
export default UserInfo;
