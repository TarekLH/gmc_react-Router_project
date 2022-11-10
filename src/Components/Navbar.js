import React from "react";
import {Filter} from "./Filter";

export default function Navbar() {

    return (
        <>
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <span className="fs-4">tMovies</span>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>

                    <Filter/>

                    <div className="text-end">
                        <button type="button" className="btn btn-warning">Add Movie</button>
                    </div>
                </div>
            </div>
        </header>
        
        </>
    )
}