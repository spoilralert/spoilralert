import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserId } from "../lib/storage";
import LogOut from "./LogOut";

export default function HamburgerMenu() {
  const [userId, setUserId] = useState();

  useEffect(() => {
    const id = getUserId();
    setUserId(id);
  }, []);

  if (userId) {
    return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/requests">Requested spoilrs</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <button className="logout-btn" onClick={LogOut}>
                Log out
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/requests">Requested spoilrs</Link>
            </li>
            <li>
              <Link href="/signup">Sign up</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            {/* <li>
              <Link href="/details">details</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
