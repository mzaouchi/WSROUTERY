import { Link } from "react-router-dom"

const NavUser=()=>{
    return(
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/Users'><li>Users</li></Link>
            <Link to='/Contact'><li>Contact</li></Link>
        </ul>       
    )
}

export default NavUser