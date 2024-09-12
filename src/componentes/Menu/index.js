import { Link } from 'react-router-dom';
import logoJogo from 'assets/Logo.png';
import logoJogoSimples from 'assets/Logo_Simples.png';
import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <header>
            <nav className={`${"navbar"} ${"navbar-expand-lg"}`}>
                <div className={`${"container-fluid"} ${"text-center"}`}>
                    <button className={`${"navbar-toggler"} ${styles.btnMenuHamburguer}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <Link className={`${"navbar-brand"} ${"d-flex"}`} to="/">
                        <img src={logoJogoSimples} alt="Logo do Jogo Intercessores" id={styles.logoImg} className={`${"d-inline-block"} ${"align-text-top"}`} />
                        <h1>Intercessores</h1>
                    </Link>
                    <div className={`${"collapse"} ${"navbar-collapse"}`} id={"navbarTogglerDemo03"}>
                        <ul className={`${"navbar-nav"} ${"me-auto"} ${"mb-2"} ${"mb-lg-0"}`}>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} to="/comoJogar">Como Jogar</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link className={"nav-link"} to="/sobre">Sobre o criador</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}