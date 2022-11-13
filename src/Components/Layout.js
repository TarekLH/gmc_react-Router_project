import React, {useState} from "react";

//Components
import Filter from "./Filter";
import { MovieList } from "./MovieList";

//Pages
import MovieCard from "./MovieCard";
import DescPage from "../Pages/DescPage";

//React Router
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";


function Main(props) {

    return (
        <>
            <div>
                <Filter titleFilter={props.titleFilter} setFilter={props.setFilter}/>
                <Outlet/>
            </div>
        </>
    )
}

export default function Layout() {

    const [titleFilter, setFilter] = useState("")
    let dataSearch = MovieList.filter( movie => movie.title.toLowerCase().includes(titleFilter.toLowerCase()) )
    const location = useLocation();

    return (
        <>
            
            <Routes>
                <Route path="main" element={<Main titleFilter={titleFilter} setFilter={setFilter} />} >
                    <Route path="home" exact element={<MovieCard dataSearch={dataSearch}/>} />
                    <Route path="home/:id" element={<DescPage movieId={location.state}/>} />
                </Route>
                <Route
                    path="*"
                    element={<Navigate to="main/home" />}
                />
            </Routes>
        </>
    )
}