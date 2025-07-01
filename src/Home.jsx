import React, { useRef, useState } from 'react';
import './Home.css';
import Logo from './assets/logo.png';
import PlayIcon from './assets/play.png';
import VideoSrc from './assets/videoplayback.mp4';
import DoctorCard from './DoctorCard';
import Footer from './Footer';


const Home = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  const handleTogglePlay = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPaused(false); // hide play button
    } else {
      video.pause();
      setIsPaused(true); // show play button
    }
  };

  return (
    <div className="website">
      <header className="header">
        <img className="logo" src={Logo} alt="logo" />
      </header>

      <div className="video-container" onClick={handleTogglePlay}>
        <video
          className="main-video"
          id="mainVideo"
          playsInline
          muted
          loop
          ref={videoRef}
        >
          <source src={VideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {isPaused && (
          <button className="play-btn" id="playBtn">
            <img src={PlayIcon} alt="Play" />
          </button>
        )}
      </div>
      <div className="TalkToaCounContainer">
        <div className="TalkToaCouncontent">
            <p>Now you can</p>
            <h1>Choose your weight</h1>
      </div>
      <div>
        <button className="TalkToaCounButton">
           
                Talk to a Counselor
        </button>
      </div>
    </div>
    <div className='guidecont'>
        <h1>Let a counselor guide you.</h1>
        <p>Your health is important, and you don’t have to figure it out alone. If you’ve tried dieting and exercising but haven’t seen the results you want, don’t worry you still have options. Today, science offers more ways to support your health than ever before. If you're worried about the health risks linked to weight, now is a great time to talk to a qualified expert. There’s more help available than just diet and exercise and you deserve to explore it.</p>
    </div>
    <div>
        <DoctorCard/>
    </div>
  <Footer/>
     </div>
  );
};

export default Home;
