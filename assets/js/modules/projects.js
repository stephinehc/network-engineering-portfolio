/* ==========================================================================
   Projects Module
========================================================================== */

'use strict';

const ProjectsModule = {

    projects:[],

    async load(){

        try{

            const response = await fetch(

                'data/projects.json'

            );

            this.projects = await response.json();

            this.render();

        }

        catch(error){

            console.error(error);

        }

    },

    render(){

        const container=document.querySelector(

            '[data-projects-container]'

        );

        if(!container){

            return;

        }

        container.innerHTML='';

        this.projects.forEach(project=>{

            container.appendChild(

                this.createCard(project)

            );

        });

    },

    createCard(project){

        const card=document.createElement('article');

        card.className='card project-card';

        card.innerHTML=`

            <img
                src="${project.thumbnail}"
                alt="${project.title}"
                class="project-thumbnail"
            >

            <div class="card-body">

                <h3>${project.title}</h3>

                <p>${project.description || ''}</p>

                <span class="badge badge-primary">

                    ${project.difficulty}

                </span>

                <div class="mt-3">

                    <a
                        href="${project.repository}"
                        target="_blank"
                        class="btn btn-primary"
                    >

                        View Repository

                    </a>

                </div>

            </div>

        `;

        return card;

    }

};
