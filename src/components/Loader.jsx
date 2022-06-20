import React from "react";
import svg from "../assets/images/Loader.svg"
const Loader = () => {
  return (
    <div
      className={`bg-sky-300 -mt-6 bg-opacity-30 flex `}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "10",
      }}
    >
      <div style={{ width: "80%", display: "flex", justifyContent: "center" }}>
        <img src={svg} alt="loading" width={"100px"} />
      </div>
    </div>
  );
};

export default Loader;
