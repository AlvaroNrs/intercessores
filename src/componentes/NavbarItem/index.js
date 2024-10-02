import { Link } from 'react-router-dom';
import styles from './NavbarItem.module.css';

export default function NavbarItem(props){
    return(
        <>
            <Link className={`${"nav-link"} ${props.corFonte} ${styles.itemLink}`} aria-current="page" to={props.pagina}>{props.titulo}</Link>
        </>
    );
}