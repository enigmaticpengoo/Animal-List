import AnimalList from "./Animal-List/Animal-List";
import Navbar from "./Navbar/Navbar";
import Leftaside from "./Aside/Leftaside";
import Rightaside from "./Aside/Rightaside";
import Searchbar from "./Searchbar/Searchbar";
import Filter from "./Filter";
import animalList from "./Animal-List/Animal-List-Data";
import { useState } from "react";
import newArray from "./Filter";

const App = () => {
  const [list, setList] = useState(animalList);

  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col">
          <Leftaside />
        </div>
        <div className="col" style={{ flex: "60%" }}>
          <Searchbar />
          <Filter listProp={list} filter={() => setList(newArray)} />
          <AnimalList listProp={list} />
        </div>
        <div className="col">
          <Rightaside />
        </div>
      </div>
    </div>
  );
};

export default App;
