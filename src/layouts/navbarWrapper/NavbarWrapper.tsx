import Navbar from "../../components/navbar/Navbar";
import NextPage from "../../components/nextPage/NextPage";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation, Outlet } from 'react-router-dom';
import styles from "./tranistions.module.scss";

function NavbarWrapper() {
    const location = useLocation();

    return (
        <>
            <div className={styles.transitionContainer}>
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames={{
                            enter: styles.fadeEnter,
                            enterActive: styles.fadeEnterActive,
                            exit: styles.fadeExit,
                            exitActive: styles.fadeExitActive,
                        }}
                        timeout={300}
                    >
                        <div className={styles.routeWrapper}>
                            <Navbar />
                            <NextPage />
                            <Outlet />
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </>
    );
}

export default NavbarWrapper;