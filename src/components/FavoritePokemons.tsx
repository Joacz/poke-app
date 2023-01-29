import { Grid } from '@nextui-org/react';
import { FunctionComponent } from 'react';
import PokemonFavoriteCard from './pokemon/PokemonFavoriteCard';

interface Props {
  pokemons: number[];
}

const FavoritePokemons: FunctionComponent<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map((id) => (
        <PokemonFavoriteCard key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemons