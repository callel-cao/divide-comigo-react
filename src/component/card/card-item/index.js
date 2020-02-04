import React, { useState, useEffect } from 'react';

import HttpService from '../../../service/http';

function CardItem({ name, funcname }) {

    const [pokemonImage, getPokemonImage] = useState('');

    useEffect(() => {
        async function loadData() {
            const { sprites } = await HttpService.get('pokemon/' + name);
            getPokemonImage(sprites.front_default)
        }

        loadData();
    }, []);

    return (
        <div className="card">
            <img src={pokemonImage} />
            <button data-name={name} onClick={funcname}>Ver Status</button>
            <p>{name}</p>
        </div>
    )
};

export default CardItem;