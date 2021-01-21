import React from 'react'

const Search = props => {
    return (
        <div>
            <form>
                <input type='text' autoComplete='off' onChange={props.handleInput}></input>
                <button type='submit' onClick={props.handleClick}>search</button>
            </form>
        </div>
    )
}

export default Search