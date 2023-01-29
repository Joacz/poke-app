import { Grid, Card } from '@nextui-org/react';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import pokeApi from '../../../api/pokeApi';

interface Props {
  pokemonId: number;
}

const PokemonFavoriteCard: FunctionComponent<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const goToPokemon = () => {
    pokeApi.get(`/pokemon/${pokemonId}`).then((res) => {
      router.push(`pokemon/${res.data.name}`);
    });
  };

  return (
    <Grid key={pokemonId} xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable css={{ padding: 10 }} onClick={goToPokemon}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={'100%'}
          height={'140px'}
        />
      </Card>
    </Grid>
  );
};

export default PokemonFavoriteCard;
