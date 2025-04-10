import './App.css'
import { dateTestArr } from './constants/data'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import ProductCard from './components/ProductCard/ProductCard'
import SectionTub from './components/SectionTub.css/SectionTub'
import SectionWelcome from './components/SectionWelcome/SectionWelcome'


function App() {

  return (
    <>
      <Header/>
      <main className='main'>
         <SectionWelcome/>
         <SectionTub/>
         <Form/>
         {dateTestArr.map((date) => <ProductCard key={date.date} product={date}/>)}
      </main>
    </>
  )
}

export default App
