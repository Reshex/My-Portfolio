import style from "./contact.module.scss"

function Contact() {
    return (
        <div className={style.contactContainer}>
            <div className={style.contactWrapper}>
                <div className={style.contactTitle}>
                    <h1>Contact Me</h1>
                </div>
            </div>
        </div>
    )
}

export default Contact