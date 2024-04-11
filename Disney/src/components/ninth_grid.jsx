import gridStyle from "../assets/css/ninth_grid.module.css"
import NinthCard from "./cards/ninth_card";

function NinthGrid(props) {
    const {style} = props;

    const section = {
        ...style
    }

    const gridNine = [
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/icon_social_instagram_dark_b5f8e532.svg",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/icon_social_x_dark_e2671cc8.svg",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/icon_social_facebook_dark_9d7616bf.svg",
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/icon_social_youtube_dark_6136d901.svg",
        }
    ]

    return ( 
        <>

            <section id={gridStyle.section} style={section}>
                {
                    gridNine.map((items)=>{
                        return (<NinthCard image={items.image}/>)
                    })
                    
                }
                <p>Go to SNS list</p>
                
            </section>
        
        </>
     );
}

export default NinthGrid;