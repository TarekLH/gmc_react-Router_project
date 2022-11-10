import React, {useState} from "react";
import { MovieList } from "./MovieList";



export function Filter() {
    const [titleFilter, setFilter] = useState("")

    const handleTitleSearch = (event) => {
        setFilter(event.target.value)
    }


    let dataSearch = MovieList.filter( movie => {
        movie.title.toLowerCase().includes(titleFilter.toLowerCase())
        {/*Object.keys(movie).some(key => 
            movie[key].toString().toLowerCase().includes(titleFilter.toString().toLowerCase())
        )*/}
    })

    console.log(titleFilter)
    return (
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input 
            type="search" 
            className="form-control form-control-dark text-bg-dark" 
            placeholder="Search..." 
            aria-label="Search"
            value={titleFilter}
            onChange={handleTitleSearch.bind(this)}
        />
        </form>
    )
}