import React from "react";
import "../../App.css";
import Shimmer from "../Shimmer/Shimmer";
export default function Skeleton() {
  return (
    <div className="container d-flex justify-content-between pe-5 ps-5 mt-4 align-items-center list skeleton-wrapper ">
      <div className="skeleton text"> </div>
      <div className="skeleton avatar "></div> <Shimmer />
    </div>
  );
}
