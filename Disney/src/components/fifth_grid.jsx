import gridStyle from "../assets/css/fifth_grid.module.css"
import FifthCard from "./cards/fifth_card";

function FifthGrid(props) {
    const {style} = props;

    const section = {
        ...style
    }

    const gridFifth = [
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/12461_12515_12521_thumb_12481_12483_12503_12487_12540_1_263f559f.jpeg?region=0,0,800,800&width=600",
            title: `chip and dale`, 
            description: `Cute chipmunk character. Chip has a black nose and one tooth in the middle, and Dale has a red nose and two teeth. Although their personalities are polar opposites, they always act together and play pranks on Donald Duck. She admires Clarice, the nightclub diva who appears in ''Squirrel's Musical Battle''.`,
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/rapunzel_tn_f5e154a8.jpeg?region=0,0,767,767&width=600",
            title: `rapunzel`, 
            description: `Rapunzel, a vivacious girl with long blonde hair who lives in a high tower, is yearning for a world she has never seen before. Especially, on her birthday, she wanted to see the lights shining in the night sky up close, so with her overflowing inquisitive spirit, she and Eugene jumped out of the tower and went on an adventure. I'm going out to She is conflicted between the dreams she wants to fulfill and her feelings for Gothel, who she believes to be her mother, but the decisions she makes are the ones that lead to her true family and her dreams. I took control of the future that existed.`,

        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/12461_12515_12521_thumb_12479_12441_12483_12461_12540_6_4ff675b5.jpeg?region=0,0,800,800&width=600",
            title: `ducky and bunny`, 
            description: `A stuffed animal that was a prize for shooting at the mobile amusement park that Woody and his friends arrived at. I dream of having my child take it home someday. At first glance, they look fluffy and cute, but they actually have a poisonous tongue.`,
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/12461_12515_12521_thumb_12521_12499_12483_12488_e8af1a9b.jpeg?region=0,0,800,800&width=600",
            title: `rabbit`, 
            description: `A rabbit who lives in the 100 Acre Wood with Pooh and his friends. Although he has a bit of a stubborn and angry personality, he is a fun companion who appears in all of the Winnie the Pooh series. Rabbit is a very hard worker and takes great care of his carrot field. In ''Winnie the Pooh and Honey'' (1966), he can be weak-willed, as when Pooh asked him for honey and he couldn't refuse.​`, 
        },
        { 
            image: "https://lumiere-a.akamaihd.net/v1/images/12461_12515_12521_thumb_12392_12435_12377_12369_fade3800.jpeg?region=0,0,800,800&width=600",
            title: `Tonsuke`, 
            description: `A curious rabbit who appears in ''Bambi'' (1942). Bambi's playmate. They have a habit of tapping their hind legs on the ground.​`, 
        }
    ]

    return ( 
        <>

            <section id={gridStyle.section} style={section}>
                {
                    gridFifth.map((items)=>{
                        return (<FifthCard image={items.image} title={items.title} desc={items.description}/>)
                    })
                }
                
            </section>
        
        </>
     );
}

export default FifthGrid;