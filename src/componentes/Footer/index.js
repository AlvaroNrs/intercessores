import styles from "./Footer.module.css";
import Paragrafo from 'componentes/Paragrafo';

export default function Footer() {
    return (
        <footer className="text-center pt-2 pt-md-3 bgc-preto fc-creme">
            <Paragrafo>
                Desenvolvido por Álvaro Novais © - 2024
            </Paragrafo>
            <section className={`${"d-flex pt-2 pb-4 pb-xl-5 justify-content-around"} ${styles.areaIcones}`}>
                <a href="https://www.linkedin.com/in/alvaronrsilva" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin-in fc-creme"></i>
                </a>
                <a href="https://www.instagram.com/alvaronr.silva/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-instagram fc-creme"></i>
                </a>
                <a href="https://github.com/AlvaroNrs" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github fc-creme"></i>
                </a>
            </section>
        </footer>
    );
}