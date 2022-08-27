import './Ingredient.css'

function Ingredient({data}) {
  return (
    <li className='Ingredient'>
      <img src={data.image} alt={data.name} className="Ingredient-image"/>
    </li>
  )
}

export default Ingredient