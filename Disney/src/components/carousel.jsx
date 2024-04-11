import { useState } from "react";
import carouselStyle from "../assets/css/carousel.module.css"




function Carousel() {
    
    let [selIndex, setSelIndex] = useState(0);

    const selArray = [
        { image: "https://lumiere-a.akamaihd.net/v1/images/home_2048-878_pc_698b83c6.png?region=0,0,2048,878", title: `Three Disney & Pixar “tear-jerking masterpieces” to be released in theaters`, description: `Three masterpieces nominated for the Academy Award for Best Animated Feature are coming to the big screen!`, color: "black"},
        { image: "https://lumiere-a.akamaihd.net/v1/images/20240314_hero_olaf_presents_2048_215_878_a32dadd5.jpeg?region=0,0,2048,878", title: `A story told by Olaf`, description: `10th anniversary of “Frozen” released in Japan! Olaf recreates that popular movie almost by himself⁉ The original work is now available exclusively on Disney Plus!`, color: "white" },
        { image: "https://lumiere-a.akamaihd.net/v1/images/20240314_hero_anayuki_2048_215_878_657bd06d.jpeg?region=0,0,2048,878", title: `“Frozen” 10th anniversary`, description: `Check out the latest information, character information, related videos, and more about the Disney animated movie that caused the <Frozen phenomenon> around the world!`, color: "black" }
    ]

    function previousImage() {
        if (selIndex > 0) {
            setSelIndex(selIndex - 1);
            console.log(selIndex);
        }
    }

    function nextImage() {
        if (selIndex < (selArray.length - 1)) {
            setSelIndex(selIndex + 1);
            console.log(selIndex);
        }
    }

    return (
        <>

            <div id={carouselStyle.carousel}>
                <div id={carouselStyle.carouselImage} style={{ backgroundImage: `url(${selArray[selIndex].image})` }}></div>
                <div id={carouselStyle.content}>
                    {selIndex > 0 ?
                        <button onClick={previousImage}>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.48 11.3701 16.48 10.6001 15.47L4.08008 8.94995" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /> 
                            </svg>
                        </button>
                        :
                        <button> </button>
                    }

                    <div id={carouselStyle.contentContent}>
                        <div id={carouselStyle.contentText}>
                            <h2 style={{color: selArray[selIndex].color}}>{selArray[selIndex].title}</h2>
                            <p style={{color: selArray[selIndex].color}}>{selArray[selIndex].description}</p>
                        </div>
                    </div>

                    {selIndex < (selArray.length - 1) ?
                        <button onClick={nextImage}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        :
                        <button> </button>
                    }
                </div>

                <div id={carouselStyle.indicatorCont}>

                    {selArray.map((items, index) => {
                        return (<div id={carouselStyle.indicator} style={index == selIndex ? { backgroundColor: "#0077DA" } : { backgroundColor: " #DCDDDF" }}></div>)
                    })}

                </div>
            </div>

        </>
    );
}

export default Carousel;