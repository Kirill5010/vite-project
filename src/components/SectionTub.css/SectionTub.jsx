import {info} from '../../constants/data'
import MyButton from '../../UI/MyButton'
import { useState } from 'react'
import SectionVie from '../SectionVie/SectionVie'
import './SectionTub.css'

function SectionTub() {
   const [current, setCurrent] = useState('photo')

   return ( 
      <section className="section-tub">
         <div className="conteiner">
            <div className="tub-content">
               <MyButton  active={current === 'photo'} onClick={()=> setCurrent('photo')}>Фото</MyButton>
               <MyButton  active={current === 'news'} onClick={()=> setCurrent('news')}>Новости</MyButton>
               <MyButton  active={current === 'art'} onClick={()=> setCurrent('art')}>Искуство</MyButton>
            </div>
            <SectionVie text={info[current]}/>
         </div>
      </section>
    );
}

export default SectionTub;