import React from "react";
import MP from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: "Hi, how are you?", like: 15 },
    { id: 2, message: "Its my first post", like: 11 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} like={p.like} key={p.id} />
  ));

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
      <div className={MP.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
