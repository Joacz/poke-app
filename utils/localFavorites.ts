/* eslint-disable import/no-anonymous-default-export */

function getFavorites(): number[] {
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );
  return favorites;
}

export const toggleFavorite = (id: number) => {
  let favorites = getFavorites();

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const existsInFavorites = (id: number): boolean => {
  if (typeof window == 'undefined') return false;

  const favorites = getFavorites();

  return favorites.includes(id);
};

export default {
  toggleFavorite,
  existsInFavorites,
  getFavorites,
};
