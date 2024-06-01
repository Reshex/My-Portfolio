import style from "./about.module.scss"
import water from "./star.module.scss"

function About() {
    return (
        <div className={style.aboutContainer}>
            <div className={style.aboutWrapper}>
                <div className={style.aboutTitle}>
                    <h1>About Me</h1>
                </div>
                <div className={style.aboutContentAndSnapshot}>
                    <div className={style.aboutContent}>
                        <p>
                            I am a dedicated full-stack developer driven by a fervent passion for crafting immersive digital experiences. My journey in software engineering is propelled by the ambition to transform concepts into tangible realities through code. Whether it involves sculpting intuitive user interfaces or architecting robust backend infrastructures, I embrace each new endeavor with enthusiasm.
                        </p>
                    </div>
                    <div className={style.aboutSnapshot}>
                        <p>
                            <p>Skills Snapshot:</p>
                            👨‍💻 Frontend: I specialize in leveraging React.js, HTML5, CSS, and TypeScript to engineer captivating user interfaces that prioritize both aesthetics and usability.
                            🔭 Backend: With a focus on Node.js and occasional forays into Python, I lay the groundwork for frontend functionality, from crafting efficient APIs to fine-tuning performance for scalable solutions.
                            ⚡ Other Interests: Beyond coding, I am an ardent gymnast, dedicated to maintaining an active and healthy lifestyle. Additionally, I'm an enthusiastic gamer, always seeking new challenges in the virtual realm.
                        </p>
                    </div>
                    <div className={water.stars}>
                        <div className={water.star}></div>
                        <div className={water.star}></div>
                        <div className={water.star}></div>
                        <div className={water.star}></div>
                        <div className={water.star}></div>
                        <div className={water.star}></div>
                        <div className={water.star}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About