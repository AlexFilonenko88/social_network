import React from "react";
import MP from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={MP.posts_block}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
          <div>
            <button>Remove</button>
          </div>
        </div>
      <div className={MP.posts}>
        <Post message='Hi, how are you?' like="15"/>
        <Post message="Its my first post" like="10"/>
      </div>
    </div>
  );
};

export default MyPosts;
