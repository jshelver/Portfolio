import React, { useEffect } from "react"
import { HiOutlineCode } from "react-icons/hi"

function Navbar() {
    const [background, setBackground] = React.useState("nav-transparent") // If I use a boolean it doesn't work

    const navRef = React.useRef()
    navRef.current = background

    const controlNavbar = () => {
        if (window.scrollY > 500) {
            setBackground("nav-solid")
        } else {
            setBackground("nav-transparent")
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', controlNavbar)
        return () => {
            document.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (
        <nav className={`nav ${background}`}>
            <div className="nav-logo-wrapper">
                <a onClick={() => window.location.reload(false)}><HiOutlineCode className="nav-logo"/></a>
                <h1 className="nav-title">Jason Shelver</h1>
            </div>
            <ul className="nav-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar