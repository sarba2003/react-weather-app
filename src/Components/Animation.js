import { useEffect } from 'react';
import { gsap } from 'gsap';

const Animation = () => {
  useEffect(() => {
    gsap.fromTo('.logo', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 4 });
  }, []);

  return <div className='logo'>Weather App</div>;
};

export default Animation;
