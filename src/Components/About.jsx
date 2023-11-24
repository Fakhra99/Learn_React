import React, {useState} from 'react'

const About = () => {
    const [count, setCount]=useState(1)

    const add=()=>{
      if(count<4)
setCount(count+1)
    }
      const sub=()=>{
        if(count>1)
      setCount(count-1)
    }
  // const{name,age,isMarried}=user;
  return (
  <div className='d-flex justify-content-center align-items-center'>
    <button onClick={()=>sub()} className='btn btn-success'>-</button>
    <h1>{count}</h1>
    <button onClick={()=>add()} className='btn btn-success'>+</button>
    </div>
  // <>
  // <h1>{name}</h1>
  // <p>{age}</p>
  // <p>{isMarried}</p>
  // </>
  )
}

export default About