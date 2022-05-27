import HeaderNav from "./HeaderNav";
import Image from "next/image";
import Logo from "../public/images/logo_rooster_white1.png";
import Search from "./Search";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header__logo">
        <Link href="/">
          <a className="header__logo__link">
            <Image src={Logo} width="60" height="60" alt="spoilralet logo" />
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
