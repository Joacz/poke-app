import { Container, Text, Image } from '@nextui-org/react';
import { FunctionComponent } from 'react';

export const NoFavorites: FunctionComponent = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <Text>No Hay Favoritos</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        width={250}
        height={250}
        css={{ opacity: 0.3 }}
        alt='ditto.svg'
      />
    </Container>
  );
};
