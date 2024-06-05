import style from "./projectAndSkills.module.scss"
import Projects from "./Projects";
import Skills from "./Skills";

function ProjectsAndSkills() {
    return (
        <>
            <div className={style.porjectAndSkillsContainer}>
                <div className={style.porjectAndSkillsTitle}>
                    <h1>Projects & Skills</h1>
                </div>
                <Projects />
                <div className={style.progressContainer}>
                    <Skills />
                </div>
            </div>
        </>
    )
}

export default ProjectsAndSkills