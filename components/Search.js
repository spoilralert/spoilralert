import Link from "next/link";

export default function Search() {
  return (
    <div>
      <label htmlFor="search">search for spoilrs</label>
      <input name="search" type="text" placeholder="film title" />
      <button>search</button>
      <Link href="/advancedSearch">Advanced search</Link>
    </div>
  );
}
