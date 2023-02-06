import { Film } from './Film';

function Films(props) {
    const { films = [] } = props;

    return (
        <div className='films'>
            {films.length ? (
                films.map((film) => <Film key={film.imdbID} {...film} />)
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}
export { Films };