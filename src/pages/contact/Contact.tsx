import style from "./contact.module.scss";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

function Contact() {
    return (
        <div className={style.contactContainer}>
            <div className={style.contactWrapper}>
                <div className={style.contactTitle}>
                    <h1>Contact Me</h1>
                </div>
                <div className={style.bottomContent}>
                    <p>Feel free to reach out to me via email or connect with me on LinkedIn or GitHub:</p>
                    <div className={style.contactIcons}>
                        <a href="mailto:bar7569@gmail.com"><AiFillMail /></a>
                        <a href={"https://www.linkedin.com/in/bar-abulher-20b22626b/"}><AiFillLinkedin /></a>
                        <a href={"https://github.com/Reshex"}><AiFillGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
