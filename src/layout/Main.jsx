import React, {useState,useEffect} from 'react';
import { Films } from '../components/Films';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const searchFilms = (str, type = 'all') => {
        setLoading(true);
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${ type !== 'all' ? `&type=${type}` : '' }`
        )
            .then((response) => response.json())
            .then((data) =>{
                setFilms(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

   useEffect(() =>{
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=spider_man`)
            .then((response) => response.json())
            .then((data) =>{
                setFilms(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
   },[])


        return (
            <main className='container content'>
                <Search searchFilms={searchFilms} />
                {loading ? <Preloader /> : <Films films={films} />}
            </main>
        );    
}

export { Main };