import { Link } from 'react-router-dom'


export default function DescPage({movies, movieId}) {

    const linkStyle = {
        color: 'inherit', 
        textDecoration: 'none'
    }

    return (
        <>
            {movies.filter(movie => movieId === movie.movie_id ).map( movie => (
                    <div key={movie.movie_id} className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <iframe style={{borderRadius: 15}} width="600" height="400" src={movie.vidLink} title={movie.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                            </div>
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold lh-1 mb-3">{movie.title}</h1>
                                <p className="lead"> {movie.desc}</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                                        <Link style={linkStyle} to="/main/home">Go back to home page</Link>
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                                        <a style={linkStyle} href={movie.trailerLink} target="_blank">Official trailer page</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}