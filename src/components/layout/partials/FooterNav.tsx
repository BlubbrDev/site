import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface FooterNavProp {
  className?: String,
  props?: any[],
}

export default function FooterNav(prop: FooterNavProp) {
  const classes = classNames("footer-nav", prop.className);

  return (
    <nav {...prop.props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="#0">Contact</Link>
        </li>
        <li>
          <Link to="#0">About us</Link>
        </li>
        <li>
          <Link to="#0">FAQ&apos;s</Link>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li>
      </ul>
    </nav>
  );
}
