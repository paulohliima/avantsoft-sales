import { NextPage } from 'next';
import DashboardPage from '@/template/Dashboard';
import withAuth from '@/hooks/withAuth';
import Head from 'next/head';

const Dashboard: NextPage = () => (
  <>
    <Head>
      <title>Dashboard - E-Sales</title>
      <meta name="description" content="Dashboard da minha aplicação" />
    </Head>
    <DashboardPage />
  </>
);

export default withAuth(Dashboard);
