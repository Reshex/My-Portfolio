import style from "./navbar.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faToolbox, faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className={style.navWrapper}>
                <div className={style.navHeader}>
                    <img src=".assets\imgs\image_2_584x584_100.png" />
                </div>
                <div className={style.navMenu}>
                    <div className={style.navMainMenu}>
                        <Link to={"/My-Portfolio/"}><FontAwesomeIcon icon={faHome} /> <span>Home</span> </Link>
                        <Link to={"/My-Portfolio/about"}> <FontAwesomeIcon icon={faBookOpenReader} /><span>About</span></Link>
                        <Link to={"/My-Portfolio/projectsAndSkills"}> <FontAwesomeIcon icon={faToolbox} /><span>Projects & Skills</span></Link>
                        <Link to={"/My-Portfolio/contact"}> <FontAwesomeIcon icon={faEnvelope} /><span>Contact</span></Link>
                    </div>
                    <div className={style.navSocialMedia}>
                        <Link to={"https://www.linkedin.com/in/bar-abulher-20b22626b/"}><FontAwesomeIcon icon={faLinkedin} /><span>LinkedIn</span> </Link>
                        <Link to={"https://github.com/Reshex"}> <FontAwesomeIcon icon={faGithub} /><span>GitHub</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar