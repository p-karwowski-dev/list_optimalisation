import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { PokemonListItem } from "./types/Pokemon.types";

type AppContextType = {
  selectedPokemon: PokemonListItem;
  setSelectedPokemonUrl: Dispatch<SetStateAction<PokemonListItem>>;
};

const AppContext = createContext<AppContextType | null>(null);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}) => {
  const [selectedPokemon, setSelectedPokemonUrl] = useState<PokemonListItem>({
    name: "ditto",
    url: "https://pokeapi.co/api/v2/pokemon/132/",
    spriteURL:
      "https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/132.png",
  });

  return (
    <AppContext.Provider value={{ selectedPokemon, setSelectedPokemonUrl }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);

  if (ctx == null) {
    throw new Error("useAppContextProvider must be within a AppContext");
  }

  return ctx;
};
