import { useEffect, useState } from "react";
import {
  Container,
  DetailsContainer,
  FlavorText,
  FlavorTextContainer,
  ImageAndDataContainer,
  ImageContainer,
  Name,
  NameContainer,
  PkmImage,
} from "./styled/PokemonView.styled";
import { useAppContext } from "./AppContext";
import { Pokemon } from "./types/Pokemon.types";
import { getPokemonByName } from "./common/api/pokeapi";
import PokemonDetails from "./components/pokemon-details";

const PokemonView = () => {
  const { selectedPokemon } = useAppContext();
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);

  useEffect(() => {
    setPokemonDetails(null);
    getPokemonByName(selectedPokemon.name).then(setPokemonDetails);
  }, [selectedPokemon]);

  return (
    <Container>
      <NameContainer>
        <Name>{selectedPokemon.name}</Name>
      </NameContainer>
      <ImageAndDataContainer>
        <ImageContainer>
          <PkmImage
            alt={selectedPokemon.name}
            src={selectedPokemon.spriteURL}
          />
        </ImageContainer>
        <DetailsContainer>
          <PokemonDetails pokemon={pokemonDetails} />
        </DetailsContainer>
      </ImageAndDataContainer>
      <FlavorTextContainer>
        <FlavorText>{pokemonDetails?.flavorText}</FlavorText>
      </FlavorTextContainer>
    </Container>
  );
};

export default PokemonView;
