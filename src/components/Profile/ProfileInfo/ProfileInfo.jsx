import React from "react";
import P from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.ejin.ru/wp-content/uploads/2019/05/gora-6.jpg"
          alt=""
          width='800'
        />
      </div>
      <div className={P.description_block}>
        avatar + description
      </div>
    </div>
  );
};

export default ProfileInfo;
