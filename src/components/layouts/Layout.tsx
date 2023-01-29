import { FunctionComponent } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';
import { Spacer } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface MyProps {
  children: any;
  title: string;
}

const origin = typeof window == 'undefined' ? '' : window.location.origin;

export const Layout: FunctionComponent<MyProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name='author' content='Joaquin Gomez' />
        <meta
          name='description'
          content='informacion sobre el pokemon XXXXXX'
        />
        <meta name='keyowrds' content='XXXXXX, pokemon, pokedex' />

        <meta property='og:title' content={`Información sobre ${title}`} />
        <meta
          property='og:description'
          content={`Esta es la página sobre ${title}`}
        />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <Spacer css={{ height: '60px', width: '100%' }} />
      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
