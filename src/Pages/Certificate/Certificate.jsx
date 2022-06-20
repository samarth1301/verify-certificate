import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import header from "../../assets/images/header.png";
import { Document, Page } from 'react-pdf';
import { CertificateContext } from '../../Context/Context';

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

  
const Certificate = () => {
    const navigate = useNavigate();
    const {Certificate} = useContext(CertificateContext);
    const {student,course,batch} = Certificate;
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
          This certificate above verifies that <span className='text-blue-600 font-semibold' >{student?.firstName + " " + student?.lastName } </span> successfully completed the <span className='text-blue-600 font-semibold'>{course?.name} Of {formatDate(new Date(batch?.startDate))}</span> on the date given on the certificate above. This certificate indicates that the entire {batch?.name} Of {formatDate(new Date(batch?.startDate))} was completed by the student.
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