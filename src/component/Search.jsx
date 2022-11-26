import React, { useEffect, useState } from 'react'

export default function Search({onChange}) {
  const [term, setTerm] = useState("");
  useEffect(() => {
    onChange(term);
  }, [term])
  
    return (
    <div className='mb-5'>
        <input className='rounded-lg bg-neutral-200 font-semibold p-2 my-2 w-full md:w-6/12' type="text" placeholder='Search images...' value={term} onChange={e=>setTerm(e.target.value)} />
    </div>
  )
}
