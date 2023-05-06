import React,{useState,useEffect,useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([]);
  const [isloading,setIsloading]= useState(false);
  const [error,setError] =useState(null);
  useEffect(()=>{
    fetchMovieHandler();
  },[fetchMovieHandler]);

const fetchMovieHandler=useCallback(async ()=>{
  setIsloading(true);
  setError(null)
  try{
    const response =await fetch('https://swapi.dev/api/films/');
    const data =await response.json();
    if(!response.ok){
      throw new Error('Something went wrong')
    }
  const transformedMovies = data.results.map((movie) =>{
        return {
          id:movie.episode_id,
          title:movie.title,
          openingText:movie.opening_crawl,
          releaseDate:movie.release_date
        }
      })
    setMovies(transformedMovies);
   
  }catch(error){
    setError(error.message);
  }
   setIsloading(false);
 },[]);

 let content =<p>Found No Movies</p>

 if(movies.length>0){
  content = <MoviesList movies={movies} />;
 }
 if(error!=null){
  content =<p>{error}</p>
 }
 if(isloading){
  content=<p>Please wait Movies are loading.... </p>
 }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
