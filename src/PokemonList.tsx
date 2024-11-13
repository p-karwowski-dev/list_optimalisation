import { Suspense, useEffect, useRef, useState } from "react";
import { getPokemonNamesAndUrl } from "./common/api/pokeapi";
import { Container, ListContainer, Title } from "./styled/PokemonList.styled";
import { PokemonListItem } from "./types/Pokemon.types";
import { useObserver } from "./UseObserver";
import { PokemonItem } from "./PokemonItem";

const PokemonList = () => {
  const {observer} = useObserver()
  const [pokemons, setList] = useState<PokemonListItem[] | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const list = await getPokemonNamesAndUrl();
        setList(list);
      } catch(error) {
        console.error('Failed to fetch Pokemon list:', error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <Container>
      <Title>Pokemons</Title>
      <ListContainer >
        {pokemons?.map((pokemonListItem) => (
            <PokemonItem observer={observer} pokemonListItem={pokemonListItem}/>
        ))}
      </ListContainer>
    </Container>
  );
};

export default PokemonList;
