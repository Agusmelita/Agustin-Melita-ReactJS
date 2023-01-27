import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import CartWidget from "./CartWidget"
import "./Styles.css/NavBar.css"

const NavBar = ({background})=>{
    return( 
        <header className={`header background--${background}`}>

        <div className="headerContainer"></div>

        {/* Menu */}
        <div className="iconoMenu">
        <FontAwesomeIcon icon={faBars} fontSize="50px" color="white"/>
        </div>
        {/* links */}
        <nav>
            <ul className="navContainer">
                <li className="menu-item"><a href="Inicio.html">Inicio</a></li>
                <li className="menu-item"><a href="Productos.html">Productos</a></li>
                <li className="menu-item"><a href="Contacto.html">Contacto</a></li>
            </ul>

        </nav>

        <CartWidget/>
        <div >

        </div>
    
    </header>)

}

export default NavBar 
