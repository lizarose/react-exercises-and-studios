import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.jessicagavin.com/chicken-piccata-with-lemon-caper-sauce/"
   let authorPhoto = "https://www.jessicagavin.com/wp-content/uploads/2018/05/easy-culinary-science-for-better-cooking-cookbook-11-600x683.jpg"
   let authorName = "Jessica Gavin"

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%", width: "100px", height: "auto"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "1 pound boneless skinless chicken breasts",
      "½ cup all-purpose flour",
      "⅓ cup lemon juice plus lemon zest, from one lemon",
      "½ cup chicken broth",
      "¼ cup capers, drained and rinsed",
      "Season with your heart: salt, pepper, thyme, garlic, Italian seasoning"
   ]   
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Chicken Piccata</h1>
            <p>Chicken piccata with lemon caper sauce is an easy weeknight meal. Lightly breading and pan-frying chicken breasts creates a beautiful golden brown crust.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.jessicagavin.com/wp-content/uploads/2015/09/chicken-piccata-8-1200-268x268.jpg" alt="recipe photo" className="imageUpdates" />

   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
