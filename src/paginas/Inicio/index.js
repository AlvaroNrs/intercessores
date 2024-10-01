import resumoVirtudes from 'assets/Resumo_Virtudes.png';
import styles from './Inicio.module.css';

export default function Inicio(){
    return(
        <section className="text-center">
            <section className='bgc-laranja pt-3'>
            <h2 className="text-center fc-creme">Sobre o Jogo</h2>
            <img src={resumoVirtudes} className={styles.simbolosVirtudes} aria-hidden={true}/>
            <div className="container py-3 px-5 fs-3 fc-creme">
                <p className="pb-3">
                Intercessores é um jogo de cartas cooperativo baseado nas Virtudes Cardeais, anjos e Santos Católicos</p>
                <p className="pb-3">
                Os jogadores devem se unir rezando aos anjos e aos santos para superar os diferentes pecados que ameaçam todo o grupo
                </p>
            </div>
            </section>
            <section className="bgc-creme pt-3 pb-4 fs-3">
                <div className="container">
                    <p className="fc-laranja pb-3">
                    Junte-se aos seus amigos e divirtam-se rezando e aprendendo!
                    </p>
                    <button className="btn fc-creme bgc-marrom fs-3 styles.botaoJogar align-middle">Aprenda a jogar</button>
                </div>
            </section>
        </section>
    );
}