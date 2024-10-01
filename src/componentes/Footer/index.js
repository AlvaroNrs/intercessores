import { Link } from 'react-router-dom';
import "./Footer.module.css";

export default function Footer(){
    return(
        <footer className="text-center pt-2 bgc-preto fc-creme">
            <p className="pb-2">Desenvolvido por Álvaro Novais © - 2024</p>
            <section className="d-flex pt-2 px-4 pb-4 justify-content-around">
                <Link to="/">
                    <i class="fa-brands fa-linkedin-in fc-creme"></i>
                </Link>
                <Link to="/">
                    <i class="fa-brands fa-instagram fc-creme"></i>
                </Link>
                <Link to="/">
                    <i class="fa-brands fa-github fc-creme"></i>
                </Link>
            </section>
        </footer>
    );
}