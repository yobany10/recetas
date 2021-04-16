import React from 'react'
import './Search.css'

const Search = props => {
    return (
        <div className='search-div'>
            <form>
                <input className='search-input' type='text' autoComplete='off' placeholder='what are you craving?' onChange={props.handleInput}></input>
                <button className='search-btn' type='submit' onClick={props.handleClick}>search</button>
            </form>
        </div>
    )
}

export default Search