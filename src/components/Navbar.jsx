
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={'/'} >
                        <a className="navbar-brand" >Navbar</a>
                    </Link>

                </div>


            </nav>



        </>
    )
}

export default Navbar