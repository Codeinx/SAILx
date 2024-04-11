import gridStyle from "../assets/css/eigth_grid.module.css"
import EigthCard from "./cards/eigth_card";

function EigthGrid(props) {
    const {style} = props;

    const section = {
        ...style
    }

    const gridEigth = [
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12511_12483_12461_12540_a79eee36.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12511_12491_12540_017eb85d.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12464_12540_12501_12451_12540_26a16684.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12489_12490_12523_12489_cd1ae169.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12503_12522_12531_12475_12473_61e13c39.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12503_12540_12373_12435_0fcdbc66.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12481_12483_12503_65286_12487_12540_12523_1ba292fd.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12450_12522_12456_12523_3dac9590.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12521_12503_12531_12484_12455_12523_b1c8a34a.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12450_12490_38634_8191e5f9.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12450_12522_12473_3f1e5f36.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12473_12486_12451_12483_12481_8dcbe58c.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12510_12522_12540_95f0526c.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12532_12451_12521_12531_f0d046e5.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12488_12452_12473_12488_12540_12522_12540_f26b2c2c.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12518_12491_12505_12450_c9260231.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_12396_12356_12418_12540_12378_f516d536.png?region=0,0,424,240",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/character_26032_30528_3eb90d8b.png?region=0,0,424,240",
        }
    ]

    return ( 
        <>

            <section id={gridStyle.section} style={section}>
                {
                    gridEigth.map((items)=>{
                        return (<EigthCard image={items.image}/>)
                    })
                }
                
            </section>
        
        </>
     );
}

export default EigthGrid;