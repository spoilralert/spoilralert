import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}
