const About = ({ openBar }) => {
    const desc = "This is my experince and education. I'm an geologic engineer with self tought programming skills. (algorithm, data stracture) and basics of programming in the university using matlab, then CS50 course offered from Harvard. I've learnt FrontEnd {Html, Css(Sass), JS [JQuery, React, Redux ]}, BackEnd {NodeJS, Express, MongoDB, Mongoose, EJS, SQL DataBase}. Rating down there is percent of each language in the total projects amount."
    return (
        <section className={openBar ? "about section active open" : "about section active"} id="about">
                <div className="container">
                    <div className="row">
                        <div className="section-title pad-15">
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-content pad-15">
                            <div className="row">
                                <div className="about-text pad-15">
                                    <h3>I'm Hamza Elmansy <span>Frontend Developer</span></h3>
                                    <p>{ desc }</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="personal-info pad-15">
                                    <div className="row">
                                        <div className="info-item pad-15">
                                            <p>Birthday: <span>25 Mar 1994</span></p>
                                        </div>
                                        <div className="info-item pad-15">
                                            <p>Age: <span>28</span></p>
                                        </div>
                                        <div className="info-item pad-15">
                                            <p>Website: <span>https://resume-hamza.onrender.com/</span></p>
                                        </div>
                                        <div className="info-item pad-15">
                                            <p>Email: <span>hamza.elmansy94@gmail.com</span></p>
                                        </div>
                                        <div className="info-item pad-15">
                                            <p>Degree: <span>Bsc</span></p>
                                        </div>
                                        <div className="info-item pad-15">
                                            <p>Phone: <span>+7 901 427 45 95</span></p>
                                        </div>
                                        <div className="info-item pad-15">
                                            <p>City: <span>Moscow</span></p>
                                        </div>
                                        <div className="info-item pad-15">
                                            <p>Freelance: <span>Available</span></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="buttons pad-15">
                                            <a href="#contact" data-section-index="1" className="btn hire-me">Hire Me</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills pad-15">
                                    <div className="row">
                                        <div className="skill-item pad-15">
                                            <h5>HTML</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{width: "80%"}}></div>
                                                <div className="skill-percent">80%</div>
                                            </div>
                                        </div>
                                        <div className="skill-item pad-15">
                                            <h5>CSS</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{width:" 76%"}}></div>
                                                <div className="skill-percent">76%</div>
                                            </div>
                                        </div>
                                        <div className="skill-item pad-15">
                                            <h5>JS</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{width: "70%"}}></div>
                                                <div className="skill-percent">70%</div>
                                            </div>
                                        </div>
                                        <div className="skill-item pad-15">
                                            <h5>Node JS</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{width: "76%"}}></div>
                                                <div className="skill-percent">60%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="education pad-15">
                                    <h3 className="title">Education</h3>
                                    <div className="row">
                                        <div className="timeline-box pad-15">
                                            <div className="timeline shadow-dark">
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2012 - 2017
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        Bachelor In Geology
                                                    </h4>
                                                    <p className="timeline-text">
                                                        Learning using matlab, C, for basic logic and knowing the logic of coding. using these knowledge to simplify, modify and deploy the geological data and prepare it for the interpretation
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2022
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        CS50's Introduction to Computer Science
                                                    </h4>
                                                    <p className="timeline-text">
                                                        Through the course have learnt, more about logic of programming -data structure, algorithm, web development, how the internet work and security. I've also learnt punch of language C, Python, JavaScript
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> May 2022
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        CS50 Web Programming 
                                                    </h4>
                                                    <p className="timeline-text">
                                                        Advanced learning HTML, CSS, JavaScript, Python, Django connecting to DataBase SQL
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2022
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        FWD-Egypt professional web programming scholarship 
                                                    </h4>
                                                    <p className="timeline-text">
                                                        Advanced learning HTML, CSS, JavaScript(OOP, Async) and agile and creating connection to the nodejs backend with <a href="https://graduation.udacity.com/confirm/PPDYUDCL">Udacity Nanodegree Certificate</a>.
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2022
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        FWD-Egypt FullStack web programming scholarship -nanodegree-
                                                    </h4>
                                                    <p className="timeline-text">
                                                        building a full online market website using html, css, React, ts, nodejs and express also using unit testing by jasmine. connecting backend to frontend and building RESTful api using suitable endpoints to update and insert data to postgres db (rational DB). basic knowledge of AWS and the services like (S3, RDS, EB, EC2, Lambda, VPC)
                                                        <a href="https://confirm.udacity.com/CHYJR7LW">Udacity Nanodegree Certificate</a>.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience pad-15">
                                    <h3 className="title">Experience</h3>
                                    <div className="row">
                                        <div className="timeline-box pad-15">
                                            <div className="timeline shadow-dark">
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2022 - Present
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        Frontend Developer in FWD-Egypt
                                                    </h4>
                                                    <p className="timeline-text">
                                                    Determining the structure and design of web pages, Ensuring user experience determines design choices, and developing features to enhance the user experience.
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2022 - Present
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        Freelance Frontend Developer
                                                    </h4>
                                                    <p className="timeline-text">
                                                        Building (E-commerce, Personal blogs, and Business websites), Updating code, sloving code problems, 
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2022
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        Daily Blog
                                                    </h4>
                                                    <p className="timeline-text">
                                                        Daily Blog full-stack project. it's an web for daily articles using JS, HTML, CSS, Node JS, Express, ejs and also MongoDB.
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2022
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        Cake Shop, comfy house
                                                    </h4>
                                                    <p className="timeline-text">
                                                        Two Front-End projects. They are a demo of ecommerce websites and still not ready for being deployed. language used are HTML, CSS, vanilla JS.
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2022
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        Note Taker, Weather App
                                                    </h4>
                                                    <p className="timeline-text">
                                                        Different Front-End websites. Languages used are HTML, CSS, JS (React, Vue). using axios for the api used in these projects.
                                                    </p>
                                                </div>
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-date">
                                                        <i className="fa fa-calendar"></i> 2022
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        Resturant
                                                    </h4>
                                                    <p className="timeline-text">
                                                        web build, Resturant using Javascript, react, bootstrap
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}
 
export default About;