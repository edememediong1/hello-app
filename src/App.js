import React from "react";

/*
kfunction Greeting() {
  return <h1>Guten Morgen</h1>;
}
*/

function UserProfileCard(){
  return(
    <div className="card">
      <img
        className="card-image"
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
        style={{width: 100}}
      />
      <div className="card-name">Name</div>
      <div className="profile-name">Profile Name</div>
    </div>
  );
}



function App() {
  return (
    <section className="main-page">
      <UserProfileCard/>
    </section>
  );
}

export default App;
