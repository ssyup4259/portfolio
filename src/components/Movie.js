import React from 'react';
import PropTypes from 'prop-types';

// state 가 필요없다면 function component 작성해도 된다.
function Movie({ id, year, title, summary, poster, genres }) {
  return <div className="movie">
    <img src={poster} alt={title} title={title} />
    <h3 className="movie_title">{title}</h3>
    <h5 className="movie_year">{year}</h5>
    <ul className="movie_genres">
      {genres.map((genre, index) =>
        <li key={index} className="genres_genre">{genre}</li>
      )}
    </ul>
    {/* summary를 140글자까지 자르고 뒤를 ... 처리 */}
    <p className="movie_summary">{summary.slice(0, 140)}...</p>
  </div>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;

//css를 적용시키는 방법 3가지(react)
// 1. 현 자바스크립트 내에서 style={{}} 으로 바로 하기
// 2. css 파일을 만들어서 import 해서 만들기
// 3. style component 사용하기