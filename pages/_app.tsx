import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
// import "@fortawesome/fontawesome-svg-core/styles/style.scss"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import "../styles/style.scss";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
