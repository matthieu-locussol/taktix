import type { AppProps } from 'next/app';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { Layout } from '../components/Layout';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   );
};

export default App;
