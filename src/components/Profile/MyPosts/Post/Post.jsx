import React from "react";
import P from "./Post.module.css";

const Post = () => {
  return (
      <div className={P.item}>
        <img src="https://w-dog.ru/wallpapers/1/59/538931223085784/smajl-naushniki-3-j.jpg" alt="image_post" />
        Post 1
        <div>
          <span>like</span>
        </div>
      </div>
  );
};

export default Post;
