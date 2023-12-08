import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";
import "./NavLinks.css";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // animating
  const animateFrom = { opacity: 0, y: -50 };
  const animateTo = { opacity: 1, y: 5 };

  return (
    <>
      <div className="menu-icon" onClick={showSidebar}>
        {sidebar ? <GrClose style={{ color: "red" }} /> : <GrMenu />}
      </div>

      <nav>
        <motion.ul
          className={sidebar ? "nav-items active " : "nav-items"}
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
          onClick={showSidebar}
        >
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.1 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="/" className="active-links">
              Home
            </NavLink>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.1 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="#">About</NavLink>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.15 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="#">Menu</NavLink>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="/reservation" className="active-links">
              Reservations
            </NavLink>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.25 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="#">Order Online</NavLink>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.3 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="#">Login</NavLink>
          </motion.li>
        </motion.ul>
      </nav>
    </>
  );
};

export default NavLinks;
