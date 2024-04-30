import { React } from "react";
import { Link } from "react-scroll";

function Footer() {
    return (
        <div className="footer">
            <hr></hr>
            <div className="footerText">
                <div className="mainFooter">
            <div className='logo'>
                <span className='navText1'>MY</span><span className='navText2'> PORTFOLIO</span>
            </div>
            <div className='navbarLinksCSS'>
            <nav className='link'>
                <Link
                    activeClass="active"
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    ABOUT ME
                </Link>
            </nav>
            <nav className='link'>
                <Link
                    activeClass="active"
                    to="languages"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    LANGUAGES
                </Link>
            </nav>
            <nav className='link'>
                <Link
                    activeClass="active"
                    to="software"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    SOFTWARE
                </Link>
            </nav>
            <nav className='link'>
                <Link
                    activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    CONTACTS
                </Link>
            </nav>
            </div>
                </div>
                <p>© 2024 Damian Jarmuż</p>
            </div>
        </div>
    )
}

export default Footer;