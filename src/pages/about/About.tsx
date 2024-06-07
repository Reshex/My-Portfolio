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
                            I'm a passionate full-stack developer with a love for creating engaging web experiences. My journey in the world of software development has been fueled by a desire to turn ideas into reality through code. Whether it's crafting intuitive user interfaces or building robust backend systems, I'm always excited to tackle new challenges.
                        </p>
                    </div>
                    <div className={style.aboutSnapshot}>
                        <p>
                            <span>Skills Snapshot:</span>
                            <br />
                            👨‍💻 Frontend: I specialize in creating captivating user interfaces using React.js, HTML5, CSS, and TypeScript. I believe in designing websites and apps that not only look great but also provide a seamless user experience.
                            <br />
                            🔭 Backend: With Node.js and sometimes Python, I focus on building strong foundations to support frontend functionality. From crafting efficient APIs to optimizing performance, I'm dedicated to delivering scalable solutions.
                            <br />
                            ⚡ Other Interests: When I am not coding, I'm a passionate gymnast who loves staying active and healthy. I'm also an avid gamer, always up for a challenge in the virtual world.
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