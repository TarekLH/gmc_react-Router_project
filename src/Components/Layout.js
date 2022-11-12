import React from "react";

//Components
import Navbar from "./Navbar";

//Pages
import MovieCard from "./MovieCard";
import DescPage from "../Pages/DescPage";

//React Router
import { Routes, Route, Link, Navigate, Outlet, useLocation } from "react-router-dom";


function Main() {
    return (
        <>
            <div>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default function Layout() {

    const location = useLocation();

    return (
        <>
            

            <Routes>
                <Route path="main" element={<Main/>} >
                    <Route path="home" exact element={<MovieCard/>} />
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