import gridStyle from "../../assets/css/eigth_grid.module.css"

const EigthCard = (props) => {
 
    const {image} = props

    return (
        <>
            <div id={gridStyle.card}>
                <img src={image}/>
            </div>
        </>
    );
}

export default EigthCard;