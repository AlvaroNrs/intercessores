export default function ContentArea({fonte, texto}){
    return(
        <>
            <p className={`${"pb-3"} ${fonte}`}>{texto}</p>
        </>
    );
}