import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export function UserLogin() {
    const [datos, setDatos] = useState();
    const formMovie = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };
    const enviarDatos = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/login',{
            
        },
        )
    }
    return (
        <div className="container d-flex justify-content-center">
            <form onSubmit={enviarDatos}>
                <div className="form-group">
                    <div className="m-3">
                        <h2>Login</h2>
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Email</label>
                        <input type="text" name="email" id="email" className="form-control" placeholder="" aria-describedby="helpId" onChange={formMovie} />
                    </div>
                    <div className="mb-2">
                        <label className="form-label">Password</label>
                        <input type="text" name="password" id="password" className="form-control" placeholder="" aria-describedby="helpId" onChange={formMovie} />
                    </div>
                    <div className="mb-2">
                        <div className="mb-3">
                        </div>
                    </div>
                    <div className="mb-2">
                        <button type="submit" className="btn btn-primary">Guargar</button>
                        <Link className="btn btn-danger" to={"/"}>Cancelar</Link>
                    </div>
                </div>
            </form>
        </div>);
}