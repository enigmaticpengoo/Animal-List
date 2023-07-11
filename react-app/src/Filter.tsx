import { useState } from "react";

const Filter = () => {
  const [filter, setFilter] = useState("null");

  const filterSelect = () => {
    const selectedFilter = (
      document.getElementById("filter") as HTMLInputElement
    ).value;
    setFilter(selectedFilter);
    console.log(selectedFilter);
    filterApply();
  };

  const filterApply = () => {
    console.log(filter);
  };

  return (
    <div style={{ margin: "10px 80px" }}>
      <label htmlFor="filter" style={{ marginRight: "5px" }}>
        Filter:
      </label>
      <select onChange={filterSelect} name="filter" id="filter">
        <option value=""></option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
  );
};

export default Filter;
