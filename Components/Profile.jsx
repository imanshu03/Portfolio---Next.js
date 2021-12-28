import React, { useContext, useEffect, useRef, useState } from 'react';
import { ObserverContext } from '../ObserverStore';
import SectionHeader from './SubComponents/SectionHeader';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import ProfileImg from '../Assets/profile.jpg';
import MailIcon from '../Assets/MailIcon';
import MobileIcon from '../Assets/MobileIcon';
import LocationIcon from '../Assets/LocationIcon';
import LinkedinIcon from '../Assets/LinkedinIcon';
import DownloadIcon from '../Assets/file-earmark-arrow-down.svg';
import GithubIcon from '../Assets/GithubIcon';
import Loader from 'react-loader-spinner';
import FragmentLeft from './FragmentLeft';

const SvgIcons = {
  mail: <MailIcon className="details-icon" />,
  linkedin: <LinkedinIcon className="details-icon" />,
  mobile: <MobileIcon className="details-icon" />,
  location: <LocationIcon className="details-icon" />,
  github: <GithubIcon className="details-icon" />,
};

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
    <div className="section particles full-height">
      <SectionHeader image={ProfileImg} alt="profile" />
      <div className="section-body profile">
        <FragmentLeft className="profile-section">
          <h3 className="greeting">Hi, I am</h3>
          <h1 className="first-name">{firstName}</h1>
          <h1 className="last-name">{lastName}</h1>
          <h3 className="designation">
            {text}
            <Cursor />
          </h3>
        </FragmentLeft>
        <FragmentLeft className="profile-section">
          <p className="about">
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
        <FragmentLeft className="profile-bottom">
          {socialLinks.map((item, idx) => (
            <div className="details-item" key={idx}>
              {item.link ? (
                <a
                  href={item.href}
                  className="value"
                  target={item.target || '_self'}
                >
                  {SvgIcons[item.icon]}{' '}
                  <span className="value-text">{item.value}</span>
                </a>
              ) : (
                <div className="value">
                  {SvgIcons[item.icon]}{' '}
                  <span className="value-text">{item.value}</span>
                </div>
              )}
            </div>
          ))}
        </FragmentLeft>
      </div>
    </div>
  );
};

export default Profile;
