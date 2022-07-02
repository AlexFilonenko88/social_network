import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  rerenderEntireTree() {
    console.log("QWER");
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(
      this._state.dialogsReducer,
      action
    );
    this._state.sidebar = sidebarReducer(this._state.sidebarReducer, action);

    this._callSubcriber(this._state);
  },
};

export default store;
window.store = store;
