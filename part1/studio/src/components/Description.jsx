import styles from './Description.module.css'
import React from 'react'

function RecipeAuthor() {
    let authorName = "Jessica Gavin"
    let authorPhoto = "https://www.jessicagavin.com/wp-content/uploads/2018/05/easy-culinary-science-for-better-cooking-cookbook-11-600x683.jpg"
    let authorLink = "https://www.jessicagavin.com/chicken-piccata-with-lemon-caper-sauce/"

    return(
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Jessica Gavin" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Jessica Gavin - Cook Smarter</a>
            </div>
        </div>
    );

}

class RecipeDescription extends React.Component {
    render () {
    return (
    <div> 
        <div>
            <h1>Chicken Piccata</h1>
            <p>Chicken piccata with lemon caper sauce is an easy weeknight meal. Lightly breading and pan-frying chicken breasts creates a beautiful golden brown crust.</p>
        </div>
        <RecipeAuthor />
    </div>
    )
    }
    
}

export default RecipeDescription