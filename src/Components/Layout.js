import React, {useState, useEffect} from "react";

//Assets
import DefaultImg from "../Assets/DefaultImage.jpg"

//Components
import Filter from "./Filter";
import { MovieList } from "./MovieList";

//Pages
import MovieCard from "./MovieCard";
import DescPage from "../Pages/DescPage";

//React Router
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";


function Main({titleFilter, handleTitleSearch, addMovie, setAddMovie, handleSubmit}) {

    return (
        <>
            <div>
                <Filter 
                    titleFilter={titleFilter} 
                    handleTitleSearch={handleTitleSearch} 
                    addMovie={addMovie}
                    setAddMovie={setAddMovie}
                    handleSubmit={handleSubmit}
                />
                <Outlet/>
            </div>
        </>
    )
}

export default function Layout() {

    const [titleFilter, setFilter] = useState("")

    const [addMovie, setAddMovie] = useState({
        id: Date.now(),
        img: DefaultImg,
        title: "",
        rate: "",
        movie_id: Date.now(),
        desc: "",
        trailerLink: "https://www.youtube.com/watch?v=XqZsoesa55w&ab_channel=PinkfongBabyShark-Kids%27Songs%26Stories",
        vidLink : "https://www.youtube.com/embed/XqZsoesa55w"
    });

    const [movies, setMovies] = useState([...MovieList]);

    const location = useLocation();

    const handleTitleSearch = (event) => {
        setFilter(event.target.value)
    }

    let dataSearch = movies.filter( 
        movie => movie.title.toLowerCase().includes(titleFilter.toLowerCase()) || movie.rate.includes(titleFilter) 
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovies([...movies, addMovie]);
    };

    useEffect(() => {
        console.log(movies);
    }, [movies]);

    return (
        <>
            
            <Routes>
                <Route path="main" element={
                    <Main 
                        titleFilter={titleFilter} 
                        handleTitleSearch={handleTitleSearch} 
                        addMovie={addMovie}
                        setAddMovie={setAddMovie}
                        handleSubmit={handleSubmit}
                    />} 
                >
                    <Route path="home" exact element={
                    <MovieCard movies={movies} dataSearch={dataSearch}/>} 
                    />
                    <Route path="home/:id" element={<DescPage movies={movies} movieId={location.state}/>} />
                </Route>
                <Route
                    path="*"
                    element={<Navigate to="main/home" />}
                />
            </Routes>
        </>
    )
}