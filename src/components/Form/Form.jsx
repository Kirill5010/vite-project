import { useEffect, useState } from "react";

function Form() {
   let [input, setInput] = useState('')

   useEffect(()=>{
      console.log('Effect') // Mount
      return () => {
         console.log('unmount') // Unmount
      }
   }, []) // Update

   return ( 
      <div>
         <input onChange={(e)=>setInput(e.currentTarget.value)} value={input} type="text" />
         <p>{input}</p>
      </div>
    );
}

export default Form;