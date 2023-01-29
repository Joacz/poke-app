import { FunctionComponent } from 'react';
import { Spacer, useTheme } from '@nextui-org/react';
import { Text, Image } from '@nextui-org/react';
import NextLink from 'next/link';

export const Navbar: FunctionComponent = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 50px',
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        }
        alt='app icon'
        width={70}
        height={70}
      />
      <NextLink href='/' passHref style={{ display: 'flex' }}>
        <Text color='white' h2>
          P
        </Text>
        <Text color='white' h3>
          ókemon
        </Text>
      </NextLink>
      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites' passHref style={{ display: 'flex' }}>
        <Text>Favoritos</Text>
      </NextLink>
    </div>
  );
};
