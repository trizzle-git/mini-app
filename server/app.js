const express = require('express');
const app = express();
const port = 8081;
const cors = require('cors');
const { getAllMovies, getMovieById, searchMovies } = require("./controllers");


app.use(cors());

app.get('/', (req, res) => {
    getAllMovies()
    .then((data) => res.send(data))
    .catch((err) =>
        res.status(404).json({message: "No Movie Data Found"})
    );
})

app.get('/movies/:id', (req, res) => {
    let { id } = req.params;
    getMovieById(id)
    .then((data) => res.send(data))
    .catch((err) => 
        res.status(404).json({message:"No Movies Matching that ID"})
    );
})

app.get('/findMovies', (req, res) =>{
    const query = decodeURIComponent(req.query.search)
    getAllMovies()
    .then((data) => {
        const filteredMovies = data.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
        res.send(filteredMovies)
    })
    .catch((err) =>
        res.status(404).json({message:'Could Not Find Movies Matching Search Criteria'})
    );

})

app.listen(port, () => {
    console.log(`Express Server listening at 127.0.0.1:${port}`)
})