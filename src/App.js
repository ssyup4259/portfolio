import React from 'react';

//(props)  -> Object 들어간다.
// props.fav  -> 아래에서 지정해준 fav가 들어간다.
function Food({ fav }) {
  return <h1> i lipe {fav} </h1>
}

const foodILike = [{}]

function App() {
  return (
    <div>
      <div>hello</div>
      <Food fav="kimchi" />
      <Food fav="ramenn" />
      <Food fav="burger"/>
      <Food fav="samgiposal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
