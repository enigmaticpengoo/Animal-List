import AnimalList from "./Animal-List/Animal-List";
import Navbar from "./Navbar/Navbar";
import Leftaside from "./Leftaside";
import Rightaside from "./Rightaside";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col">
          <Leftaside />
        </div>
        <div className="col" style={{ flex: "80%" }}>
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
