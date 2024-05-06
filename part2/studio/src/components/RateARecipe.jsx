let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {

  function GiveRating() {
   return <h3>{stars[props.rating - 1]}</h3>;
  }

if(props.rating > 5 || props.rating < 1) {
  return null;
} else {
  return <GiveRating />
}
//Ternary for Conditional
//return(props.rating > 5 || props.rating < 1) ? null: <GiveRating />

  return stars;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
