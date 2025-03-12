import { useState,useEffect } from 'react'
import axios from 'axios'


function App() { 
  const [data, setdata] = useState([])
  const [useranswers, setuseranswers] = useState({})
  
  const handleclick = (quid, option)=>{
    setuseranswers(prev=>({
      ...prev,

      [quid] : option,



    }));
  };

  const anscheck = ()=>{
   data.forEach(ques => {
    const select = useranswers[ques._id];

    if (select===ques.correctAnswer) {
      console.log("the ques is", ques.question,  " the answ is ", select, " right");
    }
    else{
      console.log("the ques is", ques.question,  " the answ is ", select, " wrong");
    }
   });
  }
  useEffect(() => {
    
    axios.get("http://localhost:3000/quiz").then((res)=>{
      setdata(res.data);

    }).catch((err)=>{
      console.log( "There is a error",err);
    })
    
  }, [])

 useEffect(() => {
 console.log(useranswers);
 }, [useranswers])
 


  
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
                    <input type='radio' name = {ques._id}
                     value={option}
                     checked ={useranswers[ques._id]===option}
                     onChange={()=>handleclick(ques._id, option)}
                    
                    />
                    <label> {option}</label>
                    
                  
                  </li>
              ))
            }
          </ul>

         </li>

  ))}
  </ul>

<button onClick={anscheck}>click</button>

     </div>
    </>
  )
}

export default App
