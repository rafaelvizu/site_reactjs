import './App.css'
import RoutesApp from './Routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
 
  return (
    <div>
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
    </div>
  )
}

export default App
