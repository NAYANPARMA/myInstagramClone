import React from 'react';
import './App.css';
import Post from './Post'

function App() {
  return (
    <div className="app">
      <div className="header">
        <img
          className = "headerImage" 
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt = "InstagramLogo"
          /> 
       
      </div>
      <h1>Hey it'smy instagram!</h1>
      <Post 
        username = "Pubg Mobile"
        imageUrl= "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/07/02/911649-pubg-file.jpg"  
        caption = "It's an amazing experience"
        />
      <Post
        username = "Twice"
        imageUrl= "https://i.pinimg.com/750x/0f/cf/4b/0fcf4b5823cfe0b1636269b3815789d9.jpg"
        caption = "More and More"
      />
       <Post
        username = "Maths" 
        imageUrl= "https://sites.google.com/site/technotesdave/_/rsrc/1472860620774/e-is-for-euler/eulers_eq.PNG"
        caption = "Most beautiful equation In math"
      />
      
      {/* {Header}
        {Posts}
        {Posts} */}
    </div>
  );
}

export default App;
