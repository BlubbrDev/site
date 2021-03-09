import React from "react";
// import Header from 'components/layout/Header';
// import Footer from 'components/layout/Footer';

export default function LayoutDefault({ children }) {
  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" />
      <main className="site-content">{children}</main>
      <Footer />
    </>
  );
}
