import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./components/redux/state";
import { addPost } from "./components/redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} />
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
