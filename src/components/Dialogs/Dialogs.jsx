import React from "react";
import { NavLink } from "react-router-dom";
import D from "./Dialogs.module.css";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../redux/dialogs-reducer";
// import { sendMessageCreator } from "../redux/state";

const DialogsItem = ({ name, id }) => {
  let path = "/dialogs/" + id;

  return (
    <div className={D.dialog + " " + D.active}>
      <NavLink to={path}> {name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={D.message}>{props.message}</div>;
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

  let state = props.store.getState().dialogsPage;

  let dialogsElements = dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));

  let messagesElements = message.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator(body));
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={D.dialogs}>
      <div key={D.id} className={D.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={D.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="enter your message"
            ></textarea>
          </div>
          <div>
            <button onclick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
