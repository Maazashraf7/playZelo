// src/components/CustomCursor.jsx
import { useEffect, useRef } from 'react';
import './CustomCursor.css'; // We'll define styles here
import gameIcon from '/src/assets/images/game/01.png'; // Use your actual image path
 
const CustomCursor = () => {
  const dotRef = useRef(null);
  const iconRef = useRef(null);
 
  useEffect(() => {
    document.body.classList.add('cursor-follower-enabled');
 
    const dot = dotRef.current;
    const icon = iconRef.current;
 
    let mouseX = 0, mouseY = 0;
    let iconX = 0, iconY = 0;
    const ease = 0.1;
 
    const onMouseMove = (_e_) => {
      mouseX = _e_.clientX;
      mouseY = _e_.clientY;
 
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
    };
 
    const animateIcon = () => {
      iconX += (mouseX - iconX) * ease;
      iconY += (mouseY - iconY) * ease;
 
      if (icon) {
        icon.style.left = `${iconX}px`;
        icon.style.top = `${iconY}px`;
      }
 
      requestAnimationFrame(animateIcon);
    };
 
    window.addEventListener('mousemove', onMouseMove);
    animateIcon();
 
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.classList.remove('cursor-follower-enabled');
    };
  }, []);
 
  return (
    <>
      <div _className_="cursor-dot" _ref_={dotRef}></div>
      <img
        _src_={gameIcon}
        _alt_="Game Icon"
        _className_="cursor-icon-trail"
        _ref_={iconRef}
      />
    </>
  );
};
 
export default CustomCursor;