import projectsStyles from "./projects.module.scss";

function Projects() {
    return (
        <div className={projectsStyles.projects}>
            <a href="https://github.com/Reshex/Weather-App" className={projectsStyles.project3}>
                Weather
            </a>
            <a href="https://github.com/Reshex/DogChat" className={projectsStyles.project1}>
                Dogchat
            </a>
            <a href="https://github.com/Reshex/Recipes-App" className={projectsStyles.project2}>
                Recipes
            </a>
            <a href="https://github.com/Reshex/https://github.com/Reshex/Mind-Map" className={projectsStyles.project4}>
                Mind Map (Best)
            </a>
        </div>
    );
}

export default Projects;
