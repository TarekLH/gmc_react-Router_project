import React from "react"
import { Link } from "react-router-dom"


export default function MovieCard({dataSearch, movies}) {

    const filteredMovies = dataSearch.map(movie => (
        <div className="col">
            <div key={movie.id} className="card shadow-sm w-75">

                <Link 
                    to={{ pathname: `/main/home/${movie.movie_id}`}}
                    state={movie.movie_id}
                >
                    <img src={movie.img} className="bd-placeholder-img card-img-top" width="100%" height="380" alt="img" />
                </Link>

                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">{movie.title}</h5>
                        </div>
                        <small className="mx-3">{movie.rate}/5</small>
                    </div>
                </div>
            </div>
        </div>
    ))


    const movieDisplay = movies.map(movie => (
        <div className="col">
            <div key={movie.id} className="card shadow-sm w-75">

                <Link 
                    to={{ pathname: `/main/home/${movie.movie_id}`}}
                    state={movie.movie_id}
                >
                    <img src={movie.img} className="bd-placeholder-img card-img-top" width="100%" height="380" alt="img" />
                </Link>

                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-0">{movie.title}</h5>
                        </div>
                        <small className="mx-3">{movie.rate}/5</small>
                    </div>
                </div>
            </div>
        </div>
    ))




    return (
        <>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {dataSearch.length === 0 ? movieDisplay : filteredMovies} 
                    </div>
                </div>
            </div>
        
        </>
    )
}