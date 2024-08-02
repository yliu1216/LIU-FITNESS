import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Exercise from "../Components/Exercise.jsx";
import HeroBanner from "../Components/HeroBanner.jsx";
import SearchExercise from "../Components/SearchExercises.jsx";

export default function Home(){
    return (
        <div>
            <HeroBanner/>
            <SearchExercise/>
            <Exercise/>
        </div>
    )
}