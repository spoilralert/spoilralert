import Link from "next/link";

export default function HeaderNav() {
  return (
    <div className="header__sign-log">
      <Link href="/signup">Sign Up</Link>
      <Link href="/login">Login</Link>
    </div>
  );
}
