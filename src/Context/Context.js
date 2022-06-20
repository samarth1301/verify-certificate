import React, { createContext, useState } from 'react'

export const CertificateContext = createContext();

const CertificateContextProvider = ({children}) => {
    const [Certificate, setCertificate] = useState(null);
  return (
    <CertificateContext.Provider value={{Certificate,setCertificate}}>
        {children}
    </CertificateContext.Provider>
  )
}

export default CertificateContextProvider;