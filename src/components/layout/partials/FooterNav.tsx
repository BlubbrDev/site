import React from "react";
import classNames from "classnames";

interface FooterNavProp {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any[];
}

export default function FooterNav(prop: FooterNavProp): JSX.Element {
  const classes = classNames("footer-nav", prop.className);

  return (
    <nav {...prop.props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="#bots">About</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        {/* <li>
          <Link to="#0">About us</Link>
        </li>
        <li>
          <Link to="#0">FAQ&apos;s</Link>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li> */}
      </ul>
    </nav>
  );
}
