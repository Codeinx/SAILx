import gridStyle from "../../assets/css/third_grid.module.css"

const ThirdCard = (props) => {
 
    const {image, title, desc} = props

    return (
        <>
            <div id={gridStyle.card}>
                <img src={image}/>
                <div id={gridStyle.cardContent}>
                    <p id={gridStyle.title}>{title}</p>
                    <p id={gridStyle.description}>{desc}</p>
                </div>
            </div>
        </>
    );
}

export default ThirdCard;