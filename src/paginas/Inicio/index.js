import resumoVirtudes from 'assets/Resumo_Virtudes.png';
import styles from './Inicio.module.css';
import Paragrafo from 'componentes/Paragrafo';
import Botao from 'componentes/Botao';
import { Link } from 'react-router-dom';

export default function Inicio(){
    return(
        <section className="text-center">
            <section className='bgc-laranja pt-3'>
                <h2 className="text-center fc-creme">Sobre o Jogo</h2>
                <img src={resumoVirtudes} className={styles.simbolosVirtudes} aria-hidden={true} alt="Círculo de Símbolos das Virtudes Cardeais do Jogo"/>
                <div className="container py-3 px-5 fs-3 fc-creme">
                    <Paragrafo texto={"Intercessores é um jogo de cartas cooperativo baseado nas Virtudes Cardeais, anjos e Santos Católicos"}>
                    </Paragrafo>
                    <Paragrafo texto={"Os jogadores devem se unir rezando aos anjos e aos santos para superar os diferentes pecados que ameaçam todo o grupo"}>
                    </Paragrafo>
                </div>
            </section>
            <section className="bgc-creme pt-3 pb-4 fs-3">
                <div className="container">
                    <Paragrafo fonte={"fc-laranja"} texto={"Junte-se aos seus amigos e divirtam-se rezando e aprendendo!"}>
                    </Paragrafo>
                    <Link to="/comoJogar">
                        <Botao texto={"Aprenda a jogar"} corFundo={"bgc-creme"} corFonte={"fc-marrom"} tamanhoFonte={"fs-3"}
                        alinhamento={"align-middle"} arredondamento={styles.botaoJogar}></Botao>
                    </Link>
                </div>
            </section>
        </section>
    );
}