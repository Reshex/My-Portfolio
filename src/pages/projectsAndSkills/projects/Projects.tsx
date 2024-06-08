import projectsStyles from "./projects.module.scss"
function Projects() {
    return (
        <div className={projectsStyles.projects}>
            <button className={projectsStyles.project1}>Weather Project</button>
            <button className={projectsStyles.project2}></button>
            <button className={projectsStyles.project3}></button>
        </div>
    )
}

export default Projects