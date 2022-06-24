import { parse } from 'nth-check'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'



function Lista() {
     const [personsSaves, setPersonsSaves] = useState([])

     useEffect(() => {
          const myList = localStorage.getItem("@capitaneus")
          setPersonsSaves(JSON.parse(myList) || [])
     }, [])

     function Excluir(personSave) {
          
          let filterPerson = personsSaves.filter((persons) => {
               return (persons.id != personSave.id)
          })
          console.log(filterPerson)

          setPersonsSaves(filterPerson)

          localStorage.setItem("@capitaneus", JSON.stringify(filterPerson))

          toast.success(`O personagem ${personSave.name} foi excluido!`)
     }

     if (personsSaves.length === 0) {
          return (
               <div className='container-none-person'>
                    <h2>Nenhum personagem adicionado!</h2>
                    <p>Adicione em <Link to='/' className='link'>Home</Link></p>
               </div>
          )
     } else {
          return(
               <div className='container-list-person'>
                    {personsSaves.map((personSave) => {
                         return (
                              <div className='person-container-list'>
                                   <img src={personSave.image}/>
                                   <h2>{personSave.name}</h2>
                                   <p>
                                        <b>Status: </b>{personSave.status} <br/>
                                        <b>Specie: </b>{personSave.species} <br/>
                                        <b>Gender: </b> {personSave.gender} <br/>
                                        <button onClick={() => Excluir(personSave)}>Excluir</button>
                                   </p>
                              </div>
                         )
                    })}
               </div>
          )
     }

     
}


export default Lista