
import './App.css';
import{getMovieList,searchMovie} from "./api"
import { useEffect , useState } from 'react';

function App() {
 const [popularMovies, setPopularMovies]= useState([])

useEffect(()=>{
  getMovieList().then((result)=>setPopularMovies(result)
  )
}, [])

const PopularmMovieList = ()=>{
  return popularMovies.map((movie,i)=>{
    return(
 
     
        <div className="movie-wrapper" key={i}>
         
            <img className="movie-img" src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}/>
            <div className="movie-desc">
              
            <div className="movie-rate">{movie.vote_average}</div>
            <div className="movie-title">{movie.title}</div> 
            <div className="movie-date">{movie.release_date}</div>
            </div>
          
           
          </div>
    
      
    )
  })
}

const search =(q)=>{
  console.log({q})
}

console.log({setPopularMovies:popularMovies})
  return (
    <div className="App">
      <header className="App-header">
        <h1>NIRMALA MOVIE</h1>
     
        <input type="text" placeholder='cari film disini' className='movie-search' onChange={({target})=>search(target.value)} />
        <h2 className="movie-section">Popular Movies</h2>
        <div className="movie-container">
        <PopularmMovieList/>
        
        </div>
        <footer className='footer'>
       <p className='link'> Created By  <a className='link' target="_blank"   href='https://github.com/helloworld-hkm'> Helloworld_hkm</a></p>
         
        </footer>
      </header>
    </div>
  );
}

export default App;
