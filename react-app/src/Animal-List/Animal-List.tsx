import animalList from "./Animal-List-Data";
import Favorite from "../Favorite";
import "./Animal-List.css";
import { useState } from "react";

interface props {
  listProp: {
    animal: string;
    class: string;
    genus: string;
    image: string;
    link: string;
  }[];
}

const AnimalList = (prop: props) => {
  const list = prop.listProp;

  return (
    <div className="containter d-flex flex-wrap">
      {list.map((list) => (
        <div
          className="card highlight-img"
          style={{
            width: "12rem",
            margin: "10px auto",
            padding: "0px",
          }}
          key={list.animal}
        >
          <a href={list.link} target="_blank">
            <img src={list.image} className="card-img-top" alt={list.animal} />
          </a>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <a
                  href={list.link}
                  target="_blank"
                  style={{ textDecoration: "none", color: "currentColor" }}
                >
                  <h5 className="card-title">{list.animal}</h5>
                </a>
              </div>
              <div className="col"></div>
              <div className="col">
                <Favorite />
              </div>
            </div>
            <div className="row">
              <p className="card-text">
                Class: {list.class}
                <br></br>Genus: {list.genus}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div
        style={{
          width: "12rem",
          margin: "10px auto",
          padding: "0px",
        }}
      ></div>
      <div
        style={{
          width: "12rem",
          margin: "10px auto",
          padding: "0px",
        }}
      ></div>
      <div
        style={{
          width: "12rem",
          margin: "10px auto",
          padding: "0px",
        }}
      ></div>
      <div
        style={{
          width: "12rem",
          margin: "10px auto",
          padding: "0px",
        }}
      ></div>
      <div
        style={{
          width: "12rem",
          margin: "10px auto",
          padding: "0px",
        }}
      ></div>
      <div
        style={{
          width: "12rem",
          margin: "10px auto",
          padding: "0px",
        }}
      ></div>
      <div
        style={{
          width: "12rem",
          margin: "10px auto",
          padding: "0px",
        }}
      ></div>
      <div
        style={{
          width: "12rem",
          margin: "10px auto",
          padding: "0px",
        }}
      ></div>
      <div
        style={{
          width: "12rem",
          margin: "10px auto",
          padding: "0px",
        }}
      ></div>
      <div
        style={{
          width: "12rem",
          margin: "10px auto",
          padding: "0px",
        }}
      ></div>
    </div>
  );
};

export default AnimalList;
