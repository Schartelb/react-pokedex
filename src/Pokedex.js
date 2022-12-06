/** renders pokecard components from props */
import "./pokedex.css"

import pokecard from './Pokecard'
 const pokedex = (pokemonArray)=>{
return(
<table>
    {pokemonArray.map(p=>{
        return pokecard(p)
    })}
</table>)
 }

export default pokedex