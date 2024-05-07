import { useState } from 'react';
const Breakfast = {
   label: "Breakfast",
   value: "breakfast"
}
const Lunch = {
   label: "Lunch",
   value: "lunch"
}
const Dinner = {
   label: "Dinner",
   value: "dinner"
}
export default function BoardAssignment () {
   const boards = [Breakfast, Lunch, Dinner];



const selectorOptions = boards.map((item) =>{
return(
   
   <option value={item.value}>{item.label}</option>
   
)
}) 

const [boardName, setName] = useState('no boards yet!');

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      {selectorOptions}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
