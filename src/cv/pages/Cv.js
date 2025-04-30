import React from 'react';
import './Cv.css';
import ButtomX from '../../shared/components/button-x/button-x';

const data = {
    info: {
        name: "Julio Cesar Hernández De la Torre",
        title: "Desarrollador FullStack",
        phone: "5510514667",
        email: "julioht80@gmail.com",
        location: "Cuernavaca, Morelos, Mex"
    },
    profile: "Desarrollador de software SR con más de 9 años de experiencia en backend y frontend, especializado en JavaScript y Java. Conocimiento en la gestión de servidores y bases de datos. He liderado la restructuración y optimización de sistemas. Destaco por mi habilidad para resolver problemas complejos y trabajar en equipo de manera eficaz.",
    experience: [
        {
            title: 'Desarrollador Full Stack (MEAN)',
            company: 'Medical Minds',
            time: '2016 - Actualidad',
            descrripction: 'Desarrollo de aplicaciones para el sector salud, coach técnico de un equipo de 7 personas, administración de servidores y ambientes productivos.',
            // skills: [
            //     'AngularJS', 'Angular', 'React', 'NodeJS', 'MongoDB', 'PostgreSQL', 'Python', 'Django', 'Azure', 
            //     'Google Cloud', 'Mocha','Chai'
            // ],
            skills: [
                { name: "AngularJS", icon: "angular" },
                { name: "Angular", icon: "angular" },
                { name: "React", icon: "react" },
                { name: "NodeJS", icon: "nodejs" },
                { name: "MongoDB", icon: "mongodb" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "Python", icon: "python" },
                { name: "Django", icon: "django" },
                { name: "Azure", icon: "azure" },
                { name: "Google Cloud", icon: "google" },
                { name: "Jest", icon: "jest" }
            ]
        },
        {
            title: 'Android, Web Developer',
            company: 'Freelance',
            time: 'Enero 2017 - Noviembre 2020',
            descrripction: 'Publicación de aplicaciones propias en Google Play y AppStore, administración de servidores en Google Cloud, envio de notificaciones con Firebase',
            // skills: [
            //     'Android', 'Java', 'Firebase', 'Google Cloud', 'NodeJS', 'MongoDB', 'PostgreSQL', 'MySQL'
            // ]
            skills: [
                { name: "Android", icon: "android" },
                { name: "Java", icon: "java" },
                { name: "Firebase", icon: "firebase" },
                { name: "Google Cloud", icon: "google" },
                { name: "NodeJS", icon: "nodejs" },
                { name: "MongoDB", icon: "mongodb" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "MySQL", icon: "mysql" }
            ]
        },
        {
            title: 'Android Developer',
            company: 'Inteligencia Aplicada',
            time: 'Diciembre 2015 - Octubre 2016',
            descrripction: 'Desarrollo de aplicaciones para el sector de seguridad publica. Android Studio, GPS, SQLite, WebView, Transmisión de vídeo por streaming, eventos en tiempo real con Socket.IO., AngularJS',
            // skills: [
            //     'Android', 'Java', 'SQLite', 'WebView', 'Socket.IO', 'AngularJS'
            // ]
            skills: [
                { name: "Android", icon: "android" },
                { name: "Java", icon: "java" },
                { name: "SQLite", icon: "sqlite" },
                { name: "WebView" },
                { name: "Socket.IO", icon: "socketio" },
                { name: "AngularJS", icon: "angular" }
            ]
        },
        {
            title: 'Back-end Developer',
            company: 'RYNDEM Studios',
            time: 'Mayo 2015 - Diciembre 2015',
            descrripction: 'Desarrollador back-end con Java Spring Framework, Java, SQL Server, Spring Framework, Web serivces',
            // skills: [
            //     'Java', 'Spring Framework', 'SQL Server', 'Web Services'
            // ]
            skills: [
                { name: "Java", icon: "java" },
                { name: "Spring Framework", icon: "spring" },
                { name: "SQL Server", icon: "sqlserver" },
                { name: "Web Services" }
            ]
        },
        {
            title: 'Desarrollador de aplicaciones',
            company: 'Linesoft',
            time: 'Enero 2015 - Mayo 2015',
            descrripction: 'Java Struts 2, MySQL, JavaScript',
            // skills: [
            //     'Java', 'Struts 2', 'MySQL', 'JavaScript'
            // ]
            skills: [
                { name: "Java", icon: "java" },
                { name: "Struts 2" },
                { name: "MySQL", icon: "mysql" },
                { name: "JavaScript", icon: "js" }
            ]
        },
        {
            title: 'Back-end Developer',
            company: 'Morelosoft',
            time: 'Enero 2014 - Enero 2015',
            descrripction: 'Node.js, Erlang, MongoDB, Riak Database, Android.',
            // skills: [
            //     'Node.js', 'Erlang', 'MongoDB', 'Riak Database', 'Android'
            // ]
            skills: [
                { name: "Node.js", icon: "nodejs" },
                { name: "Erlang" },
                { name: "MongoDB", icon: "mongodb" },
                { name: "Riak Database" },
                { name: "Android", icon: "android" }
            ]
        }
    ],
    education: [
        {
            title: 'Ingeniería en Tecnologías de la Información',
            time: '2011 - 2014',
            institution: 'Universidad Tecnológica Emiliano Zapata',
            location: 'Emiliano Zapata, Morelos, Mex'
        }
    ]
};

export default function About() {

    return (
        <section className="section">

            {/* <div className="j-cv-download">
                <ButtomX
                    text="Descargar"
                    svg="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                />
            </div> */}
            
            
            <div className="container j-cv-container">
                <div className="j-cv">
                    <h1 className="title">{data.info.name}</h1>
                    <div className="columns">
                        <h2 className="subtitle column">{data.info.title}</h2>
                        <p className="column j-text-right"> {data.info.phone} · <a href={"mailto:" + data.info.email} class="a" target="_blank" rel="noreferrer">{data.info.email}</a> · {data.info.location}</p>
                    </div>
                    <hr/>
                    <h3 className="title">PERFIL</h3>
                    <p >
                        {data.profile}
                    </p>
                    <hr/>
                    <h3 className="title">EXPERIENCIA</h3>
                    {data.experience.map((exp, index) => (
                        <div key={index} className='mt-5'>
                            <h4 className="title">{exp.title}</h4>
                            <p className="subtitle">{exp.company}: <span className="j-text-right">{exp.time}</span></p>
                            <p>{exp.descrripction}</p>
                            {/* <p>
                                {exp.skills.map((skill, idx) => (
                                    <span className="icon j-portfolio-icon" key={idx}>
                                        <img 
                                            src={`${process.env.PUBLIC_URL}/img/skills/${skill.icon}.png`} 
                                        />
                                        {skill.name} 
                                    </span>
                                ))}
                            </p> */}
                            <div className="j-cv-skills">
                                {exp.skills.map((skill, idx) => (
                                    <div className="j-cv-skills">
                                        <span className="icon j-cv-skills-icon" key={idx}>
                                            {
                                                skill.icon ?
                                                <img 
                                                    src={`${process.env.PUBLIC_URL}/img/skills/${skill.icon}.png`} 
                                                    alt={skill.name}
                                                />
                                                : ''
                                            }
                                            
                                        </span>
                                        {skill.name} {idx < exp.skills.length - 1 ? " ·" : ""}
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                    <hr/>
                    <h3 className="title">FORMACIÓN</h3>
                    {data.education.map((edu, index) => (
                        <div key={index} className='mt-5'>
                            <h4 className="title">{edu.title}</h4>
                            <p className="subtitle">{edu.institution} <span className="j-text-right">{edu.time}</span></p>
                            <p>{edu.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
       
    );
}