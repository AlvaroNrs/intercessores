import styles from './AreaConteudo.module.css';

export default function AreaConteudo(props){
    return(
        <section className={`${styles.area} ${props.paddingY} ${props.paddingX} ${props.tamanhoFonte} 
        ${props.corFonte} ${props.corFundo} ${props.sizeY}`}>
            {props.children}
        </section>
    );
}