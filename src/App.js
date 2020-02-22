import React from 'react';

function Food({ fav }) {
  return <h1> i lipe {fav} </h1>
}

function App() {
  return (
    <div>
      <div>hello</div>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiposal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
