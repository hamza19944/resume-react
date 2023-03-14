import { useEffect, useState } from "react"
import data from "../data"

const Portfolio = ({ openBar }) => {
    const [projInfo, setProjInfo] = useState([])
    const [arr, setArr] = useState(["js", "react", "vue", "node", "express", "ejs", "mangoDB"])
    const [dataAll, setDataAll] = useState(data)
    
    const handleClick = (e) => {
        const info = e.target.id
        let newArr = data.filter(dt => dt.skills.includes(info))
        setDataAll(newArr);
    }

    let skills  = arr.map(skill => {
        return (
            <li className="btn" key={skill} id={skill} onClick={handleClick}>{skill}</li>
        )
    })

    useEffect(() => {
        let projects = dataAll.map(proj => {
            return (
                <div className="portfolio-item pad-15" key={proj.src}>
                    <div className="portfolio-item-inner shadow-dark">
                        <div className="portfolio-img" >
                            <a href={proj.url}><img src={require("../assets/" + proj.src)} alt=""/></a>
                        </div>
                    </div>
                </div>
            )
        })
        setProjInfo(projects)
    }, [dataAll])

    return (
        <section className={openBar ? "portfolio section active open" : "portfolio section active"} id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="section-title pad-15">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading pad-15">
                        <h2>My Last Projects: </h2>
                        <ul className="skills">{skills}</ul>
                    </div>
                </div>
                <div className="row">
                    {projInfo}
                </div>
            </div>
        </section>
    );
}
 
export default Portfolio;