function Tempo(props) {
    const dymanicDate = new Date();
    const dymanicDateString = dymanicDate.toGMTString();

    return (
        <div>
            <div>            {dymanicDateString} (dinâmico)</div>
            <div>            {props.staticDateString} (estático)</div>
        </div>
    )

}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo;