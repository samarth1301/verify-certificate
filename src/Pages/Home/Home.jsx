import React, { useEffect, useState } from 'react'
const Home = () => {
    const [token, settoken] = useState("");
  
  return (
    <div className='w-full h-screen bg-purple-400 md:px-40' >
        Verify your certificate
        <div>
            <input type="text" className='outline-none p-2 rounded-lg' value={token} onChange={(e)=>settoken(e.target.value)} />
        </div>
        <button className='text-white font-semibold px-4 py-2 mt-2 bg-gray-400 rounded-lg'>
            Verify 
        </button>
    </div>
  )
}

export default Home