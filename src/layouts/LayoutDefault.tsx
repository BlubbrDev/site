import React, { ReactNode, ReactNodeArray } from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

/**
 * Defines the shape of the props for a LayoutDefault.
 */
interface LayoutDefaultProps {
  children: ReactNode | ReactNodeArray;
}

/**
 * Wraps the given children with a header and footer.
 * @param props the props parameter as a JS object
 */
export default function LayoutDefault(props: LayoutDefaultProps): JSX.Element {
  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" />
      <main className="site-content">{props.children}</main>
      <Footer />
    </>
  );
}
