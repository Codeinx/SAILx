import gridStyle from "../assets/css/sixth_grid.module.css"
import SixthCard from "./cards/sixth_card";

function SixthGrid(props) {
    const {style} = props;

    const section = {
        ...style
    }

    const gridSix = [
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/link_disney_dcd016c0.png?region=0,0,372,209",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/link_pixar_a0830b7f.png?region=0,0,372,209",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/link_marvel_779d97a0.png?region=0,0,372,209",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/link_sw_c0f3e438.png?region=0,0,372,209",
        }
    ]

    return ( 
        <>

            <section id={gridStyle.section} style={section}>
                {
                    gridSix.map((items)=>{
                        return (<SixthCard image={items.image}/>)
                    })
                }
                
            </section>
        
        </>
     );
}

export default SixthGrid;