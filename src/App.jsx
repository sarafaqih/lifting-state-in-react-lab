import './App.css';
import IngredientList from './components/IngredientList/IngredientList.jsx'
import BurgerStack from './components/BurgerStack/BurgerStack.jsx'
import { useState } from 'react';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

const [ingredients, setIngredients] = useState(availableIngredients)
const [burger, setBurger] = useState([])

  function addToBurger(item){
    setBurger([...burger , item])
  }
  function removeFromBurger(item){
    const filterBurger = burger.filter((OneItem) => {
      return OneItem !== item
    })
    setBurger(filterBurger)
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredients = {ingredients} addToBurger={addToBurger} />
        <BurgerStack burger={burger} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  );
};


export default App;
