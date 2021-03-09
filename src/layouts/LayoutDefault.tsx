import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

interface LayoutDefaultProps {
  children: JSX.Element[] | JSX.Element;
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
