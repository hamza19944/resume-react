const Services = ({openBar}) => {
    return (
        <section className={openBar ? "service section active open" : "service section active"} id="services">
            <div className="container">
                <div className="row">
                    <div className="section-title pad-15">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="service-item pad-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-mobile-alt"></i>
                            </div>
                            <h4>Web Design</h4>
                            <p>Offer Simple interactive design for different website ideas</p>
                        </div>
                    </div>
                    <div className="service-item pad-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-laptop-code"></i>
                            </div>
                            <h4>Web Develop</h4>
                            <p>Transform a static web application into an interactive one using different front end framworks</p>
                        </div>
                    </div>
                    <div className="service-item pad-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-palette"></i>
                            </div>
                            <h4>Web Security</h4>
                            <p>offer a secure web and data using the high level of security</p>
                        </div>
                    </div>
                    <div className="service-item pad-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-code"></i>
                            </div>
                            <h4>Web problem solving</h4>
                            <p>solve the problems that already in a working websites</p>
                        </div>
                    </div>
                    <div className="service-item pad-15">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-search"></i>
                            </div>
                            <h4>Monthly web update</h4>
                            <p>updating the designed websites to match UX </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Services;