import React  from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Contactus from './components/Contactus'
import Aboutus from './components/Aboutus'
import Feedback from './components/Feedback'
import Moreinfo from './components/Moreinfo'
import Explorestress from './components/Explorestress'
import 'animate.css'
import Exploreoverthinking from './components/Exploreoverthinking'
import Exploredepression from './components/Exploredepression'



const App = () => {
  return (

    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/moreinfo' element={<Moreinfo/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/explorestress' element={<Explorestress/>}/>
        <Route path='/exploroverthinking' element={<Exploreoverthinking/>}/>
        <Route path='/exploredepression' element={<Exploredepression/>}/>
       
         
       
     </Routes>
    </BrowserRouter>
     
    </>  
  )

}

export default App
