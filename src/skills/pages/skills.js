import React from 'react';
import 'bulma/css/bulma.min.css';
import './skills.css';

const skills = [
    {
        group: "Servicios en la nube",
        items: [
            { name: "Google", experience: 8, progress: 90, icon: "google" },
            { name: "AWS", experience: 8, progress: 90, icon: "amazon" },
            { name: "Azure", experience: 8, progress: 90, icon: "azure" },
            { name: "Firebase", experience: 8, progress: 90, icon: "firebase" },
        ]
    },
    {
        group: "Frameworks, Tecnologias y Librerías",
        items: [
            { name: "Angular", experience: 5, progress: 90, icon: "angular" },
            { name: "React", experience: 3, progress: 65, icon: "react" },
            { name: "NodeJS", experience: 7, progress: 90, icon: "nodejs" },
            { name: "Django", experience: 2, progress: 50, icon: "django" },
            { name: "Ionic", experience: 1, progress: 50, icon: "ionic" },
            { name: "Android", experience: 5, progress: 80, icon: "android" },
            { name: "Swift", experience: 0.5, progress: 50, icon: "swift" },
            { name: "AngularJS", experience: 8, progress: 90, icon: "angular" },
        ]
    },
    {
        group: "Bases de Datos",
        items: [
            { name: "MongoDB", experience: 5, progress: 80, icon: "mongodb" },
            { name: "MySQL", experience: 8, progress: 90, icon: "mysql" },
            { name: "PostgreSQL", experience: 5, progress: 80, icon: "postgresql" },
            { name: "SQLServer", experience: 8, progress: 90, icon: "sqlserver" },
            { name: "SQLite", experience: 5, progress: 80, icon: "sqlite" },
        ]
    },
    {
        group: "Lenguajes",
        items: [
            { name: "JavaScript", experience: 8, progress: 90, icon: "js" },
            { name: "TypeScript", experience: 5, progress: 80, icon: "ts" },
            { name: "Python", experience: 5, progress: 80, icon: "python" },
            { name: "Java", experience: 8, progress: 90, icon: "java" },
            { name: "HTML", experience: 9, progress: 98, icon: "html" },
            { name: "CSS", experience: 9, progress: 98, icon: "css" },
            { name: "SASS", experience: 9, progress: 98, icon: "sass" },
        ]
    },
    {
        group: "Otros",
        items: [
            { name: "NGINX", experience: 8, progress: 90, icon: "nginx" }
        ]
    }
];



export default function Skills() {

    const getColorProgress = (progress) => {
        if (progress >= 80) {
            return 'is-success';
        } else if (progress >= 60) {
            return 'is-info';
        } else {
            return 'is-warning';
        }
    }

    return (
        <section className="section">
            <div className="container">
                {skills.map((skillGroup, index) => (
                    <div key={index} className='mb-6'>
                        <h2 className="title">{skillGroup.group}</h2>
                        <div className="columns is-multiline">
                            {skillGroup.items.map((skill, idx) => (
                                <div className="column is-one-third-tablet is-one-quarter-desktop" key={idx}>
                                    <div className="card">
                                        <header className="card-header">
                                            <p className="card-header-title">
                                                <span className="icon mr-2">
                                                    <img src={`/img/skills/${skill.icon}.png`} alt={skill.name} /> 
                                                </span>
                                                {skill.name}
                                                <span className="j-text-right j-w-100">{skill.experience} años</span>
                                            </p>
                                        </header>
                                        <div className="card-content" style={{padding: '10px'}}>
                                            <div className="content">
                                                <progress className={`progress ${getColorProgress(skill.progress)}`} value={skill.progress} max="100">{skill.progress}%</progress>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}