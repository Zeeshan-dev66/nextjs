import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useState } from 'react'
const index = () => {
const [color,setColor] = useState(true)
useEffect(()=>{
  console.log("hello effect")
},[])
// const route = useRouter()
// console.log(route.asPath)
  return (
    <div className='flex flex-col justify-center items-center text-5xl gap-4'>
      <div className='flex justify-center gap-4'>

      <button className='bg-blue-400 py-4 px-2' onClick={()=>setColor(true)}>True</button>
      <button className='bg-blue-400 py-4 px-2' onClick={()=>setColor(false)}>False</button>
      </div>
      {color ? <><h1>😂</h1></>:<><h1>🤦‍♂️</h1></>}
      <div>
        <p className={`${color}`}>{color}</p>
      </div>

    </div>
  )
}

export default index