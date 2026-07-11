/* ==========================================================================
   Profile Module
   Version: 0.3.0
========================================================================== */

'use strict';

const ProfileModule = {

    async load(){

        try{

            const response = await fetch('data/profile.json');

            const profile = await response.json();

            this.render(profile);

        }

        catch(error){

            console.error(

                'Unable to load profile.',

                error

            );

        }

    },

    render(profile){

        this.setText(

            '[data-profile-name]',

            profile.name

        );

        this.setText(

            '[data-profile-title]',

            profile.title

        );

        this.setText(

            '[data-profile-headline]',

            profile.headline

        );

        this.setText(

            '[data-profile-location]',

            profile.location

        );

        this.setText(

            '[data-profile-summary]',

            profile.summary

        );

        const image=document.querySelector(

            '[data-profile-photo]'

        );

        if(image){

            image.src=profile.photo;

            image.alt=profile.name;

        }

    },

    setText(selector,value){

        const element=document.querySelector(selector);

        if(element){

            element.textContent=value;

        }

    }

};
window.ProfileModule = ProfileModule;
