import React from "react";


export default function Filter({titleFilter, handleTitleSearch, handleAddClick}) {

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
                                onClick={handleAddClick} 
                                type="button" 
                                className="btn btn-warning"
                            >
                                Add Movie
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}