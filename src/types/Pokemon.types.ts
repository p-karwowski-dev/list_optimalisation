export type PokemonDetailsRequestResponse = {
  name: string;
  sprites: {
    front_default: string;
  };
  species: {
    name: string;
    url: string;
  };
  weight: number;
  height: number;
};

export type FlavorText = {
  flavor_text: string;
  language: {
    name: string | "en";
  };
};

export type SpeciesDetailsRequestResponse = {
  pokedex_numbers: Array<{
    entry_number: number;
    pokedex: {
      name: "national" | string;
      url: string;
    };
  }>;
  flavor_text_entries: Array<FlavorText>;
  generation: {
    name: string;
    url: string;
  };
};

export type PokemonNameAndUrlRequestResponse = {
  results: Array<{ name: string; url: string }>;
};

export type Pokemon = {
  name: string;
  sprite: string;
  weight: number;
  nationalPokedexNumber: number;
  generation: number;
  height: number;
  flavorText: string;
};

export type PokemonListItem = {
  name: string;
  url: string;
  spriteURL?: string;
};

export type PokemonListWithSprite = Array<PokemonListItem>;
