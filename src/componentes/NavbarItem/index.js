import { Link } from 'react-router-dom';
import './NavbarItem.module.css';

export default function NavbarItem({titulo, pagina, corFonte}){
    return(
        <>
            <Link className={`${"nav-link"} ${corFonte}`} aria-current="page" to={pagina}>{titulo}</Link>
        </>
    );
}