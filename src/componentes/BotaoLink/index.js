import styles from './BotaoLink.module.css';

export default function BotaoLink({corFonte, corFundo, tamanhoFonte, alinhamento, children, path}){
    return(
        <section className={`${"btn mb-3 px-3 py-2"} ${styles.btnInteracao} ${corFonte} ${corFundo}
        ${tamanhoFonte} ${alinhamento} ${styles.arredondamento}`} to={path}>
            {children}
        </section>
    );
}