import { Container } from "./styled/App.styled";
import PokemonList from "./PokemonList";
import PokemonView from "./PokemonView";

const App = () => {
  return (
    <Container>
      <PokemonList />
      <PokemonView />
    </Container>
  );
};

export default App;
