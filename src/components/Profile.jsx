import React from "react";
import P from './Profile.module.css'

const Profile = () => {
    return <div className={P.content}>
    <div>
      <img src='https://www.ejin.ru/wp-content/uploads/2019/05/gora-6.jpg' />
    </div>
    <div>
      avatar + description
    </div>
    <div>
      My posts
        <div>
          New posts
        </div>
    </div>
    <div className={P.posts}>
      <div className={P.item}>
        Post 1
      </div>
      <div className={P.item}>
        Post 1
      </div>
    </div>
  </div>
}

export default Profile;