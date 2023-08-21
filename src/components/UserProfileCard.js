import React from "react";
import Avatar from "./Avatar";
import "../assets/styles/card.css"

function UserProfileCard(){
    return (
      <div className="card">
        <Avatar/>
        <div className="card-name">Name</div>
        <div className="profile-name">Profile Name</div>
      </div>
    );
  }
  
  export default UserProfileCard;