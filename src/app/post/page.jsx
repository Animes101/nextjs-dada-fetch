import { Jacques_Francois_Shadow } from 'next/font/google';
import Link from 'next/link';
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

                        <Link className='bg-white text-black p-4' href={`/post/${item.id}`}>View Deails</Link>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Postpage;