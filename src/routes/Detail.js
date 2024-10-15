import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null); // 초기값을 null로 설정
  const { id } = useParams();

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie); // API로 받아온 영화 데이터를 상태로 저장
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{movie.title_long}</h1>
      <img src={movie.medium_cover_image} alt={movie.title_long} />
      <p>Rating: {movie.rating}</p>
      <p>Language: {movie.language}</p>
      <p>Date Uploaded: {movie.date_uploaded}</p>
    </div>
  );
}

export default Detail;
