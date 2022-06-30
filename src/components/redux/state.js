// import { rerenderEntireTree } from "../../index";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", like: 15 },
        { id: 2, message: "Its my first post", like: 11 },
      ],
      newPostText: "WWW",
    },
  },
  getState() {
    return this._state;
  },
  rerenderEntireTree() {
    console.log("QWER");
  },
  addPost() {
    debugger;
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      like: 0,
    };
  },
  updateNewPostsText(newText) {
    this._state.profilePage.posts.push(this._newPost);
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
};

// let state = {
//   profilePage: {
//     posts: [
//       { id: 1, message: "Hi, how are you?", like: 15 },
//       { id: 2, message: "Its my first post", like: 11 },
//     ],
//     newPostText: "WWW",
//   },
// };

// state.profilePage.posts.push(newPost);
// state.profilePage.newPostText = "";
// rerenderEntireTree(state);

export default store;
