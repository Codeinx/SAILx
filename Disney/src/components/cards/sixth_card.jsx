import gridStyle from "../../assets/css/sixth_grid.module.css"

const SixthCard = (props) => {
 
    const {image} = props

    return (
        <>
            <div id={gridStyle.card}>
                <img src={image}/>
            </div>
        </>
    );
}

export default SixthCard;