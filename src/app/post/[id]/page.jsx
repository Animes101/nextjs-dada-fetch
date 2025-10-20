import React from 'react'

const  detailsPOst=async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=res.json();
     return data;
}

const PostDetailspage = async({params}) => {

    const details= await detailsPOst();
    const id=params.id
    const detailsOne=details.find((item)=> item.id ==id);

    console.log(detailsOne)
   
  return (
    <div>
        <h1>{detailsOne.title}</h1>
        <h4>{detailsOne.id}</h4>
        <p>{detailsOne.body}</p>
    </div>
  )
}

export default PostDetailspage