"use client"
import {useEffect, useState} from "react";

export default function OldPage() {
    const [movies, setMovies] = useState();


    const getMovies = async () => {
        const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
        const json = await response.json();
        setMovies(json);
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
            <div>
                {JSON.stringify(movies)}
            </div>
    );
};