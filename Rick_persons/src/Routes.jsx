import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Error from './pages/Error'
import Header from './components/Header'
import Lista from './pages/Lista'


function RoutesApp() {

     return (

          <BrowserRouter>
               <Header/>
               <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/lista" element={<Lista/>}/>

                    <Route path="*" element={<Error/>}/>

               </Routes>

          </BrowserRouter>

     )
}


export default RoutesApp