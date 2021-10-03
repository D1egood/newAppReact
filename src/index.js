import React from 'react';
import ReactDom from 'react-dom';
//Styles
import './index.css';
import { characters } from './characters';
import Character from './Character';
import { greeting } from './testing/testing';

function LolCharacters() {

    return (<div>
        <h1>These are my mains</h1>
        <hr />
        <section className='some'>
            {characters.map((character) => {
                return <Character key={character.id}    {...character}></Character>
            })}
        </section></div>)
};

ReactDom.render(<LolCharacters />, document.getElementById('root'));