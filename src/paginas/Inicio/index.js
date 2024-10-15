import resumoVirtudes from 'assets/Manual/Resumo_Virtudes.png';
import styles from './Inicio.module.css';
import Paragrafo from 'componentes/Paragrafo';
import Botao from 'componentes/Botao';
import { Link } from 'react-router-dom';
import AreaConteudo from 'paginas/AreaConteudo';
import Titulo from 'componentes/Titulo';

export default function Inicio() {
    return (
        <section className="text-center">
            <AreaConteudo paddingY={"py-3"} tamanhoFonte={"fs-4"} corFonte={"fc-creme"} corFundo={"bgc-laranja"}>
                <Titulo corFonte={"fc-creme"}>Sobre o Jogo</Titulo>
                <img src={resumoVirtudes} className={styles.simbolosVirtudes} aria-hidden={true} alt="Círculo de Símbolos das Virtudes Cardeais do Jogo" />
                <Paragrafo>
                    Intercessores é um jogo de cartas cooperativo baseado nas Virtudes Cardeais e Santos Católicos
                </Paragrafo>
                <Paragrafo>
                    Os jogadores devem se unir rezando aos anjos e aos santos para superar os diferentes pecados que ameaçam todo o grupo
                </Paragrafo>
            </AreaConteudo>
            <AreaConteudo paddingY={"py-3"} tamanhoFonte={"fs-4"} corFonte={"fc-laranja"} corFundo={"bgc-creme"}>
                <Paragrafo>
                    Junte-se aos seus amigos e divirtam-se rezando e aprendendo!
                </Paragrafo>
                <Link to="/comoJogar">
                    <Botao corFundo={"bgc-creme"} corFonte={"fc-marrom"} tamanhoFonte={"fs-3"}
                        alinhamento={"align-middle"} arredondamento={styles.botaoJogar} texto={"Aprenda a jogar"}>Como jogar</Botao>
                </Link>
            </AreaConteudo>
        </section>
    );
}