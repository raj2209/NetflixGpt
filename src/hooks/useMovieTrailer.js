import { useDispatch } from "react-redux";
import { addMovieTrailers } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const fetchMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const jsonData = await data.json();
        console.log("values", jsonData.results)
        dispatch(addMovieTrailers(jsonData.results[0].key))
    }
    useEffect(() => {
        fetchMovieTrailer();
    }, [movieId])

}

export default useMovieTrailer;