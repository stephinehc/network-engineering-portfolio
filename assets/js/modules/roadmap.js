/* ==========================================================================
   Roadmap Module
========================================================================== */

'use strict';

const RoadmapModule = {

    async load() {

        try {

            const response = await fetch(
                'data/roadmap.json'
            );

            const roadmap = await response.json();

            this.render(roadmap);

        }

        catch (error) {

            console.error(error);

        }

    },

    render(items) {

        const container = document.querySelector(
            '[data-roadmap-container]'
        );

        if (!container) return;

        container.innerHTML = '';

        const template = document.getElementById(
            'roadmap-card-template'
        );

        items.forEach(item => {

            const clone = template.content.cloneNode(true);

            clone.querySelector(
                '[data-roadmap-title]'
            ).textContent = item.title;

            clone.querySelector(
                '[data-roadmap-description]'
            ).textContent = item.description;

            clone.querySelector(
                '[data-roadmap-link]'
            ).href = item.repository;

            const topics = clone.querySelector(
                '[data-roadmap-topics]'
            );

            (item.topics || []).forEach(topic => {

                const li = document.createElement('li');

                li.textContent = topic;

                topics.appendChild(li);

            });

            container.appendChild(clone);

        });

    }

};
window.RoadmapModule = RoadmapModule;
