import React, { ReactNodeArray } from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

interface LayoutDefaultProps {
  children: ReactNodeArray;
}

export default function LayoutDefault(props: LayoutDefaultProps) {
  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" />
      <main className="site-content">{props.children}</main>
      <Footer />
    </>
  );
}
