import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearchContainer from './GptSearchContainer';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    const showGptSearch = useSelector((state) => state.gptSearch.showGptSearchComponent)
    console.log("value ", showGptSearch)
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    return (
        <div className="">
            {showGptSearch ? <GptSearchContainer /> : <>
                <MainContainer />
                <SecondaryContainer />
            </>}
        </div>
    )
};

export default Browse;