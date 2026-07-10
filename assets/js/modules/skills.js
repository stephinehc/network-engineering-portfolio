/* ==========================================================================
   Skills Module
========================================================================== */

'use strict';

const SkillsModule = {

    async load() {

        try {

            const response =
                await fetch('data/skills.json');

            const skills =
                await response.json();

            this.render(skills);

        }

        catch (error) {

            console.error(error);

        }

    },

    render(skills) {

        const tbody = document.querySelector(
            '[data-skills-table]'
        );

        if (!tbody) return;

        tbody.innerHTML = '';

        const template = document.getElementById(
            'skill-row-template'
        );

        skills.forEach(skill => {

            const clone =
                template.content.cloneNode(true);

            clone.querySelector(
                '[data-skill-category]'
            ).textContent = skill.category;

            clone.querySelector(
                '[data-skill-name]'
            ).textContent = skill.technology;

            clone.querySelector(
                '[data-skill-level]'
            ).textContent =
                '★'.repeat(skill.level);

            clone.querySelector(
                '[data-skill-projects]'
            ).textContent =
                (skill.projects || []).join(', ');

            tbody.appendChild(clone);

        });

    }

};
