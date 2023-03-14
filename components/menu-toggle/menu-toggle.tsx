import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import './menu-toggle.scss';

const path01Variants = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 9.5L24 9.5' },
};

const path02Variants = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M0 14.5L15 14.5' },
};
const transition = { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] };

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0.4 },
  visible: { opacity: 1, x: 0, y: -20, scale: 1, transition: { transition } },
};

const MenuToggle = () => {
  const [isActive, setIsActive] = useState(false);
  const [animation, setAnimation] = useState('closed');

  const onClick = () => {
    setAnimation('moving');
    setTimeout(() => {
      setAnimation(animation === 'closed' ? 'open' : 'closed');
    }, 200);
    setIsActive((current) => !current);
    document.body.style.overflow = animation === 'closed' ? 'hidden' : 'scroll';
  };

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }, [canScroll]);

  return (
    <div className="">
      <button onClick={onClick} aria-label="Toggle mobile navigation">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <motion.path
            stroke="#c0c3df"
            animate={animation}
            variants={path01Variants}
            strokeWidth="1.2"
          />

          <motion.path
            stroke="#c0c3df"
            animate={animation}
            variants={path02Variants}
            strokeWidth="1.2"
          />
        </svg>
      </button>
      <div className={isActive ? 'overlay' : 'no-menu'}>
        <div className="overlay-content">
          <AnimatePresence>
            <div className="nav-mobile">
              <motion.ul
                variants={list}
                initial="hidden"
                animate={isActive ? 'visible' : 'hidden'}
              >
                <motion.li variants={item}>
                  {/* <Link onClick={onClick} to="/works">
                    Works
                  </Link> */}{' '}
                  hiii
                </motion.li>
                <motion.li variants={item}>
                  {/* <Link onClick={onClick} to="/explorations">
                    Explorations
                  </Link> */}{' '}
                  hiii
                </motion.li>
                <motion.li variants={item}>
                  {/* <Link onClick={onClick} to="/about">
                    About
                  </Link> */}{' '}
                  hiii
                </motion.li>
                <motion.li variants={item}>
                  {/* <Link onClick={onClick} to="/contact">
                    Contact
                  </Link> */}{' '}
                  hiii
                </motion.li>
              </motion.ul>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default MenuToggle;
