import Link from "next/link";

export default function HeaderNav() {
  return (
    <div className="header__sign-log">
      <Link href="/signin">Sign in</Link>
      <Link href="/login">Login</Link>
    </div>
  );
}
