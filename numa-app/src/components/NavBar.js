import CartWidget from "./CartWidget";
import Links from "./Links";

const NavBar = () => {
    return(
        <nav>
            <div  className="ContenedorNavBar">
                <p className="NameNav"> NUMA STORE</p>
                <ul className="LinksNavBar"> 
                <Links enlace="" name="Productos"> </Links>
                <Links enlace="" name="Envios"></Links>
                <Links enlace="" name="Nosotros"></Links>
                <CartWidget></CartWidget>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;