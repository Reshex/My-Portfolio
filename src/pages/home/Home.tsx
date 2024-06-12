import { useNavigate } from "react-router-dom"
import style from "../home/home.module.scss"
import pdfResume from "../../assets/Resume/CV Bar.pdf"

function Home() {
    const navigate = useNavigate()

    function navigateProjects(event: React.MouseEvent<HTMLButtonElement>) {
        if (event.target) {
            navigate("/My-Portfolio/projectsAndSkills")
        }
    }

    function downloadResume() {
        const downloadLink = document.createElement("a") as HTMLAnchorElement;
        downloadLink.href = pdfResume;
        downloadLink.download = "Bar's CV";
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
    }

    return (
        <>
            <div className={style.homeWrapper}>
                <div className={style.homeContainer}>
                    <div className={style.homeTitle}>
                        <h1>Welcome To My Digital World</h1>
                        <p>My Name Is Bar</p>
                        <p>A Fullstack Software Developer</p>
                    </div>
                    <div className={style.homeProjAndResume}>
                        <button onClick={navigateProjects}>Check My Projects</button>
                        <button onClick={downloadResume}>Download My Resume</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home