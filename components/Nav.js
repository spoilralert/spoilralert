import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/requests">Requested spoilrs</Link>
      <Link href="/signup">Sign up</Link>
      <Link href="/login">Login</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/details">details</Link>
    </nav>
  );
}
