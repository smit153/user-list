import React from "react";
import "../../App.css";
export default function ListItem(props) {
  return (
    <div className="container d-flex justify-content-between pe-5 ps-5 mt-4 align-items-center list">
      <div className="fw-bold">
        {props.result.name.first} {props.result.name.last}
      </div>
      <img
        className="rounded-circle p-1"
        src={props.result.picture.thumbnail}
        alt="user"
      ></img>
    </div>
  );
}
