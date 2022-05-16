import Checkbox from "../Checkboxes";
import Link from "next/link";

export default function AdvancedSearchForm() {
  return (
    <form>
      <div className="checkbox__container">
        <Checkbox
          title="Genre"
          items={["Action", "Comedy", "Drama", "Horror"]}
        />
      </div>
      <div className="checkbox__container">
        <Checkbox
          title="Tags"
          items={["Bad", "LOL", "Surprising", "Gory", "Super"]}
        />
      </div>
      <button>
        <Link href="/advancedSearchResults">Search</Link>
      </button>
    </form>
  );
}
