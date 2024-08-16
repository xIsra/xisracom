import {
    FaCode,
    FaCss3Alt,
    FaGithub,
    FaHtml5,
    FaJava,
    FaLinux,
    FaLock,
    FaNodeJs,
    FaPython,
    FaReact,
    FaUser
} from "react-icons/fa";
import {SiDocker, SiJavascript, SiKubernetes, SiMui, SiTailwindcss, SiTypescript, SiUbuntu} from "react-icons/si";
import {useMemo} from "react";
import {FaMapLocation} from "react-icons/fa6";

let icons = [
    FaReact,
    FaNodeJs,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    SiJavascript,
    SiTypescript,
    SiDocker,
    FaJava,
    FaCode,
    FaLinux,
    FaMapLocation,
    SiMui,
    SiTailwindcss,
    FaGithub,
    SiUbuntu,
    SiKubernetes,
    FaUser,
    FaLock
];
icons = icons.concat(icons); // Duplicate the icons to have more variety


export default function FloatingIcons() {

    const iconPositions = useMemo(() => {
        const gridSize = Math.ceil(Math.sqrt(icons.length));
        const positions = [];

        for (let i = 0; i < icons.length; i++) {
            const row = Math.floor(i / gridSize);
            const col = i % gridSize;
            const top = (row + Math.random()) * (100 / gridSize);
            const left = (col + Math.random()) * (100 / gridSize);
            positions.push({top, left});
        }

        return positions;
    }, []);

    return (
        <>
            {iconPositions.map((pos, index) => {
                const IconComponent = icons[index];
                return (
                    <IconComponent
                        key={index}
                        data-aos-delay={200}
                        className={`fixed text-red-400 opacity-15 ${Math.random() > 0.5 ? 'animate-moveIcon' : 'animate-floatIcon'} ${getRandomBlurClassName()}`}
                        style={{
                            top: `${pos.top + 10}%`,
                            left: `${pos.left}%`,
                            transform: `translate(-50%, -50%)`,
                            fontSize: `${Math.random() * 3 + 1}rem`,
                            animationDuration: `${Math.random() * 10 + 10}s`, // Random duration between 30s and 60s
                            animationTimingFunction: 'ease-in-out',
                        }}
                    />
                );
            })}
        </>
    );
}


function getRandomBlurClassName() {
    const blurs = ['blur-none', 'blur-[1px]', 'blur-[2px]', 'blur-[3px]'];
    return blurs[Math.floor(Math.random() * blurs.length)];
}