import { useState } from "react";

const StyleSwitcher = () => {
    const [open, setOpen] = useState(false);
    const [day, setDay] = useState(true)
    
    const handleTheme = () => {
        setDay(!day);
        document.querySelector("body").classList.toggle("dark");
    }
    const alternativeStyles = document.querySelectorAll(".alternate-style")
    const handleColor = (e) => {
        let color = e.target.className
        alternativeStyles.forEach(style => {    
            if(color === style.getAttribute("title")){
                style.removeAttribute("disabled")
            }else{
                style.setAttribute("disabled", "true")
            }
        })
    }
    const sp = ["color-1", "color-2", "color-3", "color-4", "color-5", ]
    const spans = sp.map(spa => {
        return <span className={spa} onClick={e => handleColor(e)} key={spa}></span>
    })
    return (
        <div className={open ? "style-switcher open" : "style-switcher"}>
            <div className="style-switcher-toggler s-icon" onClick={() => setOpen(!open)}>
                <i className="fas fa-cog fa-spin"></i>
            </div>
            <div className="day-night s-icon" onClick={handleTheme}>
                <i className={day ? "fas fa-moon" : "fas fa-sun"}></i>
            </div>
            <h4>Theme Colors</h4>
            <div className="colors">
                {spans}
            </div>
        </div>
    );
}
 
export default StyleSwitcher;