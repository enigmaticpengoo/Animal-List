import "./Searchbar.css";
import animalList from "../Animal-List/Animal-List-Data";

const listMatch = (param: any) => {
  animalList.animal.match(param);
};

const Searchbar = () => {
  return (
    <div style={{ margin: "10px 80px" }}>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2 nofocus"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          onClick={() => listMatch(document.querySelector("input")?.value)}
          className="btn"
          type="submit"
          style={{ borderColor: "black" }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
