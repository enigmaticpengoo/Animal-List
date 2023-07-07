import animalList from "./Animal-List-Data";
import Favorite from "../Favorite";
import "./Animal-List.css";

const AnimalList = () => {
  return (
    <div className="container">
      <div className="row row-cols-3">
        {animalList.map((animalList) => (
          <div
            className="card highlight-img"
            style={{ width: "18rem", margin: "10px", padding: "0px" }}
            key={animalList.animal}
          >
            <img
              src={animalList.image}
              className="card-img-top"
              alt={animalList.animal}
            />
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title">{animalList.animal}</h5>
                </div>
                <div className="col"></div>
                <div className="col">
                  <Favorite />
                </div>
              </div>
              <div className="row">
                <p className="card-text">
                  Class: {animalList.class}
                  <br></br>Genus: {animalList.genus}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
