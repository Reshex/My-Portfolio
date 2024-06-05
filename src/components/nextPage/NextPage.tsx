import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import style from './nextPage.module.scss';

function NextPage() {
    const paths = ['/', '/about', '/projectsAndSkills', '/contact'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleClick = () => {
        if (currentIndex < paths.length - 1) {
            navigate(paths[currentIndex + 1]);
            setCurrentIndex(currentIndex + 1);
        } else {
            navigate(paths[0]);
            setCurrentIndex(0);
        }
    };

    return (
        <div className={style.arrowContainer} onClick={handleClick}>
            <AiOutlineArrowRight className={style.arrowIcon} />
        </div>
    );
}

export default NextPage;
