import React, { useState, useEffect } from "react";
import axios from "axios";

export function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies();
    }, [])

    const endpoint = 'http://localhost:8000/api';

    const getMovies = async () => {
        const response = await axios.get(`${endpoint}/movies`);
        console.log(response.data);
        return setMovies(response.data);

    }
    const deleteMovie = async (movie_id) => {
        console.log(movie_id)
        const response = await axios.delete(`${endpoint}/movie/${movie_id}`);
        setMovies(movies.filter(movie => movie.id !== movie_id));
        console.log(response.data);
        return response.data;
    }
    return (
        <div className="album py-5">
            <div className="container" >
                <div className="row justify-content-center align-items-center g-2">
                    {
                        movies.map((movie) =>

                            <div className="col-md-4" key={movie.id}>
                                <div className="card mb-4 shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" src={movie.portada} alt="portada de la pelicula"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.titulo}</h5>
                                        <p className="card-text">{movie.descripcion}</p>
                                        <div className="d-flex justify-content-between aling-item-center">
                                            <div className="gtn-group">
                                                <button className="btn btn-primary" onClick={() => { deleteMovie(movie.id) }}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
}