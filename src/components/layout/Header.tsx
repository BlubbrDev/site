import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
// import { Link } from "react-router-dom";
import Logo from "./partials/Logo";
import Button from "components/elements/Button";

interface HeaderProp {
  className?: string;
  navPosition?: string;
  hideNav?: boolean;
  hideSignin?: boolean;
  bottomOuterDivider?: boolean;
  bottomDivider?: boolean;
}

const defaultProps: HeaderProp = {
  className: "",
  navPosition: undefined,
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

export default function Header(headerProp: HeaderProp = defaultProps) {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef<HTMLDivElement>(null);
  const hamburger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current!.style.maxHeight = nav.current?.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = "");
    setIsactive(false);
  };

  const keyPress = (e: any) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e: any) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    headerProp.bottomOuterDivider && "has-bottom-divider",
    headerProp.className
  );

  return (
    <header className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-header-inner",
            headerProp.bottomDivider && "has-bottom-divider"
          )}
        >
          <Logo />
          {!headerProp.hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      "list-reset text-xs",
                      headerProp.navPosition &&
                        `header-nav-${headerProp.navPosition}`
                    )}
                  >
                    <li>
                      <a href="#bots">About</a>
                    </li>
                    <li>
                      <a href="#features" onClick={closeMenu}>
                        Features
                      </a>
                      {/* <Link to="#features" onClick={closeMenu}>Features</Link> */}
                    </li>
                  </ul>
                  {!headerProp.hideSignin && (
                    <ul className="list-reset header-nav-right">
                      <li>
                        <Button
                          tag="a"
                          color="primary"
                          wideMobile
                          href={process.env.REACT_APP_DISCORD_URL as string}
                        >
                          Join Discord
                        </Button>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
