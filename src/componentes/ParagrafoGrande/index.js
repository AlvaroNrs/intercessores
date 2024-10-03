export default function ParagrafoGrande({ tamanhoFonte, corFonte, paddingTY, paddingBY, children }) {
    return (
        <>
            <p className={`${tamanhoFonte} ${corFonte} ${paddingTY} ${paddingBY}`}>
                {children}
            </p>
        </>
    );
}