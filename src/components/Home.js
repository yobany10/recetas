import React, { useEffect, useState } from 'react'
import Search from './Search'
import RecipeListCard from './RecipeListCard'
import axios from 'axios'

import './Home.css'

const Home = props => {
    const [recipes, setRecipes] = useState(0)
    const [userInput, setUserInput] = useState('')

    const handleInput = event => {
      let input = event.target.value
      setUserInput(input)
    }

    const getRecipes = event => {
      event.preventDefault()
      let recipeUrl = `https://api.edamam.com/search?q=${userInput}&app_id=b085a5dc&app_key=${process.env.REACT_APP_API_KEY}`
      axios.get(recipeUrl)
      .then(res => {
        setRecipes(res)
      })
    }

    useEffect(() => {
      console.log(userInput)
      console.log(recipes)
    })

    return (
        <div>
            <h1 className='main-title'>Recetas</h1>
            <Search handleInput={handleInput} handleClick={getRecipes} />
                <ul className='recipe-list-div'>
                  {recipes === 0 ? null : recipes.data.hits.map(item => {
                    return <RecipeListCard recipeData={item}/>
                  })}
                </ul>
        </div>
    )
}

export default Home