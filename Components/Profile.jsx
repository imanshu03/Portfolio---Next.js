import React, { useContext, useEffect, useRef, useState } from 'react';
import { ObserverContext } from '../ObserverStore';
import SectionHeader from './SubComponents/SectionHeader';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import ProfileImg from '../Assets/profile.webp';
import DownloadIcon from '../Assets/file-earmark-arrow-down.svg';
import Loader from 'react-loader-spinner';
import ConnectBox from './ConnectBox';
import FragmentLeft from './FragmentLeft';

const downloadResume = function (resume) {
  return new Promise((resolve) => {
    const a = document.createElement('a');
    a.href = resume;
    a.download = 'Imanshu Rathore.pdf';
    document.body.append(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => resolve(), 1000);
  });
};

const Profile = ({ data }) => {
  const { firstName, lastName, designation, description, resume, socialLinks } =
    data;

  const handleDownloadClick = async () => {
    setDownload(true);
    await downloadResume(resume);
    setDownload(false);
  };

  const { text } = useTypewriter({
    words: designation,
    loop: false,
    typeSpeed: 100,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  const ref = useRef();
  const observer = useContext(ObserverContext);

  useEffect(() => {
    if (ref.current && observer) {
    }
  }, [ref, observer]);

  const [download, setDownload] = useState(false);

  return (
    <div className="section full-height">
      <SectionHeader image={ProfileImg} alt="profile" />
      <div className="section-body profile-wrapper">
        <FragmentLeft className="profile-wrapper-section">
          <p className="text-muted-lg">Hi, I am</p>
          <h1 className="main-heading">{firstName}</h1>
          <h1 className="main-heading">{lastName}</h1>
          <p className="typewriter-text">
            {text}
            <Cursor />
          </p>
        </FragmentLeft>
        <FragmentLeft className="profile-wrapper-section">
          <p className="para-text">
            {description.map((e, idx) => (
              <span key={idx}>{e}</span>
            ))}
          </p>
          {resume && (
            <button className="dw-resume" onClick={handleDownloadClick}>
              {!download ? (
                <>
                  Download Resume&ensp;
                  <DownloadIcon />
                </>
              ) : (
                <Loader
                  type="ThreeDots"
                  color="white"
                  width={40}
                  height={40}
                  className="loader"
                />
              )}
            </button>
          )}
        </FragmentLeft>
        <ConnectBox data={data.socialLinks} />
      </div>
    </div>
  );
};

export default Profile;
