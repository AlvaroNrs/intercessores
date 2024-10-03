import Titulo from 'componentes/Titulo';
import styles from './ComoJogar.module.css';
import AreaConteudo from 'paginas/AreaConteudo';
import SumarioDropdown from 'componentes/SumarioDropdown';
import ParagrafoGrande from 'componentes/ParagrafoGrande';
import TextoDestacadoCor from 'componentes/TextoDestacadoCor';

export default function ComoJogar() {
    return (
        <section className='text-center'>
            <AreaConteudo paddingY={"py-3"} tamanhoFonte={"fs-4"} corFonte={"fc-marrom"} corFundo={"bgc-creme"}>
                <Titulo corFonte={"fc-marrom"}>Como Jogar</Titulo>
                <SumarioDropdown></SumarioDropdown>
                <section className={`${"text-start"} ${styles.secaoConteudoGeral}`}>
                    <section className="py-2">
                        <h3 id="pecas">1 - Peças</h3>
                        <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-laranja"}>
                            Há 2 tipos de cartas em Intercessores:
                        </ParagrafoGrande>
                        <ul className="py-2 fc-laranja">
                            <li>
                                Cartas de Intercessores<TextoDestacadoCor corFonte={"fc-marrom"}>, cada uma representa um santo ou santa.</TextoDestacadoCor>
                            </li>
                            <li>
                                Cartas de Pecado<TextoDestacadoCor corFonte={"fc-marrom"}>, cada uma representando um pecado.</TextoDestacadoCor>
                            </li>
                        </ul>
                    </section>
                    <section className="py-2">
                        <h4 id="cartasIntercessor">1.2 - Cartas de Intercessores</h4>
                        <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-laranja"}>
                            Há 2 tipos de cartas em Intercessores:
                        </ParagrafoGrande>
                        <ul className="py-2 fc-laranja">
                            <li>
                                Cartas de Intercessores<TextoDestacadoCor corFonte={"fc-marrom"}>, cada uma representa um santo ou santa.</TextoDestacadoCor>
                            </li>
                            <li>
                                Cartas de Pecado<TextoDestacadoCor corFonte={"fc-marrom"}>, cada uma representando um pecado.</TextoDestacadoCor>
                            </li>
                        </ul>
                    </section>
                </section>
            </AreaConteudo>
        </section>
    );
}