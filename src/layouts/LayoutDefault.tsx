import React, { ReactNode, ReactNodeArray } from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

interface LayoutDefaultProps {
  children: ReactNode | ReactNodeArray;
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
