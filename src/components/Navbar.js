import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ barOpen }) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
        barOpen(!open)
    }
    const dataNav = [
        { 
            "classi": "fa fa-home",
            "name": "Home",
            "url": "/"
        },
        { 
            "classi": "fa fa-user",
            "name": "About",
            "url": "/about"
        },
        { 
            "classi": "fa fa-list",
            "name": "Services",
            "url": "/services"
        },
        { 
            "classi": "fa fa-briefcase",
            "name": "Portfolio",
            "url": "/portfolio"
        },
        { 
            "classi": "fa fa-comments",
            "name": "Contact",
            "url": "/contact"
        }
    ]
    let navList = dataNav.map(dn => {
        return <li key={dn.name}><NavLink className={({isActive}) => isActive ? "active" : ""} to={dn.url}><i className={dn.classi}></i>{dn.name}</NavLink></li>
    })
    return (
        <aside className={open ? "open" : ""}>
            <div className="logo">
                <Link to="/"><span>H</span>amza</Link>
            </div>
            <div className={open ? "nav-toggler open" : "nav-toggler"} onClick={handleClick}>
                <span></span>
            </div>
            <ul className="nav">
                {navList}
            </ul>
        </aside>
    );
}
 
export default Navbar;