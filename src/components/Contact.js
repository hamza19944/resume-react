const Contact = ({openBar}) => {
    return ( 
        <section className={openBar ? "contact section active open" : "contact section active"} id="contact">
            <div className="container">
                <div className="row">
                    <div className="section-title pad-15">
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <h3 className="contact-title pad-15">Do You Any Question?</h3>
                <h4 className="contact-sub-title pad-15">I'M AT YOUR SERVICES</h4>
                <div className="row">
                    <div className="contact-info-item pad-15">
                        <div className="icon"><i className="fa fa-phone"></i></div>
                        <h4>Call Me On</h4>
                        <p>+7 901 427 45 95</p>
                    </div>
                    <div className="contact-info-item pad-15">
                        <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                        <h4>Location</h4>
                        <p>Moscow</p>
                    </div>
                    <div className="contact-info-item pad-15">
                        <div className="icon"><i className="fa fa-envelope"></i></div>
                        <h4>Email</h4>
                        <p>hamza.elmansy94@gmail.com</p>
                    </div>
                </div>
                <h3 className="contact-title pad-15">Send ME AN EMAIL</h3>
                <h4 className="contact-sub-title pad-15">I'M VERY RESPONSIVE TO MESSAGES</h4>
                {/* <div className="row">
                    <form action="/mail" method="POST" className="contact-form pad-15" autocomplete="on">
                        <div className="row">
                            <div className="form-item col-6 pad-15">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" name="name">
                                </div>
                            </div>
                            <div className="form-item col-6 pad-15">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" name="email" required>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 pad-15">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" required>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 pad-15">
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Message" name="message" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 pad-15">
                                <button type="submit" className="btn">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div> */}
            </div>
        </section>
    );
}
 
export default Contact;