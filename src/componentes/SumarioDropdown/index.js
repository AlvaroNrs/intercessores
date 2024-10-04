import styles from './SumarioDropdown.module.css';
import { useEffect, useState } from 'react';

export default function SumarioDropdown() {
    const [aberto, setAberto] = useState(false);

    useEffect(() => {
        adjustSumary();
    }, []);

    const adjustSumary = () => {
        if(window.screen.width >= 1440){
            setAberto(true);
        }else {
            setAberto(false);
        }
    }

    const changeIcon = (evento) => {
        evento.preventDefault();
        setAberto(!aberto);
    }

    return (
        <>
            <section className={`${"dropdown"}`}>
                <button onClick={changeIcon} className={`${"btn"} ${styles.dropdonButton}`} type="button" aria-expanded="false">
                    <i className={`${"fc-creme"} ${styles.iconeDropdown} ${aberto === true ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}`}></i>
                </button>
                <section className={`${"pt-2"} ${aberto === true ? styles.listaSumario : "d-none"}`}>
                    <h3>Sumário</h3>
                    <section className={`${"fc-branca fs-5 ps-3 ps-md-4"} ${styles.secaoSumario}`}>
                        <ol className={styles.listaConteudoSumario}>
                            <li className="d-flex flex-column text-start pt-2 justify-content-start">
                                <a className={styles.tituloSumario} href="#pecas">1 - Peças</a>
                                <a className={`${"d-flex"} ${styles.tituloSumario}`} href="#cartasIntercessor">1.1 -<p className="ps-1 fc-marrom">Cartas de Intercessores</p></a>
                                <a className={`${"d-flex"} ${styles.tituloSumario}`} href="#cartasPecado">1.2 -<p className="ps-1 fc-marrom">Cartas de Pecados</p></a>
                            </li>
                        </ol>
                        <ol className={`${"pt-2 pe-2 flex-wrap"} ${styles.listaConteudoSumario}`}>
                            <li className="d-flex flex-wrap flex-column text-start pt-2 justify-content-start">
                                <a className={styles.tituloSumario} href="#preparacao">2 - Preparação para o Início do Jogo</a>
                            </li>
                        </ol>
                        <ol className={`${"pt-2"} ${styles.listaConteudoSumario}`}>
                            <li className="d-flex flex-column text-start pt-2 justify-content-start">
                                <a className={styles.tituloSumario} href="#rodadas">3 - Rodadas</a>
                                <a className={`${"d-flex"} ${styles.tituloSumario}`} href="#turnoJogador">3.1 -<p className="ps-1 fc-marrom">Turno de cada jogador</p></a>
                                <a className={`${"d-flex"} ${styles.tituloSumario}`} href="#turnoPecado">3.2 -<p className="ps-1 fc-marrom">Turno do Pecado</p></a>
                            </li>
                        </ol>
                        <ol className={`${"pt-2"} ${styles.listaConteudoSumario}`}>
                            <li className="d-flex flex-column text-start pt-2 justify-content-start">
                                <a className={styles.tituloSumario} href="#vitoriaDerrota">4 - Vitória e Derrota</a>
                                <a className={`${"d-flex"} ${styles.tituloSumario}`} href="#condicaoVitoria">4.1 -<p className="ps-1 fc-marrom">Condição de Vitória</p></a>
                                <a className={`${"d-flex"} ${styles.tituloSumario}`} href="#condicaoDerrota">4.2 -<p className="ps-1 fc-marrom">Condição de Derrota</p></a>
                            </li>
                        </ol>
                    </section>
                </section>
            </section>
        </>
    );
}