import Link from "next/link"

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                    <a href="index.html" className="d-flex align-items-center">
                        <span className="sitename">Digital User Manual</span>
                    </a>
                    <div className="footer-contact pt-3">
                        <p>Bacolod City</p>
                        <p>Negros Occidental 6100, Philippines</p>
                    </div>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><i className="bi bi-chevron-right"></i> <a href="/">Home</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="/#about">About us</a></li>
                        <li><i className="bi bi-chevron-right"></i> <a href="/#values">Values</a></li>
                    </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                    <h4>Manuals</h4>
                    <ul>
                        <li><i className="bi bi-chevron-right"></i> <Link href="/finance-officer">Finance Officer</Link></li>
                        <li><i className="bi bi-chevron-right"></i> <Link href="/remitting-agency-officer">Remitting Agency Officer</Link></li>
                    </ul>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer