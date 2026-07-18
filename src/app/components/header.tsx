const Header = () => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">

            <a href="index.html" className="logo d-flex align-items-center me-auto">
                <img src="./assets/img/logo.png" alt="" />
                <h1 className="sitename">Digital User Manual</h1>
            </a>

            <nav id="navmenu" className="navmenu">
                <ul>
                <li><a href="#hero" className="active">Home<br /></a></li>
                <li><a href="#about">About</a></li>
                <li className="dropdown"><a href="#"><span>Manuals</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                    <li><a href="#">Finance Officer</a></li>
                    <li><a href="#">Remitting Officer</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <a className="btn-getstarted flex-md-shrink-0" href="index.html#about">Get Started</a>

            </div>
        </header>
    )
}

export default Header