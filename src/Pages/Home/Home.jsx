import React, { useContext, useEffect, useState } from 'react'
import header from "../../assets/images/header.png";
import { CertificateContext } from '../../Context/Context';
const Home = () => {
    const [token, settoken] = useState("");
  const {setCertificate} = useContext(CertificateContext);
  const handleClick = async()=>{
    if(token===""){
      return;
    }

    try {
      
    } catch (error) {
      console.log({error});
    }

  }
  return (
    <div className='w-full h-fit bg-white px-10 md:px-40' >
      <div className='w-full mt-6 px-5 md:px-10'>
        <img src={header} className='w-full ' alt="" />
      </div>
        <div className='w-5/6 mt-6 mx-auto flex flex-col items-center '>
          <div className='text-xl font-semibold'>
            Verify your Certificate here
          </div>
          <div>
            <input type="text" className='outline-none text-center p-2 rounded-lg border-b-2 border-blue-400 ' value={token} onChange={(e)=>settoken(e.target.value)} />
          </div>
          <button onClick={handleClick} className='text-white font-semibold px-4 py-2 mt-2 bg-blue-600 rounded-lg'>
              Verify 
          </button>
        </div>
    </div>
  )
}

export default Home