import Titulo from 'componentes/Titulo';
import styles from './ComoJogar.module.css';
import AreaConteudo from 'paginas/AreaConteudo';
import SumarioDropdown from 'componentes/SumarioDropdown';
import ParagrafoGrande from 'componentes/ParagrafoGrande';
import Paragrafo from 'componentes/Paragrafo';
import TextoDestacadoCor from 'componentes/TextoDestacadoCor';
import BotaoVoltarTopo from 'componentes/BotaoVoltarTopo';
import explicIntercessor from 'assets/Explicacao_Intercessor2.png';
import explicPecado from 'assets/Explicacao_Pecado2.png';
import explicPecado2 from 'assets/Explicacao_Pecado3.png';
import justica from 'assets/Justiça.png';
import fortaleza from 'assets/Fortaleza.png';
import prudencia from 'assets/Prudência.png';
import temperanca from 'assets/Temperânça.png';
import explicacaoRodada from 'assets/Resumo da Rodada2.png';
import explicacaoRodada2 from 'assets/Resumo da Rodada.png';

export default function ComoJogar() {
    return (
        <section className='text-center'>
            <AreaConteudo paddingY={"py-3"} tamanhoFonte={"fs-4"} corFonte={"fc-marrom"} corFundo={"bgc-creme"}>
                <Titulo corFonte={"fc-marrom"}>Como Jogar</Titulo>
                <SumarioDropdown></SumarioDropdown>
                <BotaoVoltarTopo></BotaoVoltarTopo>
                <section className={`${"text-start"} ${styles.secaoConteudoGeral}`}>
                    <section className="py-1">
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
                        <section className="py-1 d-flex flex-column">
                            <h4 id="cartasIntercessor">1.1 - Cartas de Intercessores</h4>
                            <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-laranja"}>
                                Cada Carta  de Intercessor tem:
                            </ParagrafoGrande>
                            <img className={`${"py-2 align-self-center"} ${styles.imagemManual}`} src={explicIntercessor} alt={"Carta de Intercessor com detalhes explicativos"} />
                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                1 - Nome do Intercessor –<TextoDestacadoCor corFonte={"fc-marrom"}> O nome próprio do Santo, Santa ou Anjo.</TextoDestacadoCor>
                            </Paragrafo>
                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                2 - Força de Intercessão –<TextoDestacadoCor corFonte={"fc-marrom"}> O atributo usado no combate às cartas de Pecados.</TextoDestacadoCor>
                            </Paragrafo>
                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                3 - Virtudes do Intercessor –<TextoDestacadoCor corFonte={"fc-marrom"}> Cada carta possui um ou dois desses símbolos. Cada símbolo representa uma das Virtudes Cardeais.</TextoDestacadoCor>
                            </Paragrafo>
                        </section>
                        <section className="py-1 d-flex flex-column">
                            <h4 id="cartasPecado">1.2 - Cartas de Pecados</h4>
                            <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-laranja"}>
                                Cada Carta  de Pecado tem em sua frente:
                            </ParagrafoGrande>
                            <img className={`${"py-2 align-self-center"} ${styles.imagemManual}`} src={explicPecado} alt={"Frente da Carta de Pecado"} />
                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                1 - Nome do Pecado –<TextoDestacadoCor corFonte={"fc-marrom"}> O nome próprio do pecado.</TextoDestacadoCor>
                            </Paragrafo>
                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                2 - Dificuldade –<TextoDestacadoCor corFonte={"fc-marrom"}> atributo que combate as cartas de Intercessores.</TextoDestacadoCor>
                            </Paragrafo>
                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                3 -  Virtude correspondente à Fraqueza –<TextoDestacadoCor corFonte={"fc-marrom"}> O símbolo da Virtude Cardeal que é a fraqueza desse Pecado.</TextoDestacadoCor>
                            </Paragrafo>
                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                4 - Penalidade –<TextoDestacadoCor corFonte={"fc-marrom"}> A explicação da penalidade que os jogadores recebem na vez do Pecado.</TextoDestacadoCor>
                            </Paragrafo>
                            <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-marrom"}>
                                Já no seu verso, cada carta de Pecado possui um número, representando seu Nível:
                            </ParagrafoGrande>
                            <img className={`${"py-2 align-self-center"} ${styles.imagemManual}`} src={explicPecado2} alt={"Verso Carta de Pecado"} />
                        </section>
                    </section>
                    <section className="py-1">
                        <h3 id="preparacao">2 - Preparação para Início do Jogo</h3>
                        <ul className="py-2 fc-marrom d-flex flex-column row-gap-5">
                            <li>
                                As <TextoDestacadoCor corFonte={"fc-laranja"}>Cartas de Intercessores</TextoDestacadoCor> são embaralhadas e o monte delas é colocado próximo dos jogadores virado para baixo.
                            </li>
                            <li>
                                As <TextoDestacadoCor corFonte={"fc-laranja"}>Cartas de Pecados</TextoDestacadoCor> são separadas em três montes, de acordo com o Nível presente no verso da carta.<TextoDestacadoCor corFonte={"fc-laranja"}> Cada monte é embaralhado separadamente.</TextoDestacadoCor>
                            </li>
                            <li>
                                Por fim, os montes de <TextoDestacadoCor corFonte={"fc-laranja"}>Cartas de Pecados</TextoDestacadoCor> são colocados um sobre o outro, em ordem crescente de cima para baixo (o monte de Nível 3 fica embaixo, o de Nível 2 sobre ele e depois o de Nível 1. As cartas ficam com a face voltada para baixo)*.
                                <Paragrafo fonte={"fs-5"}>*Caso o jogo seja jogado por apenas 2 jogadores, somente os montes de Nível 1 e 2 são utilizados, com o de Nível 1 ficando sobre o de Nível 2.</Paragrafo>
                            </li>
                        </ul>
                        <Paragrafo>
                            Segue-se depois para o início da primeira rodada.
                        </Paragrafo>
                    </section>
                    <section className="py-1">
                        <h3 id="rodadas">3 - Rodadas</h3>
                        <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-marrom"}>
                            A carta do topo do monte de cartas de Pecado é virada para cima. Esse é o Pecado que os jogadores enfrentarão nesta rodada.
                        </ParagrafoGrande>
                        <ParagrafoGrande paddingTY={"py-3"} tamanhoFonte={"fs-4"} corFonte={"fc-marrom"}>
                            Cada jogador compra cartas do monte de cartas de Intercessores até chegar ao limite máximo de cartas na mão. O limite de cartas na mão varia de acordo com o número de jogadores, segundo a tabela:
                        </ParagrafoGrande>
                        <div className="d-grid row text-center container">
                            <table className={`${"table-bordered col-12"} ${styles.tabelaJogadores}`}>
                                <thead className="bgc-laranja fc-branca">
                                    <tr>
                                        <th scope="col">Número de Jogadores</th>
                                        <th scope="col">Limite de Cartas na mão</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle bgc-branca fc-preto">
                                    <tr>
                                        <th scope="row">Entre 2 e 3</th>
                                        <th>5</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">Entre 4 e 5</th>
                                        <th>4</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <ParagrafoGrande paddingTY={"py-3"} tamanhoFonte={"fs-4"} corFonte={"fc-marrom"}>
                            Após isso, é a vez do primeiro jogador.
                        </ParagrafoGrande>
                        <section className="py-1 d-flex flex-column">
                            <h4 id="turnoJogador">3.1 - Turno de cada Jogador</h4>
                            <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-marrom"}>
                                Na vez de cada jogador, ele pode fazer uma das seguintes ações:
                            </ParagrafoGrande>
                            <ul className="py-2 fc-marrom d-flex flex-column row-gap-4">
                                <li>
                                    Colocar uma <TextoDestacadoCor corFonte={"fc-laranja"}>Carta de Intercessor</TextoDestacadoCor> da mão em jogo. Essa carta é então considerada um <TextoDestacadoCor corFonte={"fc-laranja"}>Intercessor</TextoDestacadoCor> de quem a jogou. Não há limite para o número de Intercessores que um jogador pode ter ao mesmo tempo.
                                    <ul className="fs-5">
                                        <li>Caso um jogador tenha mais de um Intercessor, ele forma um monte das Cartas de seus Intercessores, deixando sempre o último Intercessor no topo do monte.</li>
                                    </ul>
                                </li>
                                <li>
                                    Descartar uma carta da mão para rezar a um <TextoDestacadoCor corFonte={"fc-laranja"}>Intercessor</TextoDestacadoCor> de algum jogador (a carta descartada vai para o monte de descarte com a face voltada para cima).
                                    <Paragrafo>Se um jogador tiver mais de um Intercessor em jogo, só é possível rezar ao último Intercessor daquele jogador (o Intercessor do topo do monte dele).</Paragrafo>
                                    <Paragrafo>Rezar a um Intercessor faz um efeito diferente de acordo com os Símbolos de Virtude do Intercessor, de acordo com a tabela abaixo. (Se a carta de Intercessor tiver dois símbolos de Virtude, o jogador do turno escolhe um dos efeitos).</Paragrafo>
                                    <section className="d-flex flex-column gap-3 fs-5 fc-marrom">
                                        <section className="d-flex flex-row gap-2 align-items-center text-left">
                                            <img className={styles.iconesVirtudes} src={justica} alt="Símbolo de Justiça" />
                                            <p className="py-0"><TextoDestacadoCor corFonte={"fc-laranja"}>Justiça </TextoDestacadoCor> - Os outros jogadores compram uma carta*</p>
                                        </section>
                                        <section className="d-flex flex-row gap-2 align-items-center text-left">
                                            <img className={styles.iconesVirtudes} src={fortaleza} alt="Símbolo de Fortaleza" />
                                            <p className="py-0"><TextoDestacadoCor corFonte={"fc-laranja"}>Fortaleza </TextoDestacadoCor> - O jogador do turno compra duas cartas*</p>
                                        </section>
                                        <section className="d-flex flex-row gap-2 align-items-center text-left">
                                            <img className={styles.iconesVirtudes} src={prudencia} alt="Símbolo de Prudência" />
                                            <p className="py-0"><TextoDestacadoCor corFonte={"fc-laranja"}>Prudência </TextoDestacadoCor> - Você coloca uma carta de
                                                Intercessor da mão em jogo e compra uma carta</p>
                                        </section>
                                        <section className="d-flex flex-row gap-2 align-items-center text-left">
                                            <img className={styles.iconesVirtudes} src={temperanca} alt="Símbolo de Temperança" />
                                            <p className="py-0"><TextoDestacadoCor corFonte={"fc-laranja"}>Temperança </TextoDestacadoCor> - Você escolhe um jogador
                                                para ignorar a Penalidade do
                                                Pecado neste turno</p>
                                        </section>
                                    </section>
                                </li>
                                <li>
                                    Descartar uma carta para interceder por outro jogador à escolha. O jogador escolhido compra duas cartas*.
                                </li>
                                <li>
                                    Pular sua vez.
                                </li>
                            </ul>
                            <p className="py-0 fs-5">*Os jogadores não podem comprar cartas além do limite máximo.</p>
                            <Paragrafo className="text-start" fonte={"fc-marrom"}>
                                Após o primeiro jogador fazer a ação de seu turno, é a vez do próximo jogador, até o último. Depois da vez do último jogador, é a vez da <TextoDestacadoCor corFonte={"fc-laranja"}>Carta de  Pecado</TextoDestacadoCor>.
                            </Paragrafo>
                        </section>
                        <section className="py-1 d-flex flex-column">
                            <h4 id="turnoPecado">3.2 - Turno do Pecado</h4>
                            <Paragrafo className="text-start" fonte={"fc-marrom"}>
                                Os jogadores recebem uma <TextoDestacadoCor corFonte={"fc-laranja"}>Penalidade</TextoDestacadoCor>, de acordo com o Pecado que os jogadores estão enfrentando no momento. (A penalidade é explicada no campo Penalidade da carta).
                            </Paragrafo>
                            <Paragrafo className="text-start" fonte={"fc-marrom"}>
                                Após a <TextoDestacadoCor corFonte={"fc-laranja"}>Penalidade</TextoDestacadoCor>, são comparados dois valores:
                            </Paragrafo>
                            <ul className="py-2 fc-marrom">
                                <li>
                                    O valor da <TextoDestacadoCor corFonte={"fc-laranja"}>Dificuldade</TextoDestacadoCor> da <TextoDestacadoCor corFonte={"fc-laranja"}>Dificuldade</TextoDestacadoCor> da <TextoDestacadoCor corFonte={"fc-laranja"}>Carta de Pecado </TextoDestacadoCor> da rodada atual.
                                </li>
                                <li>
                                    A soma da <TextoDestacadoCor corFonte={"fc-laranja"}>Força de Intercessão</TextoDestacadoCor> de todas as cartas de <TextoDestacadoCor corFonte={"fc-laranja"}>Intercessores</TextoDestacadoCor> em jogo.
                                </li>
                            </ul>
                            <Paragrafo className="text-start" fonte={"fc-marrom"}>
                                Caso uma <TextoDestacadoCor corFonte={"fc-laranja"}>Carta de Intercessor</TextoDestacadoCor> tenha um <TextoDestacadoCor corFonte={"fc-laranja"}>Símbolo de Virtude</TextoDestacadoCor> correspondente à <TextoDestacadoCor corFonte={"fc-laranja"}>Fraqueza da Carta de Pecado</TextoDestacadoCor>, a
                                <TextoDestacadoCor corFonte={"fc-laranja"}>Força de Intercessão</TextoDestacadoCor> dessa carta é contada com um bônus de +2.
                            </Paragrafo>
                            <Paragrafo className="text-start" fonte={"fc-marrom"}>
                                Por exemplo, uma carta com <TextoDestacadoCor corFonte={"fc-laranja"}>Força de Intercessão</TextoDestacadoCor>  5 é contada como tendo <TextoDestacadoCor corFonte={"fc-laranja"}>Força de Intercessão 7</TextoDestacadoCor>.
                            </Paragrafo>
                            <Paragrafo className="text-start" fonte={"fc-marrom"}>
                                Se a soma da <TextoDestacadoCor corFonte={"fc-laranja"}>Força de Intercessão</TextoDestacadoCor> for igual ou superior ao da <TextoDestacadoCor corFonte={"fc-laranja"}>Dificuldade do Pecado</TextoDestacadoCor>, os jogadores vencem a rodada:
                            </Paragrafo>
                            <ul className="py-2 fc-marrom">
                                <li>
                                    A <TextoDestacadoCor corFonte={"fc-laranja"}>Carta de Pecado</TextoDestacadoCor> é colocada num monte à parte (apenas de Pecados derrotados) e as <TextoDestacadoCor corFonte={"fc-laranja"}>Cartas de Intercessores</TextoDestacadoCor> em jogo são colocadas no monte de descarte.
                                </li>
                                <li>
                                    Depois, o monte de descarte é colocado no fundo do monte de cartas de Intercessores e uma nova rodada se inicia.
                                </li>
                            </ul>
                            <Paragrafo className="text-start" fonte={"fc-marrom"}>
                                Porém, se a soma da <TextoDestacadoCor corFonte={"fc-laranja"}>Força de Intercessão</TextoDestacadoCor> for menor que o da <TextoDestacadoCor corFonte={"fc-laranja"}>Dificuldade do Pecado</TextoDestacadoCor>, a rodada continua. É a vez do primeiro jogador novamente.
                            </Paragrafo>
                            <img className={`${"py-2 align-self-center"} ${styles.resumoRodada}`} src={explicacaoRodada} alt={"Frente da Carta de Pecado"} />
                        </section>
                    </section>
                    <section className="py-4">
                        <h3 id="vitoriaDerrota">4 - Vitória e Derrota</h3>
                        <section className="py-1 d-flex flex-column">
                            <section className="py-3">
                                <h4 id="condicaoVitoria">4.1 - Condição de Vitória</h4>
                                <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-marrom"}>
                                    Os jogadores vencem o jogo depois de derrotarem o último Pecado do monte de cartas de Pecado.
                                </ParagrafoGrande>
                            </section>
                            <section className="py-3">
                                <h4 id="condicaoDerrota">4.2 - Condição de Derrota</h4>
                                <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-marrom"}>
                                    Todos os jogadores perdem o jogo quando uma das duas situações ocorre:
                                </ParagrafoGrande>
                                <ul className="py-3 fc-marrom">
                                    <li>
                                        Quando algum jogador ficar sem cartas na mão
                                    </li>
                                    <li>
                                        Quando um jogador compraria cartas, mas o monte de Cartas de Intercessores estiver vazio.
                                    </li>
                                </ul>
                            </section>
                        </section>
                    </section>
                </section>
            </AreaConteudo>
        </section>
    );
}