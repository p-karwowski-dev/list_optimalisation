import { Suspense, useEffect, useRef } from "react"
import { PokemonListItem } from "./types/Pokemon.types"

interface iPokemonItem {
    pokemonListItem: PokemonListItem
    observer: IntersectionObserver | null
}

export const PokemonItem = ({pokemonListItem, observer}: iPokemonItem) => {
    const itemRef = useRef(null)
    const {name, spriteURL} = pokemonListItem
    
    useEffect(() => {
        if(itemRef.current && observer)
            observer.observe(itemRef.current)

        return(() => {
            if(itemRef.current && observer) 
                observer.unobserve(itemRef.current)
        })
    }, [itemRef, observer])

    return(
        <div key={spriteURL} ref={itemRef} data-spriteurl={spriteURL}>
            <p>{name}</p>
        </div>
    )
}