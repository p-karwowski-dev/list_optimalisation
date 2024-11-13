import { Pokemon } from "../../types/Pokemon.types";
import { FC, useCallback } from "react";
import {
  Container,
  DetailItemContainer,
  DetailItemContent,
  DetailItemLabel,
} from "./PokemonDetails.styled";

type PokemonDetailsProps = {
  pokemon: Pokemon | null;
};

const PokemonDetails: FC<PokemonDetailsProps> = ({ pokemon }) => {
  const renderRow = useCallback(
    (key: keyof Pokemon, label: string) => {
      if (pokemon == null) return null;
      return (
        <DetailItemContainer key={key}>
          <DetailItemLabel>{label}</DetailItemLabel>
          <DetailItemContent>{pokemon[key]}</DetailItemContent>
        </DetailItemContainer>
      );
    },
    [pokemon]
  );

  if (pokemon == null) return null;

  return (
    <Container>
      {renderRow("nationalPokedexNumber", "Pokedex Number")}
      {renderRow("height", "Height")}
      {renderRow("weight", "Weight")}
    </Container>
  );
};

export default PokemonDetails;
