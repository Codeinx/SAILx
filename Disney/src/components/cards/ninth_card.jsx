import gridStyle from "../../assets/css/ninth_grid.module.css"

const NinthCard = (props) => {
 
    const {image} = props

    return (
        <>
            <div id={gridStyle.card}>
                <img src={image}/>
            </div>
        </>
    );
}

export default NinthCard;