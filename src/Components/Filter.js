import React, {useState} from "react";


export default function Filter({titleFilter, handleTitleSearch, addMovie, setAddMovie, handleSubmit}) {

    const [Display, setDisplay] = useState(false)

    const styleMovieAddForm = {
        backgroundColor: "#ffc107",
        padding: 10,
        borderRadius: 5,
        position: "absolute",
        display: Display ? 'block' : 'none',
        right: 235,
        top: 60,
        zIndex: 2
    }

    const displayAddForm = () => {
        setDisplay(current => !current)
    }


    return (
        <>
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <span className="fs-4">tMovies</span>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input 
                                type="search" 
                                className="form-control form-control-dark text-bg-dark" 
                                placeholder="Search Title/Rate..." 
                                aria-label="Search"
                                value={titleFilter}
                                onChange={handleTitleSearch}
                            />
                        </form>
                        <div className="text-end">
                            <button 
                                onClick={displayAddForm} 
                                type="button" 
                                className="btn btn-warning"
                            >
                                Add Movie
                            </button>

                            <form className="form bd-example text-center" style={styleMovieAddForm} onSubmit={ handleSubmit}>
                                <div className="input-group mb-1">
                                    <label className="input-group-text" for="inputGroupFile01">Film Cover</label>
                                    <input 
                                        /*value={addMovie.img} 
                                        onChange={(e) => setAddMovie({...addMovie, img: e.target.value})}*/
                                        disabled 
                                        readonly
                                        placeholder="Default Image"
                                        type="file" 
                                        className="form-control" 
                                        id="inputGroupFile01"
                                    />
                                </div>
                                <div className="input-group flex-nowrap mb-1">
                                    <span className="input-group-text" id="addon-wrapping">Title</span>
                                    <input 
                                        value={addMovie.title} 
                                        onChange={(e) => setAddMovie({...addMovie, title: e.target.value})} 
                                        type="text" 
                                        className="form-control" 
                                        placeHolder="Film Title" 
                                        ariaLabel="Username" 
                                        ariaDescribedby="addon-wrapping"
                                    />
                                </div>
                                <div className="input-group flex-nowrap mb-1">
                                    <span className="input-group-text" id="addon-wrapping">Rate</span>
                                    <input 
                                        value={addMovie.rate} 
                                        onChange={(e) => setAddMovie({...addMovie, rate: e.target.value})} 
                                        type="number" 
                                        className="form-control" 
                                        min="0" 
                                        max="5" 
                                        step="0.1" 
                                        id="customRange3"
                                        placeHolder="Film Rate"
                                    ></input>
                                </div>
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping">Film Description</span>
                                    <textarea 
                                        value={addMovie.desc} 
                                        onChange={(e) => 
                                        setAddMovie({...addMovie, desc: e.target.value})} 
                                        className="form-control" 
                                        id="exampleFormControlTextarea1" 
                                        rows="3"
                                        placeHolder="Film Description"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark mt-2">Submit Movie</button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}