import React from 'react';
import './App.css';
import Header from './Header/Header';
import Posts from './Posts/Posts';

function App() {
  return (
    <div className="app">
      <Header/>
      <h1>Hey it'smy instagram!</h1>
      <Posts/>
      
      {/* {Header}
        {Posts}
        {Posts} */}
    </div>
  );
}

export default App;
