import style from "./projectAndSkills.module.scss"
import Skills from "./Skills";

function ProjectsAndSkills() {
    return (
        <div className={style.porjectAndSkillsContainer}>
                <div className={style.porjectAndSkillsTitle}>
                    <h1>Projects & Skills</h1>
                </div>
                <div className={style.progressContainer}>
                    <Skills />
                </div>
        </div>
    )
}

export default ProjectsAndSkills