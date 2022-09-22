import React, {useState, useContext} from "react";
import { DataContext } from "./App";
import './App.css';

export const Search = () => {
    const {setData} = useContext(DataContext);
    const [searchText, setSearchText] = useState('');
    const URL = `http://localhost:8081/findMovies?search=${searchText}`;

    const {data} = useContext(DataContext);
  
    const movies = data.map((movie, index) => 
    <li key={index}>
        {movie.id} : {movie.title}
    </li>);

    const handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL)
    .then((res) => res.json())
    .then((data) => setData(data))
    }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <input type="submit" />
            <input type="text" placeholder="Search.." value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
                }}/>
            </form>
        </div>
        <div className="App">
        <h1>Movies</h1>
            <ul>
                {movies}
            </ul>
        </div>
        </>
    )
}

export default Search;