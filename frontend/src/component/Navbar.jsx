import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "50px",
        justifyContent: "center",
        marginTop: "30px",
        marginBottom: "40px",
      }}
    >
      <Link to={"/"}>Post Jobs</Link>
      <Link to={"/jobs"}>Get Jobs</Link>
    </div>
  );
};
