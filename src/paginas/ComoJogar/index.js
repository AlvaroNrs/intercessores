import Titulo from 'componentes/Titulo';
import styles from './ComoJogar.module.css';
import AreaConteudo from 'paginas/AreaConteudo';
import SumarioDropdown from 'componentes/SumarioDropdown';
import Paragrafo from 'componentes/Paragrafo';

export default function ComoJogar(){
    return (
        <section className='text-center'>
            <AreaConteudo paddingY={"py-3"} tamanhoFonte={"fs-4"} corFonte={"fc-marrom"} corFundo={"bgc-creme"}>
                <Titulo corFonte={"fc-marrom"}>Como Jogar</Titulo>
                <SumarioDropdown></SumarioDropdown>
            </AreaConteudo>
        </section>
    );
}