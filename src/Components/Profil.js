import { useNavigate, useParams } from "react-router-dom"

const Profil=({users})=>{
    const {id} = useParams()
    const navigate = useNavigate() 
    const found = users.find((el,i,t)=> el.id == id)
    console.log(found)
    return(
        <div>
            <h1>{found.name}</h1>
            <h2>{found.age}</h2>
            <h3>{found.city}</h3>
            <button onClick={()=>navigate('/')}>Home</button>
        </div>
    )
}

export default Profil