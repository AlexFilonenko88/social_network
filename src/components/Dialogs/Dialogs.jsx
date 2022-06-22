import React from "react";
import { NavLink } from "react-router-dom";
import D from "./Dialogs.module.css";

const DialogsItem = ({ name, id }) => {
  let path = "/dialogs/" + id;

  return (
    <div className={D.dialog + " " + D.active}>
      <NavLink to={path}> {name} </NavLink>
    </div>
  );
};

const Message = ({ message }) => {
  return <div className={D.message}>{message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Max" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Valera" },
    { id: 6, name: "Viktor" },
  ];

  let message = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your WWW?" },
    { id: 3, message: "Yo!" },
    { id: 4, message: "Yo!" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));

  let messagesElements = message.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={D.dialogs}>
      <div className={D.dialogs_items}>
        {dialogsElements}
        {/* <DialogsItem name="Alex" id="1" />
        <DialogsItem name="Andrey" id="2" />
        <DialogsItem name="Max" id="3" />
        <DialogsItem name="Sveta" id="4" />
        <DialogsItem name="Valera" id="5" />
        <DialogsItem name="Viktor" id="6" /> */}
      </div>
      <div className={D.messages}>
        {messagesElements}
        {/* <Message message="Hi" />
        <Message message="How is your WWW?" />
        <Message message="Yo!" /> */}
      </div>
    </div>
  );
};

export default Dialogs;
