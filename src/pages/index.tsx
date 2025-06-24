import withoutAuth from '@/hooks/withoutAuth';
import LandingPage from '@/template/Landing';
import { NextPage } from 'next';
import Head from 'next/head';

const Landing: NextPage = () => (
  <>
    <Head>
      <title>E-Sales</title>
      <meta name="description" content="Homepage - E-Sales" />
    </Head>
    <LandingPage />
  </>
);

export default withoutAuth(Landing);
