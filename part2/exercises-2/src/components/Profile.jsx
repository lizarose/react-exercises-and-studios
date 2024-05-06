import './styles.css';
import Button from './Button';
import oceans from './oceans.json'

const listItem = oceans.map(oceans =>
   <div key = {oceans.id} className= {`${oceans.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <img src='{oceans.image}' alt = {oceans.name} className='img' />
   </div>
   
);


function Profile()
{
   return(
      <>
      <h1>{oceans.name}</h1>
         <h3>Fun Facts:</h3>
         <ul>
            <li>{oceans.fact1}</li>
            <li>{oceans.fact2}</li>
            <li>{oceans.fact3}</li>
         </ul>

        <ul>
         {listItem}
         </ul> 
         <Button />
      </>  
   );
}

export default Profile;