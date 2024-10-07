import React from 'react'

import ninico from '../../Assets/ninico.jpg';
import wisty from '../../Assets/wisty.jpeg';

function Projects() {

    const projectList = [
        { title: 'Project 1', img: 'ninico.jpg', description: 'Ninico' },
        { title: 'Project 2', img: 'wisty.jpeg', description: 'Wristy' },
    ];

    return (
        <div>
            <section id="projects" className="py-20 bg-gray-100">
                <div className="container mx-auto px-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Projects</h2>
                    <div className="grid grid-cols md:grid-cols-1 lg:grid-cols-2 gap-8">
                        {projectList.map((project, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                                <img src={project.img} alt="" />
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
