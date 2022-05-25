import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserId } from "../lib/storage";
import LogOut from "./LogOut";

export default function HeaderNav() {
  const [userId, setUserId] = useState();

  useEffect(() => {
    const id = getUserId();
    setUserId(id);
  }, []);

  if (userId) {
    return (
      <div className="header__sign-log">
        <Link href="/profile">Profile</Link>
        <button className="logOut" onClick={LogOut}>
          Log out
        </button>
      </div>
    );
  } else {
    return (
      <div className="header__sign-log">
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Login</Link>
      </div>
    );
  }
}
