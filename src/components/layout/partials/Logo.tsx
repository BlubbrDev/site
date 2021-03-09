import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "components/elements/Image";
import logo from "assets/images/logo.svg";

interface LogoProp {
  className?: String;
}

export default function Logo(logoProp: LogoProp, ...props: any[]) {
  const classes = classNames("brand", logoProp.className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={logo}
            alt="Open"
            width={32}
            height={32}
          />
        </Link>
      </h1>
    </div>
  );
}
