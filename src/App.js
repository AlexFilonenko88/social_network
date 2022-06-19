import React from 'react';
import './App.css'


function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://avatars.mds.yandex.net/i?id=3b84ba0a875426c558f8592865b5fa51-5296782-images-thumbs&n=13'/>
      </header>
      <nav className='nav'>
        <div>
          Profile
        </div>
        <div>
          Messages
        </div>
      </nav>
      <div className='content'>
        Main content
      </div>
    </div>
  )
}

export default App;
