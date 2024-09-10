import { Link } from 'react-router-dom';
import logoJogo from 'assets/Logo.png';
import styles from './Menu.module.css';

export default function Menu(){
    return(
        <header>
            <img src={logoJogo} id={styles.logoImg} alt="Logo do Jogo Intercessores" />
            <hr/>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/">Como Jogar</Link>
                <Link to="/sobre">Sobre o criador</Link>
            </nav>
        </header>
    );
}