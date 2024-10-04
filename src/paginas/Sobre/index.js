import AreaConteudo from 'paginas/AreaConteudo';
import Paragrafo from 'componentes/Paragrafo';
import imgCriador from 'assets/Ult_Yo_26_06_2022.png';
import styles from './Sobre.module.css';
import BotaoLink from 'componentes/BotaoLink';

export default function Sobre() {
    return (
        <section className={"text-center"}>
            <AreaConteudo paddingY={"py-3"} tamanhoFonte={"fs-4"} corFonte={"fc-laranja"} corFundo={"bgc-creme"}>
                <h2 className={"fc-marrom pb-3"}>Sobre o criador do jogo</h2>
                <img className={styles.fotoCriador} src={imgCriador} alt="Foto do Álvaro em cima de um telhado tocando violino"></img>
                <section className="text-start">
                    <Paragrafo fonte={"fc-marrom"}>
                        Olá! Meu nome é Álvaro Novais. Formado em Design de Games pela Belas Artes em São Paulo e estudante de Análise e Desenvolvimento de Sistemas na FIAP.
                    </Paragrafo>
                    <Paragrafo fonte={"fc-marrom"}>
                        Também sou catequista e cerimoniario na Paróquia São Francisco de Assis, em Carapicuíba -SP.
                    </Paragrafo>
                </section>
                <section className="d-flex flex-column py-3">
                    <a href="https://www.linkedin.com/in/alvaronrsilva" target="_blank" rel="noreferrer">
                        <BotaoLink className={"d-flex"} corFundo={"bgc-creme"} corFonte={"fc-marrom"} tamanhoFonte={"fs-4"}
                            alinhamento={"align-middle"}><i className={"fa-brands fa-linkedin pe-2"}></i>LinkedIn</BotaoLink>
                    </a>
                    <a href="https://www.instagram.com/alvaronr.silva/" target="_blank" rel="noreferrer">
                        <BotaoLink className={"d-flex"} corFundo={"bgc-creme"} corFonte={"fc-marrom"} tamanhoFonte={"fs-4"}
                            alinhamento={"align-middle"}><i className={"fa-brands fa-instagram pe-2"}></i>Instagram</BotaoLink>
                    </a>
                </section>
            </AreaConteudo>
        </section>
    );
}