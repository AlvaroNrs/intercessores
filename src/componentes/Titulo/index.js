export default function Titulo({corFonte, children}){
    return(
        <>
            <h2 className={`${"pt-2"} ${corFonte}`}>{children}</h2>
        </>
    );
}