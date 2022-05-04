import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="searchbox">
      <label htmlFor="search">search for spoilrs</label>
      <div>
        <button type="submit" className="searchbtn">
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: 25 }} />
        </button>
        <input name="search" type="text" placeholder="film title" />
        <button type="submit" className="searchbtn">
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: 25 }} />
        </button>
      </div>
      <Link href="/advancedSearch">Advanced search</Link>
    </div>
  );
}
