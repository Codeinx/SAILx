import gridStyle from "../assets/css/first_grid.module.css"
import FirstCard from "./cards/firstCard";

function FirstGrid() {
    const gridOne = [
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/20240314_pick_pixarbest_600_1d2645c2.jpeg?region=0,0,600,600", 
            title: `"Pixar Best"`, 
            description: `​The ultimate best album of Pixar music! March 20th CD release/digital distribution`,
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/20240314_pick_doc24d_kv_600x600_5cccaec9.jpeg?region=0,0,600,600", 
            title: `Held nationwide from May to June!`, 
            description: `​"Disney on Classic ~ Gift of Dreams and Magic 2024" Orchestral performance of many popular works​`, 

        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/20240314_pick_minnieday600x600-100_95145a30.jpeg?region=0,0,600,600", 
            title: `Focus on Minnie in March`, 
            description: `Enjoy spring while being inspired by the fashionable, fun-loving, and always positive Minnie Mouse!`, 
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/20240314_pick_home_12488_12441_12490_12523_12488_12441_733dc34a.jpeg?region=0,0,600,600", 
            title: `disney palpalooza`, 
            description: `​Tokyo Disneyland “Disney Palpalooza” 2nd “Donald’s Quacky Duck City” held​`, 
        } 
    ]

    return (
        <>
            <section id={gridStyle.section}>
                {
                    gridOne.map((items) => {
                        return (<FirstCard image = {items.image} title = {items.title} desc = {items.description}/>)
                    })
                }
            </section>
        </>
    )
}

export default FirstGrid;