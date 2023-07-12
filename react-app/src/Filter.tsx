import animalList from "./Animal-List/Animal-List-Data";

const Filter = () => {
  const filterSelect = () => {
    const filterOne = (document.getElementById("filterOne") as HTMLInputElement)
      .value;
    console.log(filterOne);
    const filterTwo = (document.getElementById("filterTwo") as HTMLInputElement)
      .value;
    console.log(filterTwo);
    const newArray = animalList.map((animalList) => animalList.animal).sort();
    console.log(newArray);
  };

  return (
    <div style={{ display: "flex", flexWrap: "nowrap" }}>
      <div style={{ margin: "10px 10px 10px 80px" }}>
        <label
          htmlFor="filterOne"
          style={{ marginRight: "5px", fontSize: "1.05em" }}
        >
          Filters:
        </label>
        <select name="filterOne" id="filterOne" style={{ width: "110px" }}>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </div>
      <div style={{ margin: "10px 0px" }}>
        <select name="filterTwo" id="filterTwo" style={{ width: "110px" }}>
          <option value="Name">Name</option>
          <option value="Class">Class</option>
          <option value="Genus">Genus</option>
        </select>
      </div>
      <button
        onClick={filterSelect}
        className="btn"
        style={{
          width: "4em",
          height: "1.6em",
          verticalAlign: "center",
          margin: "10px",
          textAlign: "center",
          padding: "0px",
          color: "black",
          borderColor: "black",
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default Filter;
