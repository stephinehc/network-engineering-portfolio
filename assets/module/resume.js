/* ==========================================================================
   Resume Module
========================================================================== */

'use strict';

const ResumeModule = {

    async load() {

        try {

            const response = await fetch('../assets/data/resume.json');

            const data = await response.json();

            this.render(data);

        }

        catch (error) {

            console.error(error);

        }

    },

    render(data) {

        document.querySelector('[data-resume-name]').textContent =
            data.profile.name;

        document.querySelector('[data-resume-title]').textContent =
            data.profile.title;

        document.querySelector('[data-career-objective]').textContent =
            data.careerObjective;

    }

};

window.ResumeModule = ResumeModule;
