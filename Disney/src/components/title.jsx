function Title(props) {
    

    let {style, title} = props

    const section = {
        paddingTop: "64px",
        paddingBottom: "20px",
        display: "flex",
        justifyContent: "center",
        ...style
    }

    const p = {
        margin: "0px",
        fontSize: "1.4em",
        fontWeight: "bold"
    }

    return (
        <>
            <section style={section}>
                <p style={p}>{title}</p>
            </section> 
        </>
    );
}

export default Title;