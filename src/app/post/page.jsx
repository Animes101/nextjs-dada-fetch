import { Jacques_Francois_Shadow } from 'next/font/google';
import React from 'react'

const fetchpost=async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=res.json()

    return data;
}

const Postpage =async () => {

    const post= await fetchpost();

    console.log(post)



  return (
    <div>


        <div className='grid grid-cols-2 gap-4'>
            {post?.map((item, index)=>{

                console.log(item)
                return(
                    <div key={index} className='p-4 bg-gray-400'>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Postpage;