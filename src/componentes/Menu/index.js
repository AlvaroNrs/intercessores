import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu(){
    return(
        <header>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/sobre">Sobre Mim</Link>
            </nav>
        </header>
    );
}