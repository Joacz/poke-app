import { useState } from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Button, Card, Grid, Text, Container, Image } from '@nextui-org/react';
import { useRouter } from 'next/router';

import { Layout } from '../../components/layouts/Layout';
import { Pokemon } from 'interfaces';
import pokeApi from 'api/pokeApi';
import { localFavorites } from 'utils';
import confetti from 'canvas-confetti';
import { getPokemonInfo } from '../../../utils/getPokemonInfo';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existsInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      angle: -100,
      spread: 100,
      origin: {
        x: 1,
        y: 0,
      },
      colors: [
        '#AA4430',
        '#A6A00f',
        '#11ddff',
        '#ff00ff',
        '#00ffff',
        '#00f400',
      ],
      decay: 0.9,
      gravity: 0.87,
      drift: -5,
    });
  };

  return (
    <Layout title={`${pokemon.id} - ${pokemon.name.toUpperCase()}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={1}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ p: '30px' }}>
            <Card.Image
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                'no-image.png'
              }
              width={'100%'}
              height={200}
            />
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text size={35} h1>
                {pokemon.name.toUpperCase()}
              </Text>

              <Button
                color='gradient'
                bordered={isInFavorites === true}
                onClick={onToggleFavorite}
              >
                {isInFavorites === true
                  ? 'En Favoritos'
                  : 'Guardar en Favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container direction='row' display='flex' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get('pokemon?limit=151');

  const pokemons: string[] = data.results.map(
    (result: { name: string }) => result.name
  );
  console.log(pokemons);

  return {
    paths: pokemons.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};
export default PokemonPage;
