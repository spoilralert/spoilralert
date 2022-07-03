import HeaderNav from "./HeaderNav";
import Image from "next/image";
// import Logo from "../public/images/logo_rooster_white1.png";
import LogoIcon from "../public/images/rooster_icon1.png";
import Search from "./Search";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import Logo from "../public/images/logo_icon.svg";

export default function Header() {
  return (
    <header>
      <div className="header__logo">
        <Link href="/">
          <a className="header__logo__link">
            <Logo id="header__logo" />
            {/* <Image
              src={LogoIcon}
              width="62"
              height="50"
              alt="spoilralert logo"
            /> */}
          </a>
        </Link>
      </div>
      {/* <div className="header__search">
        <Search />
      </div> */}
      <div className="header__nav">
        <HeaderNav />
        <HamburgerMenu />
      </div>
    </header>
  );
}
