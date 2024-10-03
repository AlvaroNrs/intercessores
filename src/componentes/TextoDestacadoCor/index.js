import styles from './TextoDestacadoCor.module.css';

export default function TextoDestacadoCor({children, corFonte}){
    return(
        <>
            <strong className={`${styles.textoDestaque} ${corFonte}`}>
                {children}
            </strong>
        </>
    );
}