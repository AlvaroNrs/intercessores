import Titulo from 'componentes/Titulo';
import styles from './ComoJogar.module.css';
import AreaConteudo from 'paginas/AreaConteudo';
import SumarioDropdown from 'componentes/SumarioDropdown';
import ParagrafoGrande from 'componentes/ParagrafoGrande';
import Paragrafo from 'componentes/Paragrafo';
import TextoDestacadoCor from 'componentes/TextoDestacadoCor';
import BotaoVoltarTopo from 'componentes/BotaoVoltarTopo';
import explicIntercessor from 'assets/Manual/Explicacao_Intercessor2.png';
import explicPecado from 'assets/Manual/Explicacao_Pecado2.png';
import explicPecado2 from 'assets/Manual/Explicacao_Pecado3.png';
import explicVirtTelo from 'assets/Manual/Explicacao_Virtude_Teologal.png';
import justica from 'assets/Manual/Justiça.png';
import fortaleza from 'assets/Manual/Fortaleza.png';
import prudencia from 'assets/Manual/Prudência.png';
import temperanca from 'assets/Manual/Temperânça.png';
import explicacaoRodada from 'assets/Manual/Resumo da Rodada2.png';
import explicacaoRodada2 from 'assets/Manual/Resumo da Rodada.png';
import exemploSanta from 'assets/Manual/Santa Catarina de Sena.png';
import exemploPecado from 'assets/Manual/Comer e Beber Gulosamente.png';
import baseCartasVirtudesTeologais from "../../virtueCards.json";

export default function ComoJogar() {
    return (
        <section className='text-center'>
            <AreaConteudo paddingY={"py-3"} tamanhoFonte={"fs-4"} corFonte={"fc-marrom"} corFundo={"bgc-creme"}>
                <section className={styles.conteudoPagina}>
                    <SumarioDropdown></SumarioDropdown>
                    <section>
                        <Titulo corFonte={"fc-marrom"}>Como Jogar</Titulo>
                        <BotaoVoltarTopo></BotaoVoltarTopo>
                        <section className={"text-start"}>
                            <section className={styles.divisaoLarge}>
                                <div className={styles.separador}></div>
                                <section>
                                    <section className="py-1">
                                        <h3 id="introEpecas">1 - Introdução e Peças</h3>
                                        <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"cd-preta"}>
                                            Intercessores é um jogo de cartas cooperativo baseado nas Virtudes Cardeais e Teologais, bem como nos santos da Santa Igreja Católica.
                                        </ParagrafoGrande>
                                        <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-laranja"}>
                                            Há 3 tipos de cartas no jogo:
                                        </ParagrafoGrande>
                                        <ul className="py-2 fc-laranja">
                                            <li>
                                                Cartas de Intercessores<TextoDestacadoCor corFonte={"fc-marrom"}> - as cartas usadas pelos jogadores para vencer os pecados.</TextoDestacadoCor>
                                            </li>
                                            <li>
                                                Cartas de Pecado<TextoDestacadoCor corFonte={"fc-marrom"}> – os oponentes dos jogadores. Neste jogo, os jogadores se ajudam para combater essas cartas.</TextoDestacadoCor>
                                            </li>
                                            <li>
                                                Cartas de Virtudes Teologais<TextoDestacadoCor corFonte={"fc-marrom"}> – Símbolos dos quais cada símbolo representa uma das 4 Virtudes Cardeais, segundo a tabela:</TextoDestacadoCor>
                                            </li>
                                        </ul>
                                        <section className="py-1 d-flex flex-column">
                                            <h4 id="cartasSanto">1.1 - Cartas de Intercessores</h4>
                                            <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-laranja"}>
                                                Cada Carta  de Intercessor tem:
                                            </ParagrafoGrande>
                                            <img className={`${"py-2 align-self-center"} ${styles.imagemManual}`} src={explicIntercessor} alt={"Carta de Intercessor com detalhes explicativos"} />
                                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                                1 - Nome do Intercessor –<TextoDestacadoCor corFonte={"fc-marrom"}> O nome do Santo ou Santa.</TextoDestacadoCor>
                                            </Paragrafo>
                                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                                2 - Virtude do Intercessor –<TextoDestacadoCor corFonte={"fc-marrom"}> Um Símbolos que representa uma das 4 Virtudes Cardeais:</TextoDestacadoCor>
                                                <section className="d-flex flex-column flex-xxl-row  gap-3 fs-5 fc-marrom">
                                                    <section className="d-flex flex-row gap-2 align-items-center text-left">
                                                        <img className={styles.iconesVirtudes} src={justica} alt="Símbolo de Justiça" />
                                                        <p className="py-0"><TextoDestacadoCor corFonte={"fc-laranja"}>Justiça </TextoDestacadoCor></p>
                                                    </section>
                                                    <section className="d-flex flex-row gap-2 align-items-center text-left">
                                                        <img className={styles.iconesVirtudes} src={fortaleza} alt="Símbolo de Fortaleza" />
                                                        <p className="py-0"><TextoDestacadoCor corFonte={"fc-laranja"}>Fortaleza </TextoDestacadoCor></p>
                                                    </section>
                                                    <section className="d-flex flex-row gap-2 align-items-center text-left">
                                                        <img className={styles.iconesVirtudes} src={prudencia} alt="Símbolo de Prudência" />
                                                        <p className="py-0"><TextoDestacadoCor corFonte={"fc-laranja"}>Prudência </TextoDestacadoCor></p>
                                                    </section>
                                                    <section className="d-flex flex-row gap-2 align-items-center text-left">
                                                        <img className={styles.iconesVirtudes} src={temperanca} alt="Símbolo de Temperança" />
                                                        <p className="py-0"><TextoDestacadoCor corFonte={"fc-laranja"}>Temperança </TextoDestacadoCor></p>
                                                    </section>
                                                </section>
                                            </Paragrafo>
                                        </section>
                                        <section className="py-1 d-flex flex-column">
                                            <h4 id="cartasPecado">1.2 - Cartas de Pecados</h4>
                                            <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-laranja"}>
                                                Cada Carta  de Pecado tem em sua frente:
                                            </ParagrafoGrande>
                                            <img className={`${"py-2 align-self-center"} ${styles.imagemManual}`} src={explicPecado} alt={"Frente da Carta de Pecado"} />
                                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                                1 - Nome do Pecado –<TextoDestacadoCor corFonte={"fc-marrom"}> O nome do pecado.</TextoDestacadoCor>
                                            </Paragrafo>
                                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                                2 - Dificuldade –<TextoDestacadoCor corFonte={"fc-marrom"}> Número que combate os Pontos de Intercessão do grupo.</TextoDestacadoCor>
                                            </Paragrafo>
                                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                                3 -  Fraqueza –<TextoDestacadoCor corFonte={"fc-marrom"}> A Virtude Cardeal que é a fraqueza desse Pecado. Cartas de Intercessores com essa Virtude ficam mais fortes contra esse pecado.</TextoDestacadoCor>
                                            </Paragrafo>
                                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                                4 - Penalidade –<TextoDestacadoCor corFonte={"fc-marrom"}> A explicação da penalidade que os jogadores recebem na vez do Pecado.</TextoDestacadoCor>
                                            </Paragrafo>
                                            <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-marrom"}>
                                                Já no seu verso, cada carta de Pecado possui um número, representando seu Nível:
                                            </ParagrafoGrande>
                                            <img className={`${"py-3 align-self-center"} ${styles.imagemManual}`} src={explicPecado2} alt={"Verso Carta de Pecado"} />
                                            <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"cd-preta"}>
                                                Quanto maior o nível da carta, mais difícil do a ser enfrentado.
                                            </ParagrafoGrande>
                                        </section>
                                        <section className="py-1 d-flex flex-column">
                                            <h4 id="cartasVirtudesT">1.3 - Cartas de Virtudes Teologais</h4>
                                            <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-laranja"}>
                                                Cada Carta  de Virtude Teologal tem:
                                            </ParagrafoGrande>
                                            <img className={`${"py-2 align-self-center"} ${styles.imagemManual}`} src={explicVirtTelo} alt={"Frente da Carta de Virtude Teologal"} />
                                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                                1 - Nome –<TextoDestacadoCor corFonte={"fc-marrom"}> O nome da Virtude Teologal.</TextoDestacadoCor>
                                            </Paragrafo>
                                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                                2 - Símbolo –<TextoDestacadoCor corFonte={"fc-marrom"}> Um símbolo correspondente à Virtude Teologal.</TextoDestacadoCor>
                                            </Paragrafo>
                                            <Paragrafo className="text-start" fonte={"fc-laranja"}>
                                                3 -  Efeito –<TextoDestacadoCor corFonte={"fc-marrom"}> A descrição do efeito que ocorre quando a carta é jogada.</TextoDestacadoCor>
                                            </Paragrafo>
                                            <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-marrom"}>
                                                Existem 3 tipos de cartas de Virtudes Teologais, cada uma com um efeito diferente:
                                            </ParagrafoGrande>
                                            <section className="justify-content-center my-3 mx-2 mx-sm-0 container-flex column-gap-3 row row-gap-3">
                                                {baseCartasVirtudesTeologais.map(carta =>
                                                    <img className={`${styles.imagemManual} ${"col-xl-3 align-items-center"}`}
                                                        src={carta.caminho} alt={carta.nome} />
                                                )}
                                            </section>
                                        </section>
                                    </section>
                                    <section className="py-1">
                                        <h3 id="preparacao">2 - Preparação para Início do Jogo</h3>
                                        <ul className="py-2 fc-marrom d-flex flex-column row-gap-5">
                                            <li>
                                                As <TextoDestacadoCor corFonte={"fc-laranja"}>Cartas de Intercessores e de Virtudes Teologais</TextoDestacadoCor> são embaralhadas num mesmo monte. O monte é colocado próximo dos jogadores virado para baixo.
                                            </li>
                                            <li>
                                                As <TextoDestacadoCor corFonte={"fc-laranja"}>Cartas de Pecados</TextoDestacadoCor> são separadas em três montes, cada um de acordo com o Nível das cartas (cartas de Nível 1 ficam num mesmo monte e separadas das outras cartas de pecado. O mesmo vale para as cartas de pecado dos demais níveis).
                                            </li>
                                            <li>
                                                Os jogadores pegam um dos montes das cartas de pecado para enfrentar, de acordo com o número de jogadores e segundo a tabela:
                                                <table className={`${"table-bordered col-12"} ${styles.tabelaJogadores}`}>
                                                    <thead className="bgc-laranja fc-branca">
                                                        <tr>
                                                            <th scope="col">Número de Jogadores</th>
                                                            <th scope="col">Monte de Cartas com o qual se joga</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="align-middle bgc-branca fc-preto">
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <th>Pecados de Nível 1</th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">4</th>
                                                            <th>Pecados de Nível 2</th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">5</th>
                                                            <th>Pecados de Nível 3</th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                            <li>O monte de cartas de Pecado a ser enfrentado é embaralhado e colocado virado para baixo perto do monte de cartas de Intercessores. Os demais são guardados.</li>
                                            <li>
                                                Cada jogador recebe 4 cartas do monte de cartas de Intercessores. Segue-se depois para o início da primeira rodada.
                                            </li>
                                        </ul>
                                    </section>
                                    <section className="py-1">
                                        <h3 id="rodadas">3 - Rodadas</h3>
                                        <ParagrafoGrande tamanhoFonte={"fs-4"} corFonte={"fc-marrom"}>
                                            No início de cada rodada, a carta do topo do monte de cartas de Pecado é virada para cima. Esse é o Pecado que os jogadores enfrentarão nesta rodada.
                                        </ParagrafoGrande>
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
                                                    Colocar uma <TextoDestacadoCor corFonte={"fc-laranja"}>Carta de Intercessor</TextoDestacadoCor>da mão em jogo. Cartas de Intercessores jogados ficam em jogo até o fim da rodada.
                                                    <ul className="fs-5">
                                                        <li>Os Pontos de Intercessão da carta aumentam os Pontos de Intercessão do grupo. Os Pontos de Intercessão do grupo é o total da soma dos pontos de todas as cartas em jogo.
                                                        Santos com um símbolo de Virtude igual ao da Fraqueza do Pecado enfrentado na rodada possuem 1 Ponto de Intercessão a mais do que o valor indicado na carta.</li>
                                                    </ul>
                                                    <section className="d-flex flex-row text-center justify-content-center column-gap-3">
                                                        <img className={styles.exemploIntPec} src={exemploSanta} alt="Carta de Santa Catarina de Sena" />
                                                        <img className={styles.exemploIntPec} src={exemploPecado} alt="Carta de Pecado" />
                                                    </section>
                                                    <Paragrafo>A carta de Santa Catarina de Sena possui o símbolo da Prudência, a Fraqueza de Comer e Beber Gulosamente. Neste caso, Santa Catarina de Sena gera 2 Pontos de Intercessão ao invés de 1.</Paragrafo>
                                                </li>
                                                <li>
                                                    Jogar uma carta de Virtude Teologal. O efeito descrito na carta acontece e depois ela é colocada no monte de descarte.
                                                </li>
                                                <li>
                                                    Descartar uma carta da mão para interceder por outro jogador à escolha. O jogador escolhido compra duas cartas e a carta descartada vai para o monte de descarte.
                                                </li>
                                                <li>
                                                    Pular sua vez, caso o jogador queira guardar cartas na mão.
                                                </li>
                                            </ul>
                                            <Paragrafo className="text-start" fonte={"fc-marrom"}>
                                            Sempre que um jogador colocar um Intercessor da mão em jogo, os jogadores devem verificar se o total dos Pontos de Intercessão do grupo é igual ou maior ao Dificuldade do Pecado enfrentado.
                                            </Paragrafo>
                                            <Paragrafo className="text-start" fonte={"fc-marrom"}>
                                            Em caso positivo, os jogadores vencem a rodada: as cartas em jogo e no monte de descarte são embaralhadas e colocadas no fundo do monte de cartas de Santos. Inicia-se então uma nova rodada.
                                            </Paragrafo>
                                            <Paragrafo className="text-start" fonte={"fc-marrom"}>
                                            Se o valor da Dificuldade do Pecado não foi atingido, o jogador do turno descarta cartas da mão até ficar com no máximo 4. Ele passa a vez ao próximo jogador e assim o jogo segue, até o último. Depois da vez do último jogador, se o pecado não foi vencido, é a vez da carta de Pecado.
                                            </Paragrafo>
                                        </section>
                                        <section className="py-1 d-flex flex-column">
                                            <h4 id="turnoPecado">3.2 - Turno do Pecado</h4>
                                            <Paragrafo className="text-start" fonte={"fc-marrom"}>
                                            Os jogadores recebem uma Penalidade, de acordo com a Fraqueza do Pecado que os jogadores estão enfrentando no momento, como mostrado na tabela:
                                            </Paragrafo>
                                            <table className={`${"table-bordered col-12"} ${styles.tabelaJogadores}`}>
                                                    <thead className="bgc-laranja fc-branca">
                                                        <tr>
                                                            <th scope="col">Fraqueza</th>
                                                            <th scope="col">Efeito</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="align-middle bgc-branca fc-preto">
                                                        <tr>
                                                            <th scope="row"><img className={styles.iconesVirtudes}  src={justica} alt="Ícone da Justiça"/></th>
                                                            <th>Escolham entre si um jogador para pular o próximo turno</th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><img className={styles.iconesVirtudes}  src={fortaleza} alt="Ícone da Fortaleza"/></th>
                                                            <th>Escolham entre si um jogador para descartar 1 carta</th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><img className={styles.iconesVirtudes}  src={prudencia} alt="Ícone da Prudência"/></th>
                                                            <th>Escolham 1 Intercessor em jogo. Ele volta para voltar a mão de quem o jogou</th>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><img className={styles.iconesVirtudes}  src={temperanca} alt="Ícone da Temperança"/></th>
                                                            <th>Cada jogador compra 1 carta e descarta 1 carta aleatoriamente</th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            <Paragrafo className="text-start" fonte={"fc-marrom"}>
                                                Após a <TextoDestacadoCor corFonte={"fc-laranja"}>Penalidade</TextoDestacadoCor>, a rodada continua. É a vez do primeiro jogador novamente.
                                            </Paragrafo>
                                            <img className={`${"py-2 align-self-center"} ${styles.resumoRodada}`} src={window.screen.width < 1440 ? explicacaoRodada : explicacaoRodada2}
                                                alt={"Frente da Carta de Pecado"} />
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
                                                        Se todos os jogadores ficarem sem cartas na mão.
                                                    </li>
                                                    <li>
                                                        Quando um jogador compraria cartas, mas o monte de Cartas de Intercessores estiver vazio.
                                                    </li>
                                                </ul>
                                            </section>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </AreaConteudo>
        </section>
    );
}