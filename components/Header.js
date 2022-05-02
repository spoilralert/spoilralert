import HeaderNav from "./HeaderNav";
import Image from "next/image";
import Logo from "../public/images/logo_rooster_white1.png";
import Search from "./search";
// import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Image src={Logo} width="50" height="50" alt="spoilralet logo" />
      <Search />
      <HeaderNav />
    </header>
  );
}
