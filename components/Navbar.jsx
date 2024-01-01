import React, { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../src/styles";
import { navLinks } from "../constants";
import { logo, resume } from "../src/assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const mobileMenuRef = useRef(null);

  // To handle scrolled effect
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrolled(false); // User scrolled down
      } else {
        setScrolled(true); // User scrolled up
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // To handle overflow-y hidden style on the body element
  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [toggle]);

  // To handle blur effect on the content element
  useEffect(() => {
    handleContentClass(toggle);
  }, [toggle]);

  // Creates the blur effect on the content element
  const handleContentClass = (toggle) => {
    const contentElements = document.querySelectorAll(
      ".content-a, .content-b, .content-c"
    );
    contentElements.forEach((element) => {
      if (toggle) {
        element.classList.add("blur");
      } else {
        element.classList.remove("blur");
      }
    });
  };

  // Open the resume PDF in a new tab
  const openResume = () => {
    window.open(resume, "_blank");
  };

  // To render the desktop menu
  const renderDesktopMenu = () => (
    <>
      <div className="hidden xmd:flex">
        <ul className="flex items-center ml-auto list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-secondary" : "text-white"
              } hover:text-secondary ease-in-out duration-200 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="hidden xmd:flex button button-gradient gradient text-white outline-none
        font-bold text-[16px] px-3 py-2 rounded-md"
        onClick={openResume}
      >
        Resume
      </button>
    </>
  );

  // To render the mobile menu
  const renderMobileMenu = () => (
    <motion.div
      ref={mobileMenuRef}
      className="fixed top-0 right-0 z-10 h-screen w-3/5 bg-[#000851]"
      style={{
        boxShadow: "-10px 0px 30px -15px rgba(2,12,27,0.7)",
      }}
      initial={{ x: "100%" }}
      animate={{
        x: toggle ? "0%" : "100%",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      exit={{ x: "100%", transition: { duration: 0.3, ease: "easeInOut" } }}
    >
      {toggle && (
        <>
          <div className="xmd:hidden flex justify-end mt-6 mr-5 items-center">
            <div className="burger-icon" onClick={() => setToggle(!toggle)}>
              <div className={`burger-line ${toggle ? "active" : ""}`}></div>
              <div className={`burger-line ${toggle ? "active" : ""}`}></div>
              <div className={`burger-line ${toggle ? "active" : ""}`}></div>
            </div>
          </div>
          <div className="flex flex-col h-full m-[-50px]">
            <div className="flex flex-col justify-center h-full px-6">
              <ul className="list-none flex flex-col gap-6 items-center">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[18px] text-white ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center p-4">
                <button
                  className="text-[18px] text-white font-poppins
                px-3 py-2 rounded-md bg-[#8f9afa] font-medium p-2"
                  onClick={openResume}
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );

  // Handler method
  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setToggle(false);
    }
  };

  // To handle outside menu clicks on mobile-view
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("touchend", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("touchend", handleClickOutside, true);
    };
  }, []);

  // Animate hamburger lines on toggle off
  useEffect(() => {
    const lines = document.querySelectorAll(".burger-line");

    if (!toggle) {
      lines.forEach((line) => {
        line.classList.add("closing");
      });

      setTimeout(() => {
        lines.forEach((line) => {
          line.classList.remove("closing");
        });
      }, 300);
    }
  }, [toggle]);

  // Memoized version of renderMobileMenu
  const memoizedRenderMobileMenu = useMemo(
    () => renderMobileMenu(),
    [active, toggle]
  );

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center justify-between py-4 fixed top-0 z-20`}
      style={{
        transform: scrolled ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
        backgroundColor: "transparent",
        WebkitBackdropFilter: "blur(30px)",
        backdropFilter: "blur(30px)",
        boxShadow: scrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain cursor-pointer"
          />
          <p className="hover:text-secondary ease-in-out duration-200 text-white text-[18px] font-bold cursor-pointer flex">
            Sharjeel&nbsp; <span className="sm:block hidden">Riaz</span>
          </p>
        </Link>

        {/* Rendering the desktop menu */}
        {renderDesktopMenu()}
        <div className="xmd:hidden flex justify-end items-center">
          <div className="burger-icon" onClick={() => setToggle(!toggle)}>
            <div className={`burger-line ${toggle ? "active" : ""}`}></div>
            <div className={`burger-line ${toggle ? "active" : ""}`}></div>
            <div className={`burger-line ${toggle ? "active" : ""}`}></div>
          </div>

          {/* Rendering the mobile menu */}
          <AnimatePresence>
            {toggle && memoizedRenderMobileMenu}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
