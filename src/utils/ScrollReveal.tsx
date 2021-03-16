import React, {
  useState,
  useEffect,
  useImperativeHandle,
  ReactNode,
  ReactNodeArray,
} from "react";
import { throttle } from "lodash";

type ScrollRevealProps = {
  children: ReactNode | ReactNodeArray;
};

const ScrollReveal = React.forwardRef((props: ScrollRevealProps, ref) => {
  const [viewportHeight, setViewportheight] = useState(window.innerHeight);
  const [revealEl, setRevealel] = useState<NodeListOf<Element>>();

  const checkComplete = () => {
    const query = "[class*=reveal-].is-revealed";
    if (!revealEl) return false;
    return revealEl.length <= document.querySelectorAll(query).length;
  };

  const elementIsVisible = (el: Element, offset: number) => {
    return el.getBoundingClientRect().top <= viewportHeight - offset;
  };

  const revealElements = () => {
    if (checkComplete()) return;
    if (!revealEl) return;
    for (let i = 0; i < revealEl.length; i++) {
      const el: Element = revealEl[i];
      const revealDelay = parseInt(
        el.getAttribute("data-reveal-delay") as string
      );
      const revealOffset: number = el.getAttribute("data-reveal-offset")
        ? parseInt(el.getAttribute("data-reveal-offset") as string)
        : 200;
      const listenedEl = el.getAttribute("data-reveal-container")
        ? (el.closest(
            el.getAttribute("data-reveal-container") as string
          ) as Element)
        : el;
      if (
        elementIsVisible(listenedEl, revealOffset) &&
        !el.classList.contains("is-revealed")
      ) {
        if (revealDelay && revealDelay !== 0) {
          setTimeout(function () {
            el.classList.add("is-revealed");
          }, revealDelay);
        } else {
          el.classList.add("is-revealed");
        }
      }
    }
  };

  useImperativeHandle(ref, () => ({
    init() {
      setRevealel(
        document.querySelectorAll("[class*=reveal-]") as NodeListOf<Element>
      );
    },
  }));

  useEffect(() => {
    if (typeof revealEl !== "undefined" && revealEl.length > 0) {
      if (!checkComplete()) {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
      }
      revealElements();
    }
  }, [revealEl]);

  const handleListeners = () => {
    if (!checkComplete()) return;
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
  };

  const handleScroll = throttle(() => {
    handleListeners();
    revealElements();
  }, 30);

  const handleResize = throttle(() => {
    setViewportheight(window.innerHeight);
  }, 30);

  useEffect(() => {
    handleListeners();
    revealElements();
  }, [viewportHeight]);

  return <>{props.children}</>;
});

export default ScrollReveal;
