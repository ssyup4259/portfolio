import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
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
    return <div>
      {isLoading ? "Loading..." : movies.map(movie => (
        <Movie
          key={movie.key}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image} />
      )
      )}
    </div>
  }
}

export default App;
