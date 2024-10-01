import './Botao.module.css';

export default function Botao({texto, corFundo, corFonte, tamanhoFonte, alinhamento, arredondamento}){
    return(
        <button className={`${"btn"} ${corFonte} ${corFundo} ${tamanhoFonte} ${alinhamento} ${arredondamento}`}>
            {texto}
        </button>
    );
}