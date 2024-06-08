import style from "./projectAndSkills.module.scss"
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

function ProjectsAndSkills() {
    return (
        <>
            <div className={style.porjectAndSkillsContainer}>
                <div className={style.porjectAndSkillsWrapper}>
                    <div className={style.porjectAndSkillsTitle}>
                        <h1>Projects & Skills</h1>
                    </div>
                    <div className={style.projectsContainer}>
                        <Projects />
                    </div>
                    <div className={style.progressContainer}>
                        <Skills />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectsAndSkills