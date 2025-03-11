import { useState,useEffect } from 'react'
import axios from 'axios'


function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    
    axios.get("http://localhost:3000/quiz").then((res)=>{
      setdata(res.data);

      console.log(res.data);
    }).catch((err)=>{
      console.log( "There is a error",err);
    })
    
  }, [])
  

  return (
    <>
     <div className='bg-purple-800 text-white pl-5 '>
      <ul className='flex flex-col gap-5'>
      {data.map(ques=>(
         <li className='flex flex-col gap-2.5'>
          <p className='text-yellow-400 font-bold text-4xl'>{ques.question}</p>
          <ul>
            {
              ques.options.map((option, index )=>(
                  <li className='flex gap-3.5' key={index}>
                    <input type='checkbox'/>
                    <label> {option}</label>
                  
                  </li>
              ))
            }
          </ul>

         </li>

  ))}
  </ul>
     </div>
    </>
  )
}

export default App
