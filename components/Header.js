import HeaderNav from "./HeaderNav";
import Image from "next/image";
import Logo from "../public/images/logo_rooster_white1.png";
import Search from "./search";
// import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header-logo">
        <Image src={Logo} width="70" height="70" alt="spoilralet logo" />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <HeaderNav />
      </div>
    </header>
  );
}
