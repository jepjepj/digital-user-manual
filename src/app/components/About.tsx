const About = () => {
    return (
        <section id="about" className="about section">

            <div className="container">
                <div className="row gx-0">

                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <div className="content">
                    <h3>About Electronic User Manuall</h3>
                    <h2> Welcome to Electronic User Manual, a platform designed to transform traditional user manuals into interactive, multilingual learning experiences. </h2>
                    <p>
                       Our mission is to make information easy to understand and accessible to everyone, regardless of language or technical expertise.

                        Instead of relying on lengthy printed manuals, users can access digital guides that include text, images, videos, and audio narration, allowing them to learn at their own pace on any device. By supporting multiple languages, we help organizations communicate more effectively with diverse users while reducing confusion and improving overall user satisfaction.

                        Whether you're introducing a new product, training employees, or providing customer support, our platform ensures that every user has the guidance they need—anytime, anywhere.
                    </p>
                    </div>
                </div>

                <div className="col-lg-6 d-flex align-items-center" >
                    <img src="/assets/img/about.jpg" className="img-fluid" />
                </div>

                </div>
            </div>

            </section>
    )
}

export default About