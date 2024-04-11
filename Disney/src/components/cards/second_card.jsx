import gridStyle from "../../assets/css/second_grid.module.css"

const SecondCard = (props) => {

    const { image, title, desc } = props

    return (
        <>
            <div id={gridStyle.card}>
                <img src={image} />
                <div id={gridStyle.cardContent}>
                    <div>
                        <p id={gridStyle.news}>NEWS</p>
                        <p id={gridStyle.title}>{title}</p>
                    </div>
                    <p id={gridStyle.date}>March 25, 2024</p>
                </div>
            </div>
        </>
    );
}

export default SecondCard;