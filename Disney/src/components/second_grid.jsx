import gridStyle from "../assets/css/second_grid.module.css"
import SecondCard from "./cards/second_card";

function SecondGrid() {
    const gridTwo = [
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/cars3_tv_dc_special_movie_73c4b5bb.jpeg?region=0,27,1450,816&width=480", 
            title: `Movies that you can't miss are coming out one after another! Delivering mind-blowing entertainment on Disney Channel!`,
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/pc_thumbnail_1200x677_8a93ebb4.png?region=0,1,1200,675&width=480", 
            title: `"Disney My Little Doll" A garden of happiness full of blooming white clover♪`, 

        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/img_20240325_01_1200_677_89ae4a87.jpeg?region=0,1,1200,675&width=480", 
            title: `Disney “Winnie the Pooh” Ohisama Market <Held in Ibaraki/Mito from 3/28>`, 
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/tvnews-0325_0075711c.jpeg?region=0,1,1200,675&width=480", 
            title: `“The Princess and the Frog”, a Disney movie full of wonderful music and magic, will be broadcast on Disney Channel from 8:00 p.m. on Saturday, April 6th!`,
        }
    ]

    return ( 
        <>

            <section id={gridStyle.section}>
                {
                    gridTwo.map((items)=>{
                        return (<SecondCard image={items.image} title={items.title}/>)
                    })
                }
                
            </section>
        
        </>
     );
}

export default SecondGrid;