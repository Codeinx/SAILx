import gridStyle from "../assets/css/third_grid.module.css"
import ThirdCard from "./cards/third_card";
import Title from "./title";

function ThirdGrid() {
    const gridThree = [
        {
            image: "https://lumiere-a.akamaihd.net/v1/images/d_65291_12498_12442_12483_12463_12450_12483_12501_12442_a4896218.jpeg?region=0,0,800,800&width=768",
            title: `This month's recommended works`,
            description: `Introducing the distribution schedule of Disney Plus works. New movies and original works are appearing one after another!`,
        },
        {
            image: "https://lumiere-a.akamaihd.net/v1/images/20240314_pick_the_bad_batch_600_215_600_0c26c8cd.jpeg?region=0,0,600,600",
            title: `final season`,
            description: `“Star Wars: The Bad Batch” Season 3 is now available exclusively. The story is finally coming to an end!​`,

        },
        {
            image: "https://lumiere-a.akamaihd.net/v1/images/20240314_pick_iwaju_600_215_600_6d1f69db.jpeg?region=0,0,600,600",
            title: `original series`,
            description: `All 6 episodes of “Iwaju” are now available exclusively! A science fiction animation set in Lagos, Nigeria in the near future.`,
        },
        {
            image: "https://lumiere-a.akamaihd.net/v1/images/d_kv_600_215_600_a6ca9297.jpeg?region=0,0,600,600",
            title: `disney plus`,
            description: `Disney's official video distribution service. In addition to masterpieces and popular works, you can also watch foreign dramas and Japanese content as much as you like.​`,
        }
    ]

    return (
        <>
            <Title title={"Disney Plus recommended information"} style={{backgroundColor: "#010E3E", color: "white"}} />
            <section id={gridStyle.section}>

                {
                    gridThree.map((items) => {
                        return (<ThirdCard image={items.image} title={items.title} desc={items.description} />)
                    })
                }

            </section>

        </>
    );
}

export default ThirdGrid;