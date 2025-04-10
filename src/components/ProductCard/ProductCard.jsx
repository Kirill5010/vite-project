import { useState, useEffect } from 'react';
import { statuses, getTwoNumder } from '../../constants/data';
import './ProductCard.css'


function ProductCard({product}) {

   const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString())
   const [status, setStatus] = useState('fresh')


   useEffect(()=>{
   let idInterval = setInterval(()=>{
         if (getTwoNumder(currentDate) - getTwoNumder(product.date) > product.end) {
            setStatus('expired')
         } else if (getTwoNumder(currentDate) - getTwoNumder(product.date) < product.end) {
           setStatus('fresh')
         } else {
            setStatus('expires')
         }
     }, 10000)
     return () => {
      clearInterval(idInterval)
     }
   }, [currentDate])

   return ( <>
       <div>
         <div className='card-title'>Product Card {product.date}</div>
         <div className={status}>{statuses[status]}</div>
       </div>
   </> );
}

export default ProductCard;