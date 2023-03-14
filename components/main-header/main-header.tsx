import React, { useEffect } from 'react';
import './main-header.scss';
import { motion, useViewportScroll } from 'framer-motion';

//images
import Logo from './../../assets/images/logo-white.svg';
import MenuToggle from '../menu-toggle/menu-toggle';

export default function MainHeader() {
  const { scrollY } = useViewportScroll();
  const [hidden, setHidden] = React.useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  };

  return (
    <motion.nav
      variants={variants}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <div className="wrapper">
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="links-container">
          <ul>
            <li>
              <a href="">Work</a>
              <a href="">Explorations</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="mobile-menu">
          <MenuToggle />
        </div>
      </div>
    </motion.nav>
  );
}
