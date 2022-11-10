import React from "react";

//Components
import Navbar from "./Navbar";

//Pages
import MovieCard from "./MovieCard";
import DescPage from "./DescPage"

//React Router
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";


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
    return (
        <>
            

            <Routes>
                <Route path="main" element={<Main/>} >
                    <Route path="home" element={<MovieCard/>} />
                    <Route path="desc" element={<DescPage/>} />
                </Route>
                <Route
                    path="*"
                    element={<Navigate to="main/home" />}
                />
            </Routes>
        </>
    )
}