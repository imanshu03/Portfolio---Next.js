import Head from 'next/head';
import dynamic from 'next/dynamic';
import ObserverStore from '../ObserverStore';
import readJson from '../readJson';
import { useEffect } from 'react';
import BackToTop from '../Components/BackToTop';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ScrollProgress from '../Components/ScrollProgress';
import ConnectBox from '../Components/ConnectBox';
import smoothscroll from 'smoothscroll-polyfill';

const Profile = dynamic(() => import('../Components/Profile'));
const Skills = dynamic(() => import('../Components/Skills'));
const WorkExperience = dynamic(() => import('../Components/WorkExperience'));
const Education = dynamic(() => import('../Components/Education'));
const Achievements = dynamic(() => import('../Components/Achievements'));

export default function Home({ data }) {
  useEffect(() => {
    smoothscroll.polyfill();
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
          <div />
          {/* <ConnectBox data={data.socialLinks} /> */}
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
