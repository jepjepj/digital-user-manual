const About = () => {
    return (
        <section id="about" className="about section">

            <div className="container" data-aos="fade-up">
                <div className="row gx-0">

                <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="content">
                    <h3>About Digital User Manual</h3>
                    <h2> Welcome to Digital User Manual, a platform designed to transform traditional user manuals into interactive, multilingual learning experiences. </h2>
                    <p>
                       Our mission is to make information easy to understand and accessible to everyone, regardless of language or technical expertise.

                        Instead of relying on lengthy printed manuals, users can access digital guides that include text, images, videos, and audio narration, allowing them to learn at their own pace on any device. By supporting multiple languages, we help organizations communicate more effectively with diverse users while reducing confusion and improving overall user satisfaction.

                        Whether you're introducing a new product, training employees, or providing customer support, our platform ensures that every user has the guidance they need—anytime, anywhere.
                    </p>
                    </div>
                </div>

                <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                    <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>

                </div>
            </div>

            </section>
    )
}

export default About