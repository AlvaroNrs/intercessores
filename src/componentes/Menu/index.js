import { Link } from 'react-router-dom';
import logoJogoSimples from 'assets/Manual/Logo_Simples.png';
import logoJogoCompleto from 'assets/Manual/Logo_Completo.png';
import styles from "./Menu.module.css";
import NavbarItem from "componentes/NavbarItem";
import "./Menu.module.css";

export default function Menu() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg pb-md-0">
                <section className="container-fluid d-md-block">
                    <section className="pb-3 pb-md-0 text-center d-flex align-baseline
                    justify-content-around justify-content-md-center gap-4">
                        <section className="d-flex justify-content-between d-md-none">
                            <button className={`${"navbar-toggler"} ${styles.btnMenuHamburguer}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa-solid fa-bars fc-creme"></i>
                            </button>
                            <Link className="navbar-brand d-flex flex-row gap-3" to="/">
                                <img src={logoJogoSimples} alt="Logo do Jogo Intercessores" className={`${"align-text-top"} ${styles.logoImg}`} />
                                <h1>Intercessores</h1>
                            </Link>
                        </section>
                        <section className="d-none d-md-flex flex-column w-100">
                            <Link to="/">
                                <img src={logoJogoCompleto} alt="Logo do Jogo Intercessores" className={`${"align-text-top"} ${styles.logoImg}`} />
                            </Link>
                            <section className="pt-3 d-grid text-center">
                                <section className='row'>
                                    <div className="col-3">
                                        <NavbarItem className="nav-item" corFonte="fc-creme" titulo="Início" pagina="/"></NavbarItem>
                                    </div>
                                    <div className="col-3">
                                        <NavbarItem className="nav-item" corFonte="fc-creme" titulo="Como Jogar" pagina="/comoJogar"></NavbarItem>
                                    </div>
                                    <div className="col-3">
                                        <NavbarItem className="nav-item" corFonte="fc-creme" titulo="Cartas do Jogo" pagina="/cartas"></NavbarItem>
                                    </div>
                                    <div className="col-3">
                                        <NavbarItem className="nav-item" corFonte="fc-creme" titulo="Sobre o criador" pagina="/sobre"></NavbarItem>
                                    </div>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="d-md-none collapse navbar-collapse styles.menuInterno" id="navbarTogglerDemo03">
                        <ul className="d-md-none navbar-nav me-auto mb-2 mb-lg-0">
                            <NavbarItem className="nav-item" corFonte="fc-creme" titulo="Início" pagina="/"></NavbarItem>
                            <NavbarItem className="nav-item" corFonte="fc-creme" titulo="Como Jogar" pagina="/comoJogar"></NavbarItem>
                            <NavbarItem className="nav-item" corFonte="fc-creme" titulo="Cartas do Jogo" pagina="/cartas"></NavbarItem>
                            <NavbarItem className="nav-item" corFonte="fc-creme" titulo="Sobre o criador" pagina="/sobre"></NavbarItem>
                        </ul>
                    </section>
                </section>
            </nav>
        </header>
    );
}