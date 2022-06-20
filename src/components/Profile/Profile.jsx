import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import P from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={P.content}>
      <div>
        <img src="https://www.ejin.ru/wp-content/uploads/2019/05/gora-6.jpg" />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
