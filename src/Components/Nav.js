import React, { useEffect } from "react"
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom'
// import '../image.jpg'

const Nav = () => {

    const auth = localStorage.getItem('user')

    const navigate= useNavigate()


    const logout = () =>{
        // console.log("apple");

        localStorage.clear()

        navigate('/signup')
    }
    return( 
        <div>
            <img className="logo" alt="logo" src="https://www.netzcart.com/ncmedia/nccontent/Users.jpg"></img>

        { auth ?    <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add"> Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                {/* <li><Link to="/profile">Profile</Link></li> */}
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>

{/* logout time option hide krne ke ley */}

                {/* <li>{ auth ? <Link onClick={logout}  to="/signup">Logout</Link> : <Link to="/signup">Register</Link>}</li> */}   


            </ul>

            :
            <ul className="nav-ul nav-right">
            <li><Link to="/signup">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            </ul>

        }
        </div>

    )
}

export default Nav