import React, {useState, useEffect} from "react";

//Assets
import TheDarkKnight from "../Assets/TheDarkKnight.jpg"

//Components
import Filter from "./Filter";
import { MovieList } from "./MovieList";

//Pages
import MovieCard from "./MovieCard";
import DescPage from "../Pages/DescPage";

//React Router
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";


function Main({titleFilter, handleTitleSearch, handleAddClick}) {

    return (
        <>
            <div>
                <Filter titleFilter={titleFilter} handleTitleSearch={handleTitleSearch} handleAddClick={handleAddClick}/>
                <Outlet/>
            </div>
        </>
    )
}

export default function Layout() {

    const [titleFilter, setFilter] = useState("")

    const [addMovie, setAddMovie] = useState({
        id: "",
        img: '',
        title: "",
        rate: ``,
        desc: ""
    })
    const location = useLocation();

    const handleTitleSearch = (event) => {
        setFilter(event.target.value)
    }

    let dataSearch = MovieList.filter( 
        movie => movie.title.toLowerCase().includes(titleFilter.toLowerCase()) || movie.rate.includes(titleFilter) 
    )

    const handleAddClick = () => { setAddMovie({
            ...addMovie, 
            id: Date.now(), 
            img: TheDarkKnight,
            title: "Dark Knight",
            rate: "4.8/5",
            movie_id: Date.now(),
            desc : "Batman est plus que jamais déterminé à éradiquer le crime organisé qui sème la terreur en ville. Epaulé par le lieutenant Jim Gordon et par le procureur de Gotham City, Harvey Dent, Batman voit son champ d'action s'élargir. La collaboration des trois hommes s'avère très efficace et ne tarde pas à porter ses fruits jusqu'à ce qu'un criminel redoutable vienne plonger la ville de Gotham City dans le chaos.",
            trailerLink: "https://www.allocine.fr/film/fichefilm_gen_cfilm=115362.html",
            vidLink : "https://www.youtube.com/embed/gaZ-S1aFB24",
        })
    }


    useEffect(() => {
        if (addMovie.id !== "") {
            MovieList.push(addMovie)
        }
    },[addMovie])

    console.log(MovieList)

    return (
        <>
            
            <Routes>
                <Route path="main" element={<Main titleFilter={titleFilter} handleTitleSearch={handleTitleSearch} handleAddClick={handleAddClick} />} >
                    <Route path="home" exact element={<MovieCard MovieList={MovieList} dataSearch={dataSearch}/>} />
                    <Route path="home/:id" element={<DescPage MovieList={MovieList} movieId={location.state}/>} />
                </Route>
                <Route
                    path="*"
                    element={<Navigate to="main/home" />}
                />
            </Routes>
        </>
    )
}