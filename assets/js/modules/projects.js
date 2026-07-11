/* ==========================================================================
   Projects Module
   Version: 1.0.0
========================================================================== */

'use strict';

const ProjectsModule = {

    async load() {

        try {

            const response = await fetch('data/projects.json');

            const projects = await response.json();

            this.render(projects);

        }

        catch (error) {

            console.error('Projects failed to load.', error);

        }

    },

    render(projects) {

        const container = document.querySelector(
            '[data-projects-container]'
        );

        if (!container) return;

        container.innerHTML = '';

        const template = document.getElementById(
            'project-card-template'
        );

        projects.forEach(project => {

            const clone = template.content.cloneNode(true);

            clone.querySelector('.project-thumbnail').src =
                project.thumbnail;

            clone.querySelector('.project-thumbnail').alt =
                project.title;

            clone.querySelector('[data-project-title]').textContent =
                project.title;

            clone.querySelector('[data-project-description]').textContent =
                project.description || '';

            clone.querySelector('[data-project-difficulty]').textContent =
                project.difficulty;

            clone.querySelector('[data-project-link]').href =
                project.repository;

            const list = clone.querySelector(
                '[data-project-technologies]'
            );

            (project.technologies || []).forEach(item => {

                const li = document.createElement('li');

                li.textContent = item;

                list.appendChild(li);

            });

            container.appendChild(clone);

        });

    }

};
window.ProjectsModule = ProjectsModule;
