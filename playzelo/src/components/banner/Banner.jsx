// src/components/Banner.jsx
import { useEffect, useState, useRef } from 'react';
import styles from './banner.module.css';

function Banner() {
  const videoRef = useRef(null);
  const textArray = [
    "Play and Win Real Money",
    "Genuine Online Platform",
    "Trusted Gaming Arena",
    "100% Legal & Secure",
    "Start Playing Instantly",
  ];
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const speed = 70;
  const pause = 1500;

  // Typewriter Effect
  useEffect(() => {
    let typingTimer, erasingTimer;

    const type = () => {
      if (charIndex < textArray[index].length) {
        setText((prev) => prev + textArray[index].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
        typingTimer = setTimeout(type, speed);
      } else {
        erasingTimer = setTimeout(erase, pause);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
        erasingTimer = setTimeout(erase, speed / 2);
      } else {
        setIndex((prev) => (prev + 1) % textArray.length);
        typingTimer = setTimeout(type, speed);
      }
    };

    if (textArray.length) type();

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(erasingTimer);
    };
  }, [index, charIndex, textArray]);

  // Video Unmute Logic
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play().catch(() => {
        video.controls = true; // Show controls if autoplay fails
      });
    }
  }, []);

  return (
    <section className={styles.banner}>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={styles.bannerVideo}
      >
        <source src="/assets/audio/135618-762107386.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className={styles.bannerOverlay}></div>

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.colXl6} ${styles.colLg7} ${styles.col12}`}>
            <div className={styles.bannerContent}>
              <h3>The Best Website</h3>

              {/* Typewriter Effect Heading */}
              <h1>
                <span id="typewriter-text" className={styles.typewriterText}>
                  {text}
                </span>
                <span className={styles.cursor}>|</span>
              </h1>

              <h2>Genuine Money Transaction</h2>
              <p>
                Assertively communicate an expanded array of mindshare rather than diverse
                technologies for magnetic applications seamlessly virtual then conveniently
                monetize synergistic human capital.
              </p>
              <a href="/login" className={styles.defaultButton}>
                <span>Join Us Today <i className="icofont-play-alt-1"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;