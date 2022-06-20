import React from 'react'
import { useNavigate } from 'react-router-dom';
import header from "../../assets/images/header.png";
const Certificate = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='w-full h-fit bg-white px-10 ' >
      <div className='w-56 mx-auto mt-6 px-5 md:px-10'>
        <img src={header} className='w-full ' alt="" />
      </div>
        <div className=' mt-6 md:mt-20 mx-auto flex flex-col gap-4  md:flex-row md:gap-6 items-center justify-between '>
          <div className='w-full md:w-1/3'>
             <img src={header} className='w-full ' alt="" />
          </div>
          <div className='w-full md:w-2/4'>
          This certificate above verifies that <span className='text-blue-600 font-semibold' >Samarth Singh</span> successfully completed the <span className='text-blue-600 font-semibold'>NodeJS Training Batch Of 10 July 2021</span> on the date given on the certificate above. This certificate indicates that the entire NodeJS Training Batch Of 10 July 2021 was completed by the student.
          </div>
         
        </div>
        <button onClick={()=>navigate(-1)} className='absolute bottom-10 text-white font-semibold px-4 py-2 mt-2 bg-blue-600 rounded-lg'>
            Go Back
        </button>
    </div>
    </>

  )
}

export default Certificate