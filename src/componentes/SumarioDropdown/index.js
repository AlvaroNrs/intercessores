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
            <div className={`${"dropdown"} ${styles.dropdonButton}`}>
                <button onClick={changeIcon} className={`${"btn"} ${styles.iconeDropdown}`} type="button" aria-expanded="false">
                    <i className={`${"fc-creme"} ${styles.iconeDropdown} ${aberto === true ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}`}></i>
                </button>
                <ul className={aberto === true ? styles.listaSumario : "d-none"}>
                    <section className={`${"bgc-laranja fc-creme"}`}>
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </section>
                </ul>
            </div>
        </>
    );
}