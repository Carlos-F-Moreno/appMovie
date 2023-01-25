import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export function UpdateMovie() {
    const endpoint = 'http://localhost:8000/api/';
    const { movieId } = useParams();

    const [movie, setMovie] = useState([]);

    useEffect(() => { getMovieDetails(movieId); }, [movieId])

    const getMovieDetails = async (movie_id) => {
        const response = await axios.get(`${endpoint}movie/${movie_id}`);
        console.log(response.data);
        setMovie(response.data);
        return;
    }

    const formMovie = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value,
        });
        console.log(JSON.stringify(movie));
    };
    const enviarDatos = async (e) => {
        e.preventDefault();
        const response = await axios.put(`${endpoint}movie/${movie.id}`,
        {
            titulo:movie.titulo,
            portada:movie.portada,
            fecha_de_estreno: movie.fecha_de_estreno,
            descripcion:movie.descripcion,
            headers:{
                "Accept": "application/json",
                "Content-Type":"application/json"
            }
        });
        console.log(response.data);
        return;

    }

    return (<div className="container justify-content-center col-sm-5 col-md-5 col-lg-5 col-xl-2">
        <form onSubmit={enviarDatos}>
            <div className="form-group">
                <div className="m-3">
                    <h2>Add Movie</h2>
                </div>
                <div className="mb-2">
                    <label className="form-label">Titulo</label>
                    <input type="text" name="titulo" id="titulo" className="form-control" placeholder="" aria-describedby="helpId" onChange={formMovie} defaultValue={movie.titulo} />
                </div>
                <div className="mb-2">
                    <label className="form-label">Fecha de estreno</label>
                    <input type="date" name="fecha_de_estreno" id="fecha_de_estreno" className="form-control" placeholder="" aria-describedby="helpId" onChange={formMovie} defaultValue={movie.fecha_de_estreno}/>
                </div>
                <div className="mb-2">
                    <label className="form-label">Portada</label>
                    <input type="text" name="portada" id="portada" className="form-control" placeholder="" aria-describedby="helpId" onChange={formMovie} defaultValue={movie.portada}/>
                </div>
                <div className="mb-2">
                    <div className="">
                        <label>Descripcion</label>
                        <textarea id="descripcion" className="form-control" onChange={formMovie} defaultValue={movie.descripcion}></textarea>
                    </div>
                </div>
                <div className="mb-2">
                    <button type="submit" className="btn btn-primary">Guargar</button>
                    <Link className="btn btn-danger" to={"/"}>Cancelar</Link>
                </div>
            </div>
        </form></div>)
}
