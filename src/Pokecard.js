import "./pokecard.css"

const pokecard = (pokemon)=>{
    let picURL=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    return(
        <td className="pokecard-card">
            <h3>
                {pokemon.name}
            </h3>
            <img src={picURL} alt={pokemon.name}/>
            <p>
                Type: {pokemon.type}
            </p>
            <p>
                EXP: {pokemon.base_experience}
            </p>

        </td>
    )
}


export default pokecard