/* ==========================================================================
   Resume Module
   Version: 2.0.0
========================================================================== */

'use strict';

const ResumeModule = {

    async load() {

        try {

            const response =
                await fetch('../assets/data/resume.json');

            const data =
                await response.json();

            this.render(data);

        }

        catch (error) {

            console.error(
                'Resume failed to load.',
                error
            );

        }

    },

    render(data) {

        /* ==========================================================
           HERO
        ========================================================== */

        const setText = (selector, value) => {

            const element =
                document.querySelector(selector);

            if (element)
                element.textContent = value;

        };

        const setHref = (selector, value) => {

            const element =
                document.querySelector(selector);

            if (element)
                element.href = value;

        };

        setText(
            '[data-resume-name]',
            data.profile.name
        );

        setText(
            '[data-resume-title]',
            data.profile.title
        );

        setText(
            '[data-career-objective]',
            data.careerObjective
        );

        setText(
            '[data-resume-email]',
            data.profile.email
        );

        setText(
            '[data-resume-phone]',
            data.profile.phone
        );

        setText(
            '[data-resume-location]',
            data.profile.location
        );

        setHref(
            '[data-resume-github]',
            data.profile.github
        );

        setHref(
            '[data-resume-github-footer]',
            data.profile.github
        );

        /* ==========================================================
           EXPERIENCE
        ========================================================== */

        const expContainer =
            document.getElementById(
                'resume-experience'
            );

        const expTemplate =
            document.getElementById(
                'experience-template'
            );

        if (expContainer && expTemplate) {

            expContainer.innerHTML = '';

            data.experience.forEach(exp => {

                const clone =
                    expTemplate.content.cloneNode(true);

                clone.querySelector(
                    '[data-exp-position]'
                ).textContent =
                    exp.position;

                clone.querySelector(
                    '[data-exp-company]'
                ).textContent =
                    exp.company;

                clone.querySelector(
                    '[data-exp-period]'
                ).textContent =
                    exp.period;

                const list =
                    clone.querySelector(
                        '[data-exp-list]'
                    );

                exp.responsibilities.forEach(item => {

                    const li =
                        document.createElement('li');

                    li.textContent = item;

                    list.appendChild(li);

                });

                expContainer.appendChild(clone);

            });

        }

        /* ==========================================================
           EDUCATION
        ========================================================== */

        const eduContainer =
            document.getElementById(
                'resume-education'
            );

        const eduTemplate =
            document.getElementById(
                'education-template'
            );

        if (eduContainer && eduTemplate) {

            eduContainer.innerHTML = '';

            data.education.forEach(edu => {

                const clone =
                    eduTemplate.content.cloneNode(true);

                clone.querySelector(
                    '[data-edu-degree]'
                ).textContent =
                    edu.degree;

                clone.querySelector(
                    '[data-edu-school]'
                ).textContent =
                    edu.school;

                clone.querySelector(
                    '[data-edu-year]'
                ).textContent =
                    edu.year;

                eduContainer.appendChild(clone);

            });

        }

    }

};

window.ResumeModule = ResumeModule;
