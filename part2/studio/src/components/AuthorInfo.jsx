import recipedata from './recipe.json'
import './styling.css'

function AuthorInfo() {
  const {name, author, website, authorImage} = recipedata[0];
  const recipeAuthorImage = <img key={name} className="authorImage" src={authorImage} alt={author} />;
  const recipeAuthor = <h4>{author}</h4>;
  const recipeWebsite = <a href={website}>{author}'s Webstite</a>;

  return(
  <div>
    {recipeAuthorImage}
    {recipeAuthor}
    {recipeWebsite}
  </div>)
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 