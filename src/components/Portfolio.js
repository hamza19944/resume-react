import data from "../data"

const Portfolio = ({ openBar }) => {
    // function openWindow(url){
    //     window.open(url, "_blank").focus
    // }
    let projects = data.map(proj => {
        return (
            <div className="portfolio-item pad-15">
                <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img" >
                        <img src={require("../assets/" + proj.src)} alt=""/>
                    </div>
                </div>
            </div>
        ) 
    })
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
                    </div>
                </div>
                <div className="row">
                    {projects}
                </div>
            </div>
        </section>
    );
}
 
export default Portfolio;