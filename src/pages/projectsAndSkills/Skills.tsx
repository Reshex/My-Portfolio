import progress from "./progressBar.module.scss";
import { FaGitSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
interface Skill {
    name: string;
    percent: number;
}

function Skills() {
    const mainSkills = [
        { name: "Node.js", percent: 80 },
        { name: "HTML5", percent: 85 },
        { name: "TypeScript", percent: 80 },
        { name: "JavaScript", percent: 85 },
        { name: "React", percent: 85 },
        { name: "CSS", percent: 70 }
    ];

    const smallerSkills = [
        { name: "MongoDB", percent: 80 },
        { name: "MySQL", percent: 60 },
        { name: "Bootstrap", percent: 75 },
        { name: "SASS", percent: 85 },
        { name: "Express.js", percent: 85 },
        { name: "Git", percent: 80 }
    ];

    const circleRadius = 100;
    const circleCircumference = 2 * Math.PI * circleRadius;

    const renderSkillCircles = (skills: Skill[], isSmaller = false) => {
        return skills.map(skill => {
            const strokeDashoffset = circleCircumference * (1 - skill.percent / 100);
            return (
                <li
                    key={skill.name}
                    data-name={skill.name}
                    data-percent={`${skill.percent}%`}
                    className={isSmaller ? progress.smaller : ''}
                >
                    <svg viewBox="-10 -10 220 220">
                        <g fill="none" strokeWidth="3" transform="translate(100,100)">
                            <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
                            <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
                            <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
                            <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
                            <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)" />
                            <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
                        </g>
                    </svg>
                    <svg viewBox="-10 -10 220 220">
                        <path
                            d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
                            style={{
                                strokeDasharray: circleCircumference,
                                strokeDashoffset: strokeDashoffset
                            }}
                        ></path>
                    </svg>
                </li>
            );
        });
    };

    return (
        <>
            <ul className={`${progress.progress} ${progress.smallerSkillSet}`}>
                {renderSkillCircles(smallerSkills, true)}
            </ul>
            <ul className={progress.progress}>
                {renderSkillCircles(mainSkills)}
            </ul>
        </>
    );
}

export default Skills;
