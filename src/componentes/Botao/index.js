import styles from './Botao.module.css';

export default function Botao({corFonte, corFundo, tamanhoFonte, alinhamento, children}){
    return(
        <button className={`${"btn"} ${"mb-3"} ${styles.btnInteracao} ${corFonte} ${corFundo}
        ${tamanhoFonte} ${alinhamento} ${styles.arredondamento}`}>
            {children}
        </button>
    );
}