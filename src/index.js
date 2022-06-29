import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./components/redux/state";
import { addPost, updateNewPostsText } from "./components/redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        appState={state}
        addPost={addPost}
        updateNewPostsText={updateNewPostsText}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree();

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App appState={state} addPost={addPost} />
//   </React.StrictMode>
// );
