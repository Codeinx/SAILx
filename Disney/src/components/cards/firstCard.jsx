import gridStyle from "../../assets/css/first_grid.module.css"

const FirstCard = (props) => {
    const {image, title, desc} = props
    
    return (
        <>
            <div>
                <img src={image}/>
                <div id={gridStyle.cardContent}>
                    <p id={gridStyle.title}>{title}</p>
                    <p id={gridStyle.description}>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default FirstCard;