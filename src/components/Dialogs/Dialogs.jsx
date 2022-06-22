import React from "react";
import { NavLink } from "react-router-dom";
import D from "./Dialogs.module.css";

const DialogsItem = ({name, id}) => {
    let path = "/dialogs/" + id;

  return (
    <div className={D.dialog + " " + D.active}>
      <NavLink to={path}> {name} </NavLink>
    </div>
  );
};

const Message = ({message}) => {
    return (
        <div className={D.message}>{message}</div>
    )
}

const Dialogs = (props) => {
  return (
    <div className={D.dialogs}>
      <div className={D.dialogs_items}>

        <DialogsItem name="Alex" id="1"/>
        <DialogsItem name="Andrey" id="2"/>
        <DialogsItem name="Max" id="3"/>
        <DialogsItem name="Sveta" id="4"/>
        <DialogsItem name="Valera" id="5"/>
        <DialogsItem name="Viktor" id="6"/>
      </div>
      <div className={D.messages}>
        <Message message="Hi" />
        <Message message="How is your WWW?" />
        <Message message="Yo!" />
      </div>
    </div>
  );
};

export default Dialogs;
