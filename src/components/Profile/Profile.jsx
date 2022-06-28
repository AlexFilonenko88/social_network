import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import P from "./Profile.module.css";

const Profile = (props) => {
  let posts = [
    { id: 1, message: "Hi, how are you?", like: 15 },
    { id: 2, message: "Its my first post", like: 11 },
  ];

  return (
    <div>
      <ProfileInfo />

      <MyPosts posts={props.posts} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
