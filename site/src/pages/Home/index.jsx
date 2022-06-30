import { useEffect, useState } from 'react'
import api from '../../services/api'
import { toast } from 'react-toastify'


function Home() {

     const [character, setCharacter] = useState([])
     const [loading, setLoading] = useState(true)

     useEffect(() => {
          async function loadAPI() {
               const response = await api.get("/character")
     
               setCharacter(response.data.results)
               setTimeout(()=> {
                    setLoading(false)
               }, 1000)
     
          }

          loadAPI()
     })

     function Salvar(id) {

          async function loadPerson() {
               await api.get(`/character/${id}`)
               .then((response) => {
                    let person = response.data

                    const myList = localStorage.getItem("@capitaneus")
                    let PersonSaves = JSON.parse(myList) || []

                    const hasPerson = PersonSaves.some((personSave) => personSave.id === person.id)

                    if (hasPerson) {
                         toast.warn("O personagem já foi salvo na lista!")
                    } else {
                         PersonSaves.push(person)
                         localStorage.setItem("@capitaneus", JSON.stringify(PersonSaves))
                         toast.success("Personagem salvo com sucesso!")
                    }
               })
               .catch(() => {
                    toast.warning("Personagem não encontrado!")
               })
          }

          loadPerson()
     }

     if (loading) {
          return (
               <div className='loading'>
                    <img src='https://i.pinimg.com/originals/94/ae/fc/94aefc0b4cc029fb9ae73faa95c906d2.png'/>
               </div>
          )

     } else {
          return (
               <div className='home'>
                    {character.map((person) => {
                         return (
                              <div key={person.id} className="character-container">
                                   <img src={person.image}/>
                                   <h2>{person.name}</h2>
                                   <hr/>
                                   <p>
                                        <b>Status: </b>{person.status} <br/>
                                        <b>Specie: </b>{person.species} <br/>
                                        <b>Gender: </b> {person.gender} <br/>
                                        <button onClick={() => Salvar(person.id)}>Salvar</button>
                                   </p>
                              </div>
                         )
                    })}
               </div>
          )
     }
}


export default Home