import Checkbox from "../Checkboxes";

export default function AdvancedSearchForm({
  tags,
  genres,
  onSubmit,
  handleCheckTags,
  handleCheckGenres,
  genreChecked,
  tagChecked,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="checkbox__container">
        <Checkbox
          title="Choose genre:"
          items={genres}
          checked={genreChecked}
          handleCheck={handleCheckGenres}
        />
      </div>
      <div className="checkbox__container">
        <Checkbox
          title="Choose tag:"
          items={tags}
          checked={tagChecked}
          handleCheck={handleCheckTags}
        />
      </div>
      <button>Search</button>
    </form>
  );
}
