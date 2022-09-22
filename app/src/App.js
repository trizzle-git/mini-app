import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./Home.js";
import { Search } from "./Search.js";
export const DataContext = React.createContext();

function App() {
const [data, setData] = useState([]);

let dataObject = { data, setData };

useEffect(() => {
  let URL = 'http://localhost:8081/'
  fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setData(data)
  })
  }, [])

  return (
  <DataContext.Provider value={dataObject}>
    <Router>
      <Routes>
        <Route path='/' element={<Search/>} />
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </Router>
  </DataContext.Provider>
  )
}

export default App;