import { useState } from 'react';
import styles from './BotaoVoltarTopo.module.css';

export default function BotaoVoltarTopo(){

    const [isVisible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled >= 180){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    window.addEventListener("scroll", toggleVisible);

    return(
        <button className={`${"m-0"} ${styles.botaoTopo} ${isVisible ? "d-block" : "d-none"}`} onClick={scrollToTop}>
            <i className={`${"fa-sharp fa-solid fa-arrow-up btn fc-branca p-0 m-0"} ${styles.iconeBotao}`}></i>
        </button>
    );
}