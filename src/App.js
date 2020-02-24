import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './Movie.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  //async : javascript 에게 componentDidMount 가끝날때까지 기다릴라고 명령
  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies.data.data.movies);
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
    console.log(movies);
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 6000);
    // axios 는 fetch 위에 있는 작은 layer
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.key}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image} 
                genres={movie.genres}/>
            ))}
          </div>
        )}
    </section>
  };
}

export default App;

// javascript 내에서 class 는 본인(Component class) 을 의미해서
// 헷갈릴 경우가 있따. className을 쓴다.