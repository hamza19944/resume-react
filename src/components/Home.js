import me from "../assets/me.jpeg"

const Home = ({ openBar }) => {
    const para = "self learner. (algorithm, data stracture) and basics of programming have been learnt in the university using matlab, then CS50 course offered from Harvard. I've learnt FrontEnd {Html, Css(Sass, BootStrap), JS [JQuery, React, Redux ], BackEnd [NodeJS, Express, MongoDB, Mongoose, EJS, SQL DB and Git.]"
    return (
        <section className={openBar ? "home section active open" : "home section active"} id="home">
            <div className="container">
                <div className="row">
                    <div className="home-info pad-15">
                        <h3 className="hello">Hello, my name is <span className="name">Hamza Elmansy</span></h3>
                        <h3 className="my-prof">I'm a <span className="typing">Frontend Developer</span></h3>
                        <p>{ para }</p>
                        <a href="resume.pdf" download="Hamza_CV" className="btn">Download CV</a>
                    </div>
                    <div className="home-img pad-15">
                        <img src={me} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Home;