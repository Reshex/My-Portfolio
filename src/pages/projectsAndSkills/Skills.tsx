import skillsStyle from "./skills.module.scss";
import { FaGitSquare, FaHtml5, FaBootstrap, FaCss3Alt, FaNpm, FaPython, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";

interface Skill {
    name: string;
    percent: number;
    Icon: React.ComponentType<any>
}

function Skills() {
    const mainSkills: Skill[] = [
        { name: "Node.js", percent: 80, Icon: FaGitSquare },
        { name: "HTML5", percent: 85, Icon: FaHtml5 },
        { name: "TypeScript", percent: 80, Icon: BiLogoTypescript },
        { name: "JavaScript", percent: 85, Icon: IoLogoJavascript },
        { name: "React", percent: 85, Icon: FaReact },
        { name: "CSS", percent: 70, Icon: FaCss3Alt }
    ];

    const smallerSkills: Skill[] = [
        { name: "Mongo", percent: 80, Icon: SiMongodb },
        { name: "MySQL", percent: 60, Icon: DiMysql },
        { name: "Bootstrap", percent: 75, Icon: FaBootstrap },
        { name: "SASS", percent: 85, Icon: RiTailwindCssFill },
        { name: "Express", percent: 85, Icon: FaNpm },
        { name: "Git", percent: 80, Icon: FaGitSquare },
        { name: "Python", percent: 70, Icon: FaPython },
        { name: "NPM", percent: 90, Icon: FaNpm }
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
                    className={isSmaller ? skillsStyle.smaller : ''}
                >
                    <svg viewBox="-10 -10 220 220">
                        <g fill="none" strokeWidth="3" transform="translate(100,100)">
                        </g>
                        <skill.Icon />

                    </svg>
                    <svg className={skillsStyle.skillIconParent} viewBox="-10 -10 220 220">
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
            <ul className={`${skillsStyle.progress} ${skillsStyle.smallerSkillSet}`}>
                {renderSkillCircles(smallerSkills, true)}
            </ul>
            <ul className={skillsStyle.progress}>
                {renderSkillCircles(mainSkills)}
            </ul>
        </>
    );
}

export default Skills;
