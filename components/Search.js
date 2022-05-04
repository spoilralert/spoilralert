import Link from "next/link";

export default function Search() {
  return (
    <div className="searchbox">
      <label htmlFor="search">search for spoilrs</label>
      <div>
        <button type="submit" className="searchbtn">
          search
        </button>
        <input name="search" type="text" placeholder="film title" />
        <button type="submit" className="searchbtn">
          search
        </button>
      </div>
      <Link href="/advancedSearch">Advanced search</Link>
    </div>
  );
}
