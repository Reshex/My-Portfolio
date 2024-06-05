import { useNavigate } from "react-router-dom"
import style from "../home/home.module.scss"

function Home() {
    const navigate = useNavigate()

    function navigateProjects(event: React.MouseEvent<HTMLButtonElement>) {
        if (event.target) {
            navigate("/projectsAndSkills")
        }
    }

    return (
        <>
            <div className={style.homeWrapper}>
                <div className={style.homeContainer}>
                    <div className={style.homeTitle}>
                        <h1>Welcome To My Digital World</h1>
                        <p>Presenting Bar,</p>
                        <p>A Fullstack Software Developer</p>
                    </div>
                    <div className={style.homeProjAndResume}>
                        <button onClick={navigateProjects}>Check My Projects</button>
                        <button>Download My Resume</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home