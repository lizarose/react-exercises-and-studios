import recipedata from "./recipe.json";

function RecipeImage() {
   
  const recipeImage = recipedata.map((data) => {
    return <img src={data.recipeImage} className="recipeImage" alt="{data.name}" />
  })
  
  
  return <div>{recipeImage}</div>
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 