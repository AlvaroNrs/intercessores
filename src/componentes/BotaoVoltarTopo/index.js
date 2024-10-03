import styles from './BotaoVoltarTopo.module.css';

export default function BotaoVoltarTopo(){
    return(
        <button className={`${"m-0"} ${styles.botaoTopo}`}>
            <i className={`${"fa-sharp fa-solid fa-arrow-up btn fc-branca p-0 m-0"} ${styles.iconeBotao}`}></i>
        </button>
    );
}