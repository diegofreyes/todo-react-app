import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    return (
        <input
            className='TodoSearch'
            placeholder="Look What You Make Me Do"
            value={searchValue}
            onChange={(event) => {
                console.log('Escribiste');
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };