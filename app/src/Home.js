import React, { useContext } from 'react';
import { DataContext } from './App';

export const Home = () => {
    const {data} = useContext(DataContext);
  
    const movies = data.map((movie, index) => 
  <li key={index}>
    {movie.id} : {movie.title}
  </li>);

    return(
    <div className="App">
      <h1>Movies</h1>
      <ul>
        {movies}
      </ul>
    </div>
    )
}

export default Home