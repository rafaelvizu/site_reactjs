import { Link } from 'react-router-dom'

function Error() {
     return (
          <div className='error'>
               <h2>A URL digitada não existe</h2>
               <p>
                    Volte para <Link to='/' className='link'>Home</Link>
               </p>
          </div>
     )
}


export default Error