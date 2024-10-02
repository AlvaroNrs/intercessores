import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";
import Paragrafo from 'componentes/Paragrafo';

export default function Footer() {
    return (
        <footer className="text-center pt-2 pt-md-3 bgc-preto fc-creme">
            <Paragrafo>
            Desenvolvido por Álvaro Novais © - 2024
            </Paragrafo>
            <section className={`${"d-flex pt-2 pb-4 pb-xl-5 justify-content-around"} ${styles.areaIcones}`}>
                <Link to="/">
                    <i className="fa-brands fa-linkedin-in fc-creme"></i>
                </Link>
                <Link to="/">
                    <i className="fa-brands fa-instagram fc-creme"></i>
                </Link>
                <Link to="/">
                    <i className="fa-brands fa-github fc-creme"></i>
                </Link>
            </section>
        </footer>
    );
}