import React from 'react';
import Nav from './nav';

const Header: React.FC = () =>
    <header >
        <h1>🎵🎶The A-Listers' Tangled Tunes🎵🎶</h1>
        <div className='header'>
            <Nav />
        </div>
    </header>;
export default Header;