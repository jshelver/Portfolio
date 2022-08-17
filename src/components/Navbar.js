import { HiOutlineCode } from "react-icons/hi"

function Navbar() {
    return (
        <nav>
            <div className="nav-logo-wrapper">
                <a onClick={() => window.location.reload(false)}><HiOutlineCode className="nav-logo"/></a>
                <h1 className="nav-title">Jason Shelver</h1>
            </div>
            <div className="nav-links">
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar