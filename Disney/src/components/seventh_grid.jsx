import gridStyle from "../assets/css/seventh_grid.module.css"
import SeventhCard from "./cards/seventh_card";

function SeventhGrid(props) {
    const {style} = props;

    const section = {
        ...style
    }

    const gridSeventh = [
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/disneyjp_hl_98847a99.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/disneyjp_mf_c5553dea.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/disneyjp_pc0208_67de449e.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/disneyjp_wp_db7f01ef.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/disneyjp_kd0208_c89ca724.png?region=0,0,424,240",
        }
    ]

    return ( 
        <>

            <section id={gridStyle.section} style={section}>
                {
                    gridSeventh.map((items)=>{
                        return (<SeventhCard image={items.image}/>)
                    })
                }
                
            </section>
        
        </>
     );
}

export default SeventhGrid;