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
              <span className="md:flex hidden p-2 rounded-lg bg-blue-darker">
                <SpeakerPhoneIcon />
              </span>
              <p className="ml-3 font-light text-white truncate">
                <span className="md:hidden">We shipped our newsletter!</span>
                <span className="hidden md:inline">
                  Disclaimer: As of June 2021, the team is no longer maintaining
                  this project.
                </span>
              </p>
            </div>
            <div className="order-3 flex-shrink-0 sm:order-3 sm:ml-3">
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
