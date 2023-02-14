import React, {useState} from 'react';

const Search = (props) => {
    const {  searchFilms = Function.prototype } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchFilms(search, type);
        }
    };

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchFilms(search, event.target.dataset.type);
    };

        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        placeholder='Search'
                        type='search'
                        value={search}
                        onChange={(e) =>
                            setSearch( e.target.value )
                        }
                        onKeyDown={handleKey}
                    />
                    <button
                        className='btn search-btn light-blue lighten-1'
                        onClick={() =>
                            searchFilms(
                                search,
                                type
                            )
                        }
                    >
                        Search
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            className='with-gap  light-blue lighten-1'
                            name='type'
                            type='radio'
                            data-type='all'
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className='with-gap light-blue lighten-1'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className='with-gap light-blue lighten-1'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span>Series Only</span>
                    </label>
                </div>
            </div>
        );
    
}

export { Search };