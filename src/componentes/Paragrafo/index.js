export default function ContentArea({fonte, children}){
    return(
        <>
            <p className={`${"py-3"} ${fonte}`}>{children}</p>
        </>
    );
}