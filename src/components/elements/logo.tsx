import Image from "next/image";
import Link from "next/link";
import { logEvent } from "../../util/GoogleAnalytics";

/**
 * The left-most logo as seen in the navbar.
 */
export default function Logo() {
  return (
    <Link href="/">
      <a onClick={() => logEvent("NAVBAR", "Clicked on logo", "LINK")}>
        <span className="sr-only">Blubbr</span>
        <Image
          className="h-8 w-auto sm:h-10"
          src="/assets/images/base_whale_512.png"
          alt="Blubbr"
          width={40}
          height={40}
        />
      </a>
    </Link>
  );
}
