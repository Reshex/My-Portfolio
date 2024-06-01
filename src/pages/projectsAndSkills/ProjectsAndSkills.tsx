import style from "./projectAndSkills.module.scss"

import Skills from "./Skills";


function ProjectsAndSkills() {
    return (
        <div className={style.porjectAndSkillsContainer}>
            <div className={style.porjectAndSkillsWrapper}>
                <div className={style.porjectAndSkillsTitle}>
                    <h1>My Projects</h1>
                </div>
                <div className={style.progressContainer}>
                    <Skills />
                </div>

            </div>
        </div>
    )
}

export default ProjectsAndSkills