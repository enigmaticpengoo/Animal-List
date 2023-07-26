import AnimalList from "./Animal-List/Animal-List";
import Navbar from "./Navbar/Navbar";
import Leftaside from "./Aside/Leftaside";
import Rightaside from "./Aside/Rightaside";
import Searchbar from "./Searchbar/Searchbar";
import Filter from "./Filter";
import animalList from "./Animal-List/Animal-List-Data";
import { useState } from "react";

const App = () => {
  const [list, setList] = useState(animalList);

  let sorted = false;

  const filterSelect = () => {
    const filterOne = (document.getElementById("filterOne") as HTMLInputElement)
      .value;
    const filterTwo = (document.getElementById("filterTwo") as HTMLInputElement)
      .value;
    const newArray = [...animalList];
    if (filterOne === "Ascending")
      newArray.sort((a, b) =>
        a.animal > b.animal ? 1 : a.animal < b.animal ? -1 : 0
      );
    else
      newArray.sort((a, b) =>
        a.animal < b.animal ? 1 : a.animal > b.animal ? -1 : 0
      );
    if (filterTwo === "Class")
      if (filterOne === "Ascending")
        newArray.sort((a, b) =>
          a.clas > b.clas ? 1 : a.clas < b.clas ? -1 : 0
        );
      else
        newArray.sort((a, b) =>
          a.clas < b.clas ? 1 : a.clas > b.clas ? -1 : 0
        );
    else if (filterTwo === "Genus")
      if (filterOne === "Ascending")
        newArray.sort((a, b) =>
          a.genus > b.genus ? 1 : a.genus < b.genus ? -1 : 0
        );
      else
        newArray.sort((a, b) =>
          a.genus < b.genus ? 1 : a.genus > b.genus ? -1 : 0
        );
    setList(newArray);
    sorted = true;
    console.log(newArray);
  };

  const search = () => {
    const searchInput = (document.getElementById("search") as HTMLInputElement)
      .value;
    const newArray = [...animalList];
    let newerArray = [];
    if (sorted === false)
      newArray.sort((a, b) =>
        a.animal > b.animal ? 1 : a.animal < b.animal ? -1 : 0
      );
    else return;
    newerArray = newArray.filter((a) =>
      a.animal.toLowerCase().startsWith(searchInput.toLowerCase())
    );
    sorted = true;
    setList(newerArray);
  };

  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col">
          <Leftaside />
        </div>
        <div className="col" style={{ flex: "60%" }}>
          <Searchbar onClick={search} />
          <Filter onClick={filterSelect} />
          <AnimalList list={list} />
        </div>
        <div className="col">
          <Rightaside />
        </div>
      </div>
    </div>
  );
};

export default App;
