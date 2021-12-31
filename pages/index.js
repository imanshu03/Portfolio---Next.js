import Head from 'next/head';
import Profile from '../Components/Profile';
import ObserverStore from '../ObserverStore';
import readJson from '../readJson';
import { useEffect } from 'react';
import Skills from '../Components/Skills';
import WorkExperience from '../Components/WorkExperience';
import Education from '../Components/Education';
import Achievements from '../Components/Achievements';
import BackToTop from '../Components/BackToTop';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ScrollProgress from '../Components/ScrollProgress';
import ConnectBox from '../Components/ConnectBox';

export default function Home({ data }) {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Head>
        <title>{data.pageTitle}</title>
        <meta name="description" content="Imanshu Rathore's Portfolio" />
        <link rel="icon" href="/coding.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      {data && (
        <div id="app">
          <ScrollProgress />
          <ConnectBox data={data.socialLinks} />
          <ObserverStore>
            <Profile data={data.profile} />
            <Skills data={data.skills} />
            <WorkExperience data={data.workExperience} />
            <Education data={data.education} />
            <Achievements data={data.achievements} />
            <BackToTop />
          </ObserverStore>
        </div>
      )}
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
