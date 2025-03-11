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
     <div className='bg-purple-800 text-white '>
      
      {data.map(ques=>(
       <div key={ques._id}>
        <p className='text-yellow-400 font-bold text-4xl'>{ques.question}</p>

        {
          ques.options.map((option, index)=>(
            <li className='flex  gap-5' key={index}>
            <option value=""></option>
            </li>
          ))
        }
        </div>

       
        

  ))}
     </div>
    </>
  )
}

export default App
