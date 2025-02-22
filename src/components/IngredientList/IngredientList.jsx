const IngredientList = (props) => {
  return (
  <ul>
    {props.ingredients.map((oneIngredient, index) => {
      return (
      <li key={index} style={{backgroundColor: oneIngredient.color}}>
        <p>{oneIngredient.name}</p>
        <button style={{color:'white'}} onClick={() => props.addToBurger(oneIngredient)}>+</button>
      </li>
      )
    })}
  </ul>
  )
};

export default IngredientList;
