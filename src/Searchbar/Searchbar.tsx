import "./Searchbar.css";

interface SearchbarProps {
  onClick: () => void;
}

const Searchbar = ({ onClick }: SearchbarProps) => {
  return (
    <div style={{ margin: "10px 80px" }}>
      <div className="d-flex" role="search">
        <input
          id="search"
          className="form-control me-2 nofocus"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          onClick={onClick}
          className="btn"
          type="submit"
          style={{ borderColor: "black" }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
