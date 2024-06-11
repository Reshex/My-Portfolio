import projectsStyles from "./projects.module.scss"

function Projects() {

    function handleClick(route: string) {
        const link = document.createElement("a") as HTMLAnchorElement;
        link.href = route;
        link.click();
    }

    return (
        <div className={projectsStyles.projects}>
            <button onClick={() => handleClick("https://github.com/Reshex/Weather-App")} className={projectsStyles.project1}>Weather</button>
            <button onClick={() => handleClick("https://github.com/Reshex/DogChat")} className={projectsStyles.project2}>Dogchat</button>
            <button onClick={() => handleClick("https://github.com/Reshex/Recipes-App")} className={projectsStyles.project3}>Recipes</button>
            <button onClick={() => handleClick("https://github.com/Reshex/Workout-Tracker")} className={projectsStyles.project4}>Workout Tracker</button>
        </div>
    )
}

export default Projects