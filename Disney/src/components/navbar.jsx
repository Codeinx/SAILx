import NavLink from "./navlink";
import navStyle from "../assets/css/navbar.module.css"




function NavBar() {
    const link = ["Disney Plus", "Shopping", "Movie", "TV", "Parks & Resorts", "Music", "Live & Events", "Game", "Menu"]

    return(
        <nav>
            <div id={navStyle.logoCont}>   
                <img id={navStyle.logo} src="https://lumiere-a.akamaihd.net/v1/images/disney_logo_c77826a6.png?region=0,0,300,150" alt="Disney Logo" />
            </div>
            <ul id={navStyle.navLinks}>
                {
                    link.map((items, index) =>{
                    return (
                    <NavLink name = {items} index = {index} />)
                })
                } 
            </ul>
            <div id={navStyle.searchCont}>
                <input type="text" placeholder="Search within the site" />
                <button>
                    <img src="/src/assets/svg/search.svg" alt="Search Icon" />
                </button>
            </div>
        </nav>
    )


    

}

export default NavBar;