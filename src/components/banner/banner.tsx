import SpeakerPhoneIcon from "../icons/speaker_phone";
import CloseIcon from "../icons/close";
import { useState } from "react";
import Link from "next/link";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    isVisible && (
      <section className="bg-blue-dark">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-blue-darker">
                <SpeakerPhoneIcon />
              </span>
              <p className="ml-3 font-light text-white truncate">
                <span className="md:hidden">We shipped our newsletter!</span>
                <span className="hidden md:inline">
                  Hey! We're excited to announce our weekly newsletter.
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <Link href="#newsletter">
                <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-darker hover:bg-blue">
                  Subscribe
                </a>
              </Link>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                onClick={() => setIsVisible(false)}
                className="-mr-1 flex p-2 rounded-md sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <span className="fill-current text-white hover:text-blue-darkest">
                  <CloseIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
