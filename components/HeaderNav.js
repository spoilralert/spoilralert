import Link from "next/link";

export default function HeaderNav() {
  return (
    <div className="sign-log">
      <div>
        <Link href="/signin">Sign in</Link>
      </div>
      <div>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
