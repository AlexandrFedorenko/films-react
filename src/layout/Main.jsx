import React from 'react';
import { Films } from '../components/Films';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        films: [],
        loading: true,
    };

    componentDidMount() {
        console.log(API_KEY);
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=spider_man`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ films: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    searchFilms = (str, type = 'all') => {
        this.setState({ loading: true });
        fetch(
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${ type !== 'all' ? `&type=${type}` : '' }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ films: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    };

    render() {
        const { films, loading } = this.state;

        return (
            <main className='container content'>
                <Search searchFilms={this.searchFilms} />
                {loading ? <Preloader /> : <Films films={films} />}
            </main>
        );
    }
}

export { Main };