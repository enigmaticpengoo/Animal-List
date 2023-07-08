import AnimalList from "./Animal-List/Animal-List";
import Navbar from "./Navbar/Navbar";
import Leftaside from "./Aside/Leftaside";
import Rightaside from "./Aside/Rightaside";
import Searchbar from "./Searchbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col">
          <Leftaside />
        </div>
        <div className="col" style={{ flex: "60%" }}>
          <Searchbar />
          <AnimalList />
        </div>
        <div className="col">
          <Rightaside />
        </div>
      </div>
    </div>
  );
};

export default App;
