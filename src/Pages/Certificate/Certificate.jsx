import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import header from "../../assets/images/header.png";
import { Document, Page, pdfjs } from "react-pdf";

import { CertificateContext } from "../../Context/Context";

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
}

const Certificate = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const navigate = useNavigate();
  const { Certificate } = useContext(CertificateContext);
  useEffect(() => {
    if (Certificate === null) {
      navigate("/");
    }
  }, []);
  const [pageNumber, setPageNumber] = useState(1);
 
  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess() {
    setPageNumber(1);
  }

  //   const { student, course, batch,url } = Certificate;
  return (
    <>
      <div className="w-full h-fit bg-white px-10 ">
        <div className="w-56 mx-auto mt-6 px-5 md:px-10">
          <img src={header} className="w-full " alt="" />
        </div>
        <div className=" mt-6 md:mt-10 mx-auto flex flex-col gap-4  md:flex-row md:gap-6 items-center justify-between ">
          <div className="w-64 mx-auto  md:hidden ">
            <Document
              file={Certificate?.url}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                width={250}
               
                pageNumber={pageNumber}
              />
            </Document>
          </div>
          <div className="hidden md:block lg:hidden ">
            <Document
              file={Certificate?.url}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                width={350}
                pageNumber={pageNumber}
              />
            </Document>
          </div>
          <div className="hidden lg:block ">
            <Document
              file={Certificate?.url}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                width={450}
                pageNumber={pageNumber}
              />
            </Document>
          </div>
          <div className="w-full md:w-2/4">
            This certificate above verifies that{" "}
            <span className="text-blue-600 font-semibold">
              {Certificate?.student?.firstName +
                " " +
                Certificate?.student?.lastName}{" "}
            </span>{" "}
            successfully completed the{" "}
            <span className="text-blue-600 font-semibold">
              {Certificate?.course?.name} Of{" "}
              {formatDate(new Date(Certificate?.batch?.startDate))}
            </span>{" "}
            on the date given on the certificate above. This certificate
            indicates that the entire {Certificate?.batch?.name} Of{" "}
            {formatDate(new Date(Certificate?.batch?.startDate))} was completed
            by the student.
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="text-white font-semibold px-4 py-2 mt-2 md:mt-6 bg-blue-600 rounded-lg"
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default Certificate;
