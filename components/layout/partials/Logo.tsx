import React from "react";
import Link from "next/link";
import classNames from "classnames";
import Image from "components/elements/Image";

interface LogoProp {
  className?: string;
}

export default function Logo(logoProp: LogoProp): JSX.Element {
  const classes = classNames("brand", logoProp.className);

  return (
    <div className={classes}>
      <h1 className="m-0">
        <Link href="/">
          <a>
            <Image src={"images/logo.png"} alt="Open" width={32} height={32} />
          </a>
        </Link>
      </h1>
    </div>
  );
}
