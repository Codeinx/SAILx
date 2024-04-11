import navStyle from "../assets/css/navbar.module.css"


const NavLink = (props) => {
    const {name, index} = props

    let hidden;
    if (index == 1 || index == 2 || index == 3){
        hidden = false
    } else {
        hidden = true
    }

    function mouseHover() {
        console.log(`message ${index}`);
        if (index == 1 || index == 2 || index == 3){
            navStyle.navLink = {backgroundColor: 'red'}
            document.getElementsByClassName(navStyle.arrow)[1].style.tranform = "scaleX(-1)"
        }
    }

    return (
        <li key={index} id={navStyle.navLink}>
            <img src="/src/assets/svg/arrow-down.svg" alt="" className={navStyle.arrow} />
            <a>{name}</a>
            <img className= {navStyle.arrow} style={hidden ? {visibility: "hidden"} : {visibility: "visible"}} src="/src/assets/svg/arrow-down.svg" alt="" />
        </li>
    );
}

export default NavLink;