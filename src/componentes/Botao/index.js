import styles from './Botao.module.css';

export default function Botao(props){
    return(
        <button className={`${"btn"} ${"mb-3"} ${styles.btnInteracao} ${props.corFonte} ${props.corFundo}
        ${props.tamanhoFonte} ${props.alinhamento} ${props.arredondamento}`}>
            {props.texto}
        </button>
    );
}