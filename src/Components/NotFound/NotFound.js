import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div className="text-center py-5">
      <img src={img} width="400px" alt="" />
      <h1 className="my-3">Page Not Found</h1>
      <Link to="/home">
        <button className="button py-2 px-3 rounded">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
