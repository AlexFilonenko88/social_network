import React from "react";
import P from "./Post.module.css";

const Post = (props) => {
  return (
      <div className={P.item}>
        <img src="https://w-dog.ru/wallpapers/1/59/538931223085784/smajl-naushniki-3-j.jpg"  alt="image_post"  />
        {props.message}
        <div>
          <span>like {props.like}</span>
        </div>
      </div>
  );
};

export default Post;
