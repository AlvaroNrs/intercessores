import { Link, useLocation } from 'react-router-dom';
import styles from './NavbarItem.module.css';

export default function NavbarItem(props){
    const localizacao = useLocation();

    return(
        <>
            <Link className={`${"nav-link"} ${props.corFonte} ${styles.itemLink}`} aria-current="page" to={props.pagina}>{props.titulo}</Link>
            <div className={`${localizacao.pathname === props.pagina ? styles.linkDestaque : "d-none"}`}></div>
        </>
    );
}