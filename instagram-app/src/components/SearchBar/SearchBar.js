import React from 'react';
import './SearchBar.css'
import instalogo from './instalogo.svg';

function SearchBar(props) {
    return (
        <div className='search-bar-container'>
            <div className="left-side-header">
            <i class="fab fa-instagram fa-2x"></i>
            <img className="text-logo" src={ instalogo } alt="instagram logo" />
            </div>

            <div className="search-wrapper">
            <form>
                <input class="search-box" type="text" placeholder=" Search" />
            </form>
            </div>
            
            <div className="right-side-header">
                <i class="far fa-compass fa-lg"></i>
                <i class="far fa-heart fa-lg"></i>
                <i class="far fa-user fa-lg"></i>
            </div>
            
        </div> 
    );
}

export default SearchBar;