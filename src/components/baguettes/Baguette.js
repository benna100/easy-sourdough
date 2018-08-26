import React from 'react';
import Header from './../Header';
import baguettes from './baguettes.jpg';

const Baguette = () => {
    return (
        <div>
            <Header image={baguettes} altTag="Sourdough bread"/>
            <main></main>
        </div>
    );
};

export default Baguette;
