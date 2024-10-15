export default function CartaUnica({ dados = [] }) {
    return (
        <section className="py-4 container d-grid row">
            {dados.map(carta =>
                <div>
                    <img src={carta.caminho} alt={carta.nome}/>
                    <h3>{carta.caminho}</h3>
                </div>
            )}
        </section>
    );
}