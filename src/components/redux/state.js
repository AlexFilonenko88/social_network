// import { rerenderEntireTree } from "../../index";

let rerenderEntireTree = () => {
  console.log("QWER");
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", like: 15 },
      { id: 2, message: "Its my first post", like: 11 },
    ],
    newPostText: "WWW",
  },
};

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    like: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostsText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
