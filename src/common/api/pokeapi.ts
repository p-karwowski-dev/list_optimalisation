import axios from "axios";
import {
  Pokemon,
  PokemonDetailsRequestResponse,
  PokemonListWithSprite,
  PokemonNameAndUrlRequestResponse,
  SpeciesDetailsRequestResponse,
} from "../../types/Pokemon.types";

/**
 * This function will fetch the data from two different sources to find a Pokemon based on its name
 */
export const getPokemonByName = async (name: string): Promise<Pokemon> => {
  const { data: pokemonDetails } =
    await axios.get<PokemonDetailsRequestResponse>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  const { data: pokemonSpeciesDetails } =
    await axios.get<SpeciesDetailsRequestResponse>(pokemonDetails.species.url);

  // Get the pokedex entry number for national pokedex
  const pokedex = pokemonSpeciesDetails.pokedex_numbers.reduce<number>(
    (acc, region) => {
      if (region.pokedex.name === "national") {
        return region.entry_number;
      }
      return acc;
    },
    -1
  );

  // Get the generation number
  const generationUrlSplit = pokemonSpeciesDetails.generation.url.split("/");

  // Using - 2 for the trailing slash
  const generationNumber = parseInt(
    generationUrlSplit[generationUrlSplit.length - 2]
  );

  const flavorTextsEnglish = pokemonSpeciesDetails.flavor_text_entries.filter(
    (item) => item.language.name === "en-GB"
  );

  return {
    name: pokemonDetails.name,
    sprite: pokemonDetails.sprites.front_default,
    weight: pokemonDetails.weight,
    height: pokemonDetails.height,
    nationalPokedexNumber: pokedex,
    generation: generationNumber,
    flavorText:
      flavorTextsEnglish[Math.floor(Math.random() * flavorTextsEnglish.length)]
        ?.flavor_text,
  };
};

export const getPokemonNamesAndUrl =
  async (): Promise<PokemonListWithSprite> => {
    const {
      data: { results },
    } = await axios.get<PokemonNameAndUrlRequestResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=100000"
    );
    return results.map((result) => {
      const match = result.url.match(/\/(\d+)\/?$/);
      const spriteURL = match
        ? `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/${match[1]}.png`
        : undefined;

      return {
        ...result,
        spriteURL,
      };
    });
  };
