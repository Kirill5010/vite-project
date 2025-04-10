import './SectionVie.css'



function SectionVie({text}) {
   return ( 
      <section className="section-vie">
         <div className="conteiner">
            <div className="section-vie-content">
               <p>{text}</p>
            </div>
         </div>
      </section>
    );
}

export default SectionVie;