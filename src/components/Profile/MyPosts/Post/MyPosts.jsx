import React from "react";
import MP from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div className={MP.content}>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={MP.posts}>
        <div className={MP.item}>Post 1</div>
        <img
          src="https://w-dog.ru/wallpapers/1/59/538931223085784/smajl-naushniki-3-j.jpg"
          alt="image_post"
        />
        <div className={MP.item}>Post 2</div>
        <div className={MP.item}>Post 3</div>
      </div>
    </div>
  );
};

export default MyPosts;
