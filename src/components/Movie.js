import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div>
      <div>
        <img src={coverImg} alt={title}></img>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g, index) => (
            <li key={index}>{g}</li>
          ))}
        </ul>
        <br />
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
