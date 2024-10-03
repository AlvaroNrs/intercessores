import styles from './SumarioDropdown.module.css';
import { useState } from 'react';

export default function SumarioDropdown() {
    const [aberto, setAberto] = useState(false);

    const changeIcon = (evento) => {
        evento.preventDefault();
        setAberto(!aberto);
    }

    return (
        <>
            <section className={`${"dropdown"} ${"d-xl-none"}`}>
                <button onClick={changeIcon} className={`${"btn"} ${styles.dropdonButton}`} type="button" aria-expanded="false">
                    <i className={`${"fc-creme"} ${styles.iconeDropdown} ${aberto === true ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}`}></i>
                </button>
                <section className={`${"bgc-laranja fc-branca pt-2"} ${aberto === true ? styles.listaSumario : "d-none"}`}>
                    <h3>Sumário</h3>
                    <section className={`${"fc-branca fs-5 ps-3 ps-md-4"} ${styles.secaoSumario}`}>
                        <ol className={styles.listaConteudoSumario}>
                            <li className="d-flex flex-column text-start pt-2 justify-content-start">
                                <a className="fc-branca" href="#pecas">1 - Peças</a>
                                <a className="fc-branca d-flex" href="#cartasIntercessor">1.1 -<p className="ps-1 fc-marrom">Cartas de Intercessores</p></a>
                                <a className="fc-branca d-flex" href="#">1.2 -<p className="ps-1 fc-marrom">Cartas de Pecados</p></a>
                            </li>
                        </ol>
                        <ol className={`${"pt-2 pe-2 flex-wrap"} ${styles.listaConteudoSumario}`}>
                            <li className="d-flex flex-wrap flex-column text-start pt-2 justify-content-start">
                                2 - Preparação para o Início do Jogo
                            </li>
                        </ol>
                        <ol className={`${"pt-2"} ${styles.listaConteudoSumario}`}>
                            <li className="d-flex flex-column text-start pt-2 justify-content-start">
                                3 - Rodadas
                                <a className="fc-branca d-flex" href="#">3.1 -<p className="ps-1 fc-marrom">Turno de cada jogador</p></a>
                                <a className="fc-branca d-flex" href="#">3.2 -<p className="ps-1 fc-marrom">Turno do Pecado</p></a>
                            </li>
                        </ol>
                        <ol className={`${"pt-2"} ${styles.listaConteudoSumario}`}>
                            <li className="d-flex flex-column text-start pt-2 justify-content-start">
                                4 - Vitória e Derrota
                                <a className="fc-branca d-flex" href="#">4.1 -<p className="ps-1 fc-marrom">Condição de Vitória</p></a>
                                <a className="fc-branca d-flex" href="#">4.2 -<p className="ps-1 fc-marrom">Condição de Derrota</p></a>
                            </li>
                        </ol>
                    </section>
                </section>
            </section>
        </>
    );
}