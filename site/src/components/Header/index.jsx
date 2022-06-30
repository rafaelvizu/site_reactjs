import './header.css'
import { Link } from 'react-router-dom'


function Header() {
     return (
          <div>
               <header>
                    <h1>Rick Person's</h1>
               </header>
               <hr/>
               <nav>
                    <Link to="/" className='navLink'>Home</Link>
                    <Link to="/lista" className='navLink'>Minha lista</Link>
               </nav>
          </div>
     )
}


export default Header