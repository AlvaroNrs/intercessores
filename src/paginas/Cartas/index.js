import Titulo from "componentes/Titulo";
import AreaConteudo from "paginas/AreaConteudo";
import baseDadosCartas from "../../cards.json";
import ConjuntoCartas from "componentes/ConjuntoCartas";

export default function Cartas(){
    return(
        <section className="text-center">
            <AreaConteudo paddingY={"py-3"} paddingX={"px-0"} tamanhoFonte={"fs-4"} corFonte={"fc-laranja"} corFundo={"bgc-creme"}>
                <Titulo>Cartas do Jogo</Titulo>
                <ConjuntoCartas dados={baseDadosCartas} />
            </AreaConteudo>
        </section>
    );
}