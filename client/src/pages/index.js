import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>OnlineShop 🛍️</title>
      </Head>

      {/* header component */}
      <Header />
    </div>
  );
}
