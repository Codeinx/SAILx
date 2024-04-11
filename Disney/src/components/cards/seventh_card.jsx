import gridStyle from "../../assets/css/seventh_grid.module.css"

const SeventhCard = (props) => {
 
    const {image} = props

    return (
        <>
            <div id={gridStyle.card}>
                <img src={image}/>
            </div>
        </>
    );
}

export default SeventhCard;