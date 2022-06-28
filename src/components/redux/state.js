let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", like: 15 },
    { id: 2, message: "Its my first post", like: 11 },
  ],
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    like: 0,
  };

  state.posts.push(newPost);
};

export default state;
