import Link from "next/link"

const Header = () => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">

            <a href="/" className="logo d-flex align-items-center me-auto">
                <img src="/assets/img/logo.png" alt="" />
                <h1 className="sitename">Digital User Manual</h1>
            </a>

            <nav id="navmenu" className="navmenu">
                <ul>
                <li><a href="/" className="active">Home<br /></a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#values">Values</a></li>
                <li className="dropdown"><a href="#"><span>Manuals</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                    <li><Link href="/finance-officer">Finance Officer</Link></li>
                    <li><Link href="/remitting-agency-officer">Remitting Officer</Link></li>
                    </ul>
                </li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
            </div>
        </header>
    )
}

export default Header