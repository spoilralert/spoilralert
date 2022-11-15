import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <div className="container">{children}</div>
      {/* <Footer /> */}
    </>
  );
}
