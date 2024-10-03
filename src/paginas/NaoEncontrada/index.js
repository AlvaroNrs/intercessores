import AreaConteudo from 'paginas/AreaConteudo';

export default function NaoEncontrada() {
    return (
        <AreaConteudo className={"text-center"} paddingY={"py-3"} tamanhoFonte={"fs-4"} corFonte={"fc-marrom"}
        corFundo={"bgc-creme"} sizeY={"min-vh-100"}>
            <h2>Erro 404 - Página Não Encontrada!</h2>
        </AreaConteudo>
    );
}