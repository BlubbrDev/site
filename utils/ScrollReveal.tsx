import React, {
  useState,
  useEffect,
  useImperativeHandle,
  ReactNode,
  ReactNodeArray,
  useRef,
} from "react";
import { throttle } from "lodash";

/**
 * Defines the shape of the props passed into the scroller.
 */
interface _ScrollerProps {
  children: ReactNode | ReactNodeArray;
}

/**
 * The scroller that controlls when elements are revealed based on the current scroll position.
 */
const _Scroller = React.forwardRef((props: _ScrollerProps, ref) => {
  const throttleWait = 30;
  const [viewportHeight, setViewportheight] = useState(600);
  const [revealEl, setRevealel] = useState<NodeListOf<Element>>();
  
  /**
   * Reveals the elements when the window loads.
   */
  useEffect(() => {
    setViewportheight(window.innerHeight);
    handleListeners();
    revealElements();
  }, []);
  
  /**
   * Exposes an initializer callback function that sets the reveal for the scroll reveal.
   */
  useImperativeHandle(ref, () => ({
    init() {
      const query = "[class*=reveal-]";
      setRevealel(document.querySelectorAll(query));
    },
  }));

  /**
   * When the reveal element loads, checks to see if the reveal has been completed and if not, it
   * will set an event listener on the scroll and resize emitters.
   */
  useEffect(() => {
    document.querySelector('body').classList.add('has-animations');
    if (typeof revealEl !== "undefined" && revealEl.length > 0) {
      if (!checkComplete() && typeof window !== 'undefined') {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
      }
      revealElements();
    }
  }, [revealEl]);

  /**
   * Checks if the reveal has completed (all the elements that should be visible are visible).
   * @returns whether or not the revealed elements are all visible
   */
  const checkComplete = () => {
    const query = "[class*=reveal-].is-revealed";
    if (!revealEl) return false;
    return revealEl.length <= document.querySelectorAll(query).length;
  };

  /**
   * Returns whether or not the given element is within the given offset of being visible.
   * @param el the element that we want to check the visibility of
   * @param offset the offset of the viewport that should be deemed "visible"
   * @returns whether or not the given element is visible
   */
  const isVisible = (el: Element, offset: number) => {
    return el.getBoundingClientRect().top <= viewportHeight - offset;
  };

  /**
   * Reveals the elements that should be revealed based on the current scroll position.
   */
  const revealElements = () => {
    if (checkComplete()) return;
    if (!revealEl) return;
    const delay = "data-reveal-delay";
    const offset = "data-reveal-offset";
    const container = "data-reveal-container";
    const revealed = "is-revealed";
    for (let i = 0; i < revealEl.length; i++) {
      const el: Element = revealEl[i];
      const revealDelay = parseInt(el.getAttribute(delay));
      const revealOffset: number = el.getAttribute(offset)
        ? parseInt(el.getAttribute(offset))
        : 200;
      const listenedEl = el.getAttribute(container)
        ? el.closest(el.getAttribute(container))
        : el;
      if (
        isVisible(listenedEl, revealOffset) &&
        !el.classList.contains(revealed)
      ) {
        if (revealDelay && revealDelay !== 0) {
          setTimeout(() => el.classList.add(revealed), revealDelay);
        } else {
          el.classList.add(revealed);
        }
      }
    }
  };

  /**
   * Removes the event listeners for onScroll and onResize event emitters.
   */
  const handleListeners = () => {
    if (!checkComplete()) return;
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
  };

  /**
   * Handles a scroll event (throttled to only execute once every throttleWait milliseconds).
   */
  const handleScroll = throttle(() => {
    handleListeners();
    revealElements();
  }, throttleWait);

  /**
   * Handles a resize event (throttled to only execute once every throttleWait milliseconds).
   */
  const handleResize = throttle(() => {
    setViewportheight(window.innerHeight);
  }, throttleWait);


  return <>{props.children}</>;
});

/**
 * Defines the interface of props used by the scroll reveal component.
 */
interface ScrollRevealProps {
  children: ReactNode | ReactNodeArray;
}

/**
 * A wrapper for individual pages where we want the content on that page to be revealed as you
 * scroll down the page.
 */
export default function ScrollReveal({
  children,
}: ScrollRevealProps): JSX.Element {
  const childRef = useRef<any>();

  useEffect(() => {
    document.body.classList.add("is-loaded");
    childRef.current.init();
  }, []);

  return <_Scroller ref={childRef}>{children}</_Scroller>;
}
