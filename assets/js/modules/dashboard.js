/* ==========================================================================
   Dashboard Module
   Version: 0.3.0
========================================================================== */

'use strict';

const DashboardModule = {

    async load(){

        try{

            const profileRequest = fetch('data/profile.json');
            const projectsRequest = fetch('data/projects.json');
            const certificationsRequest = fetch('data/certifications.json');

            const [

                profileResponse,
                projectResponse,
                certificationResponse

            ] = await Promise.all([

                profileRequest,
                projectsRequest,
                certificationsRequest

            ]);

            const profile = await profileResponse.json();
            const projects = await projectResponse.json();
            const certifications = await certificationResponse.json();

            this.render(

                profile,
                projects,
                certifications

            );

        }

        catch(error){

            console.error(

                'Dashboard failed to load.',

                error

            );

        }

    },

    render(profile,projects,certifications){

        this.setValue(

            '[data-dashboard-projects]',

            projects.length

        );

        this.setValue(

            '[data-dashboard-technologies]',

            profile.statistics.technologies

        );

        this.setValue(

            '[data-dashboard-certifications]',

            certifications.length

        );

        this.setValue(

            '[data-dashboard-labs]',

            profile.statistics.packetTracerLabs

        );

    },

    setValue(selector,value){

        const element=document.querySelector(selector);

        if(element){

            element.textContent=value;

        }

    }

};
window.DashboardModule = DashboardModule;
