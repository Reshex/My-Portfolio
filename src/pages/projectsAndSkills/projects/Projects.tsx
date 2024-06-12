import projectsStyles from "./projects.module.scss";

function Projects() {
    return (
        <div className={projectsStyles.projects}>
            <a href="https://github.com/Reshex/Weather-App" className={projectsStyles.project1}>
                Weather
            </a>
            <a href="https://github.com/Reshex/DogChat" className={projectsStyles.project2}>
                Dogchat
            </a>
            <a href="https://github.com/Reshex/Recipes-App" className={projectsStyles.project3}>
                Recipes
            </a>
            <a href="https://github.com/Reshex/Workout-Tracker" className={projectsStyles.project4}>
                Workout Tracker
            </a>
        </div>
    );
}

export default Projects;
