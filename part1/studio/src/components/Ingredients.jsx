import styles from './Ingredients.module.css'

export default function RecipeIngredients() {
    let ingredients = [
        "1 pound boneless skinless chicken breasts",
        "½ cup all-purpose flour",
        "⅓ cup lemon juice plus lemon zest, from one lemon",
        "½ cup chicken broth",
        "¼ cup capers, drained and rinsed",
        "Season with your heart: salt, pepper, thyme, garlic, Italian seasoning"
    ]

    return (
        <div>
            <h3>Recipe Ingredients</h3>
                <ul className = {styles.ingredientList}>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
                    <li>{ingredients[5]}</li>
                </ul>
        </div>
    )
}