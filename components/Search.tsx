import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  style: {};
  handleChange: (e: React.ChangeEvent) => Promise<void>;
}

export default function Search(props: Props) {
  return (
    <div className="searchbox" style={props.style}>
      <label htmlFor="search">search for spoilrs</label>
      <div>
        {/* <button type="submit" className="search-btn">
          <FontAwesomeIcon icon={faPlus} className="search-icon" />
        </button> */}
        <input
          name="search"
          type="text"
          placeholder="film title"
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
