import styles from './SumarioDropdown.module.css';
import { useState } from 'react';

export default function SumarioDropdown() {
    const [aberto, setAberto] = useState(false);

    const changeIcon = (evento) => {
        evento.preventDefault();
        setAberto(!aberto);
    }

    return (
        <>
            <section className={"dropdown"}>
                <button onClick={changeIcon} className={`${"btn"} ${styles.dropdonButton}`} type="button" aria-expanded="false">
                    <i className={`${"fc-creme"} ${styles.iconeDropdown} ${aberto === true ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}`}></i>
                </button>
                <section className={`${"bgc-laranja fc-creme"} ${aberto === true ? styles.listaSumario : "d-none"}`}>
                    <h3>Sumário</h3>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </section>
            </section>
        </>
    );
}