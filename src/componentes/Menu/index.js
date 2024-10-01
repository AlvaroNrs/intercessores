import { Link } from 'react-router-dom';
import logoJogoSimples from 'assets/Logo_Simples.png';
import styles from "./Menu.module.css";
import NavbarItem from "componentes/NavbarItem";
import "./Menu.module.css";

export default function Menu() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="pb-3 text-center d-flex align-baseline justify-content-around gap-4">
                        <button className="navbar-toggler styles.btnMenuHamburguer" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars fc-creme"></i>
                        </button>
                        <Link className="navbar-brand d-flex flex-row gap-3" to="/">
                            <img src={logoJogoSimples} alt="Logo do Jogo Intercessores" id={styles.logoImg} className="align-text-top" />
                            <h1>Intercessores</h1>
                        </Link>
                    </div>
                    <div className="d-md-none collapse navbar-collapse styles.menuInterno" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavbarItem className="nav-item" corFonte={"fc-creme"} titulo={"Home"} pagina={"/"}></NavbarItem>
                            <NavbarItem className="nav-item" corFonte={"fc-creme"} titulo={"Como Jogar"} pagina={"/comoJogar"}></NavbarItem>
                            <NavbarItem className="nav-item" corFonte={"fc-creme"} titulo={"Sobre o Desenvolvedor"} pagina={"/sobre"}></NavbarItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}