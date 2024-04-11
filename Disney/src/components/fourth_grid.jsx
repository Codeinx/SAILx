import gridStyle from "../assets/css/fourth_grid.module.css"
import FourthCard from "./cards/fourth_card";

function FourthGrid() {
    const gridFourth = [
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/home_2024_c_d_spring_collection_1600-1600_b9cd2804.jpeg?region=0,0,1600,1600&width=768", 
            title: `Chip & Dale birthday commemorative goods`,
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/home_240315_cp_goods01_5bcc74c2.jpeg?region=0,0,1600,1600&width=768", 
            title: `Casual Mickey items`, 
            description: `​URBAN RESEARCH and others​`, 

        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/home_2024_disneygift_welcome_-farewell_1600-1600_85557f0c.jpeg?region=0,0,1600,1600&width=768", 
            title: `Recommended gift items for the welcome season`, 
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/home_240315_cp_goods02_24046_26367_b598d59a.jpeg?region=0,0,1600,1600&width=768", 
            title: `Disney Plastic Gamaguchi and others`, 
            description: `​Chara Marche​`, 
        }
    ]

    return ( 
        <>

            <section id={gridStyle.section}>
                {
                    gridFourth.map((items)=>{
                        return (<FourthCard image={items.image} title={items.title} desc={items.description}/>)
                    })
                }
                
            </section>
        
        </>
     );
}

export default FourthGrid;