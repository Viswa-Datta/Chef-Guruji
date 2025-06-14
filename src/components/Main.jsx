import React from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai.js";
export default function Main() {
    const [ingredients,setIngredients]= React.useState([])
    
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
    
    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }


    function addIngredient(formData) {
        const input = formData.get("ingredient")
        setIngredients(prevIngredients=>  [...prevIngredients, input])  
        
    }
    return (
        <main className="main">
            <form action={addIngredient} className="form" >
                <input type="text" name="ingredient" placeholder="Eg. Rice" className="form-input" />
                <button type="submit" className="form-button">+ Add Ingredient</button>
            </form>
            {ingredients.length>0 && <IngredientsList ref={recipeSection} getRecipe={getRecipe} ingredients={ingredients} /> }
            {recipe && <Recipe recipe={recipe}/>}
        </main>
    )
}