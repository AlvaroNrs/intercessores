import styles from "./ConjuntoCartas.module.css";

export default function CartaUnica({ dados = [] }) {
    return (
        <section className="justify-content-center my-3 mx-2 mx-sm-0 container-flex column-gap-3 row row-gap-3">
            {dados.map(carta =>
                <img className={`${styles.cartaImg} ${"col-12 col-md-5 col-xl-2 align-items-center"}`} src={carta.caminho} alt={carta.nome} />
            )}
        </section>

    );
}