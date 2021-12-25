import Head from 'next/head';
import Profile from './Components/Profile';
import ObserverStore from './ObserverStore';
import readJson from '../readJson';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useEffect } from 'react';

export default function Home({ data }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Head>
        <title>Imanshu Rathore</title>
        <meta name="description" content="Imanshu Rathore's Portfolio" />
        <link rel="icon" href="/coding.ico" />
      </Head>
      <ObserverStore>
        <Profile data={data.profile} />
      </ObserverStore>
    </>
  );
}

export async function getStaticProps() {
  try {
    const data = await readJson();
    return { props: { data } };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
}
