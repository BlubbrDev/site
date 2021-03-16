import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "components/elements/Image";
import logo from "assets/images/logo.png";

interface LogoProp {
  className?: string;
}

export default function Logo(logoProp: LogoProp): JSX.Element {
  const classes = classNames("brand", logoProp.className);

  return (
    <div className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <Image src={logo} alt="Open" width={32} height={32} />
        </Link>
      </h1>
    </div>
  );
}
