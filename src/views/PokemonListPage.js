import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonData } from '../redux/features/pokemonData';


function PokemonListPage() {

    const dispatch = useDispatch();

    const pokemonData = useSelector(state => state.pokemonData);

    useEffect(() => {
        dispatch(getPokemonData());
    }, [])

    useEffect(() => {
        if (pokemonData.loading) {
            console.log(pokemonData)
        }
    }, [pokemonData])

    if (pokemonData.loading) {
        <section>
            <h1>Loading ...</h1>
        </section>
    }

    return (
        <>
            {pokemonData.data.results && (
                <section>
                    {pokemonData.data.results.map((e, i) => {
                        return <h2 key={i}>{e.name}</h2>
                    })}
                </section>
            )}
        </>
    )
}

export default PokemonListPage