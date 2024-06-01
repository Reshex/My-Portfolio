import style from "../home/home.module.scss"

function Home() {
    return (
        <>
            <div className={style.homeWrapper}>
                <div className={style.homeContainer}>
                    <div className={style.homeTitle}>
                        <h1>Enter My Digital World</h1>
                        <p>Presenting Bar,</p>
                        <p>Fullstack Software Developer</p>
                    </div>
                    <div className={style.homeProjAndResume}>
                        <button>Check My Projects</button>
                        <button>Download My Resume</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home