const BurgerStack = (props) => {
  return (
    <ul>
      {props.burger.map((oneIngredient, index) => {
        return (
        <li key={index} style={{backgroundColor: oneIngredient.color}}>
          <p>{oneIngredient.name}</p>
          <button style={{color:'white'}} onClick={() => {props.removeFromBurger(oneIngredient)}}>X</button>
        </li>
        )
      })}
    </ul>
    )
  };

export default BurgerStack;
