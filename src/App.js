import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/Search'

import './App.css';

const App = () => {
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
    <div className='app-div'>
      <Search handleInput={handleInput} handleClick={getRecipes} />
      <ul>
      {recipes === 0 ? null : recipes.data.hits.map(item => {
      return <li>{item.recipe.label}</li>
    })}
      </ul>
    </div>
  )
}

export default App