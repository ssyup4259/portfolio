import React from 'react';
import PropTypes from 'prop-types';

// // function component 실습
// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
//     , rating: 4.5
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
//     , rating: 4.9
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
//     , rating: 4.7
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
//     , rating: 4.3
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
//     , rating: 4.1
//   }
// ];

// //(props)  -> Object 들어간다.
// // props.fav  -> 아래에서 지정해준 fav가 들어간다.
// function Food({ name, picture, rating }) {
//   return <div>
//     <h2> i like {name}</h2>
//     <h4>{rating} out of 5</h4>
//     <img src={picture} alt={name} />
//   </div>
// }

// // food 의 props type 검사
// // isRequired 이 있으면 꼭 필요하다는 뜻.
// // rating: PropTypes.number -> isRequired 선언안하면 numer 이거나 undefined
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function App() {
//   return (
//     <div>
//       <div>hello</div>
//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}
//     </div>
//   );
// }

// state 사용 하기 위해 class component
// stat 는 object
// component의 data를 바꾸기위해
// mounting, updading, unmounting 3가지 중요 (라이프 사이클 관련)
// mounting : 
// counstrucor() : render 시작 전에 호출 호출 javascript 에서 사용
// componentDidMount : render 끈나고 나서 화면에 보이기전에
// updated:
// componentDidUpdate : setState 이후에 
// unmount : 다끝났을때
// componentWillUnMount
class App extends React.Component {
  // constructor(){
  //   super(props);
  //   console.log("hello");
  // }
  state = {
    count: 0
  }

  add = () => {
    console.log("add");
    // setState를 선언하면 호출 할때 마다 state 상태를 바꾸고(refresh) 다시 render 호출
    // count: this.state.cout + 1  ---> 자기자신 사용 잘 안쓴다.
    //this.setState({ count: this.state.cout + 1 });
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("i just updated");
  }

  componentWillUnmount() {
    console.log("goodBye");
  }
  render() {
    console.log("i am rendering");
    return <div>
      <h1>The Number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
