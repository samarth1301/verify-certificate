import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import header from "../../assets/images/header.png";
import Loader from "../../components/Loader";
const Home = () => {
  const [token, settoken] = useState("");
  const [loading, setloading] = useState(false);
  
  return (
    <>
     
      <div className="w-full h-[70vh] flex flex-col items-center justify-evenly  px-10 md:px-40">
        <div className="w-full   px-5 md:px-10 ">
          <img src={header} className="w-full md:w-1/2 mx-auto " alt="" />
        </div>
        <div className="w-5/6  mt-10 md:mt-20 mx-auto flex flex-col items-center ">
          <div className="text-xl font-semibold">
            Verify your Certificate here
          </div>
          <div>
            <input
              type="text"
              className="outline-none text-center p-2 rounded-lg border-b-2 border-blue-400 "
              value={token}
              onChange={(e) => settoken(e.target.value)}
            />
          </div>
          <Link to={`certificate/${token}`}>
            <button
              // onClick={handleClick}
              className="text-white font-semibold px-4 py-2 mt-2 bg-purple-800 rounded-lg"
            >
              Verify
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
