import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { Grid, Card, Image } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { localFavorites } from 'utils';
import { useRouter } from 'next/router';
import PokemonFavoriteCard from '../../components/pokemon/PokemonFavoriteCard';
import FavoritePokemons from '@/components/FavoritePokemons';

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  const router = useRouter();
  useEffect(() => {
    setFavoritePokemons(localFavorites.getFavorites());
  }, []);

  return (
    <Layout title='Favoritos'>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons}/>
      )}
    </Layout>
  );
};

export default FavoritesPage;
