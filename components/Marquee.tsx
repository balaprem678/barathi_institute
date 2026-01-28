
const Marquee = () => {
    return (
        <section>
            <div className="scrolling">
                {/* @ts-expect-error marquee is deprecated but used in legacy design */}
                <marquee><b>TAMBARAM | AMBATTUR | BROADWAY | KANCHIPURAM | VILLUPURAM |TIRUVANNAMALAI | CUDDALORE | ARIYALUR | TRICHY | SALEM | MADURAI | TIRUNELVELI | KARAIKUDI | RANIPET | VELLORE | AMBUR | TIRUCHIRAPPALLI | KALLAKURICHI | DINDIGUL </b></marquee>
            </div>
        </section>
    );
};

export default Marquee;
