import React from "react";
import "./profilesection.scss";
import profilepicture from "../Assets/profilepicture.jpg";
const ProfileHeader = () => {
  return (
    <header>
      <div class="img__div">
        <img id="profile__img" src={profilepicture} alt="profile--img" />
      </div>
      <p class="profile__name"> Adeotun Segun</p>
      {/**<h2 id="slack">DVictor</h2> */}
    </header>
  );
};

export default ProfileHeader;
