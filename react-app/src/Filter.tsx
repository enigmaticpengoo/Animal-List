import { useState } from "react";

const Filter = () => {
  const [filterOne, setFilterOne] = useState("null");
  const [filterTwo, setFilterTwo] = useState("null");

  const filterSelectOne = () => {
    const selectedFilter = (
      document.getElementById("filterOne") as HTMLInputElement
    ).value;
    setFilterOne(selectedFilter);
    console.log(selectedFilter);

    filterApply();
  };

  const filterSelectTwo = () => {
    const selectedFilter = (
      document.getElementById("filterTwo") as HTMLInputElement
    ).value;
    setFilterOne(selectedFilter);
    console.log(selectedFilter);

    filterApply();
  };

  const filterApply = () => {
    console.log(filterOne);
  };

  return (
    <div style={{ display: "flex", flexWrap: "nowrap" }}>
      <div style={{ margin: "10px 10px 10px 80px" }}>
        <label htmlFor="filterOne" style={{ marginRight: "5px" }}>
          Filters:
        </label>
        <select
          onChange={filterSelectOne}
          name="filterOne"
          id="filterOne"
          style={{ width: "110px" }}
        >
          <option value=""></option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </div>
      <div style={{ margin: "10px 0px" }}>
        <select
          onChange={filterSelectTwo}
          name="filterTwo"
          id="filterTwo"
          style={{ width: "110px" }}
        >
          <option value=""></option>
          <option value="Name">Name</option>
          <option value="Class">Class</option>
          <option value="Genus">Genus</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
