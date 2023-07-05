const ListGroup = () => {
  const animalList = [
    { animal: "Dog", class: "Mammal", image: "src/assets/dog.jpg" },
    { animal: "Cat", class: "Demon", image: "src/assets/cat.jpg" },
    { animal: "Mouse", class: "Mammal", image: "src/assets/mouse.jpg" },
    { animal: "Bear", class: "Mammal", image: "src/assets/bear.jpg" },
  ];

  return (
    <div className="container">
      <div className="row row-cols-3">
        {animalList.map((animalList) => (
          <div
            className="card"
            style={{ width: "18rem" }}
            key={animalList.animal}
          >
            <img
              src={animalList.image}
              className="card-img-top img-fluid"
              alt={animalList.animal}
            />
            <div className="card-body">
              <h5 className="card-title">{animalList.animal}</h5>
              <p className="card-text">Class: {animalList.class}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListGroup;
