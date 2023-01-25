import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div className="container bg-light p-5">


            <h1 className="my-4 fs-2">Movies
            </h1>

            {
                movies.map((movie) =>
                    <div className="row" key={movie.id}>
        
                        <div className="col-md-7 ">
                            
                                <img className="img-fluid rounded mb-3 mb-md-0" src={movie.portada} alt="portada" />
                            
                        </div>
                        <div className="col-md-5">
                            <h3>{movie.titulo}</h3>
                            <p>{movie.descripcion}</p>
                            <button className="btn btn-primary" onClick={()=>{deleteMovie(movie.id)}}>Delete</button>
                            <Link className="btn btn-primary m-2" to={`/movie/${movie.id}`}>Edit</Link>
                        </div>
                        <hr />
                    </div>
        
                    )
            }
        </div>

    );
}