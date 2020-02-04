import React, { useState, useEffect } from 'react';
import './style.scss';
import CardItem from './card-item';

function Cards({ pokemons, funcname }) {
    console.log(pokemons);
    return (
        <div className="body-card">
            {pokemons.map((item, index) =>
                <CardItem key={index} name={item.name} funcname={funcname} />
            )}

        </div>
    )
};

export default Cards;