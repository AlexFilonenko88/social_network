import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./components/redux/state";
import { addPost, updateNewPostsText } from "./components/redux/state";
// import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        appState={store.getState()}
        addPost={store.addPost}
        updateNewPostsText={store.updateNewPostsText}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App appState={state} addPost={addPost} />
//   </React.StrictMode>
// );
