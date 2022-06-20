import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import header from "../../assets/images/header.png";
import Loader from '../../components/Loader';
import { CertificateContext } from '../../Context/Context';
const Home = () => {
    const [token, settoken] = useState("");
    const [loading, setloading] = useState(false);
  const {setCertificate} = useContext(CertificateContext);
  const navigate = useNavigate();
  const handleClick = async()=>{
    if(token===""){
      return;
    }
    setloading(true);
    try {
      const {data:{data,success}} = await axios.get(`http://localhost:8083/credentials/verify/${token}`)
      console.log(data);
      setloading(false);
      if(success){
        setCertificate(data[0]);
        navigate('/certificate')
      }
      else{
        console.log("No Certificate Found");
      }
    } catch (error) {
      console.log({error});
    }

  }
  return (
    <>
    {
      loading &&
        <Loader />
    }
    <div className='w-full h-fit bg-white px-10 md:px-40' >
      <div className='w-full  mt-6 px-5 md:px-10'>
        <img src={header} className='w-full md:w-1/2 mx-auto ' alt="" />
      </div>
        <div className='w-5/6 mt-10 md:mt-20 mx-auto flex flex-col items-center '>
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
    </>

  )
}

export default Home