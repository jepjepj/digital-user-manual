import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="container">
                <div className="row gy-4">
                <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 >Your Digital Guide — Multilingual, Interactive, and Easy to Learn.</h1>
                    <p >Empower every user with a modern digital manual that provides clear, step-by-step instructions in multiple languages. Whether you're a first-time user or an experienced professional, our interactive guides make learning products, systems, and services simple, accessible, and efficient.</p>
                    <div className="d-flex flex-column flex-md-row" >
                        <Link href="/finance-officer" className="btn-get-started">Finance Officer Manual <i className="bi bi-arrow-right"></i></Link>
                        &nbsp; &nbsp;
                        <Link href="/remitting-agency-officer" className="btn-get-started">Remitting Agency Officer Manual <i className="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img">
                    <img src="/assets/img/hero-img.png" className="img-fluid animated" />
                </div>
                </div>
            </div>

        </section>
    )
}

export default Hero