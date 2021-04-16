import React from 'react'
import './RecipeListCard.css'

const RecipeListCard = props => {
    return (
        <li className='recipe-list-card'>
            <a href={props.recipeData.recipe.url} target="_blank" rel="noreferrer">
            <img className='recipe-list-card-img-main' src={props.recipeData.recipe.image} alt={props.recipeData.recipe.label}></img>
            <h3 className='recipe-name'>{props.recipeData.recipe.label}</h3>
            <p className='recipe-source'>Source: {props.recipeData.recipe.source}</p>
            <p className='recipe-calories'>Calories: {Math.round(props.recipeData.recipe.calories)}</p>
            </a>
        </li>
    )
}

export default RecipeListCard