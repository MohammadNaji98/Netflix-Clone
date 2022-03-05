import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
function Navbar() {
    return (
        <>
            
            <header>
                <br />
                <Link to="/" id="logo"><h1>NETFLIX CLONE</h1></Link>
                <nav>
                    <Link to="/">Home Page</Link>
                </nav>
            </header>
        </>

    )
}
export default Navbar;