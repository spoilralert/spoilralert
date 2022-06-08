import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Search(props) {
  return (
    <div className="searchbox" style={props.style}>
      <label htmlFor="search">Search for spoilrs</label>
      <div>
        {/* <button type="submit" className="search-btn">
          <FontAwesomeIcon icon={faPlus} className="search-icon" />
        </button> */}
        <input
          name="search"
          type="text"
          placeholder="Film Title"
          onChange={props.handleChange}
        />
        <button type="submit" className="search-btn">
          <FontAwesomeIcon
            icon={faSearch}
            // style={{ fontSize: 25 }}
            className="search-icon"
          />
        </button>
      </div>
      <Link href="/advancedSearch">Advanced search</Link>
    </div>
  );
}
