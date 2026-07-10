/* ==========================================================================
   Network Engineering Portfolio
   Theme Controller
   Version: 0.2.0
========================================================================== */

'use strict';

const Theme = {

    storageKey: 'network-portfolio-theme',

    init(){

        this.loadTheme();

        this.initializeToggle();

    },

/* ==========================================================================
   LOAD THEME
========================================================================== */

    loadTheme(){

        const savedTheme = localStorage.getItem(this.storageKey);

        if(savedTheme){

            document.documentElement.dataset.theme = savedTheme;

            return;

        }

        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;

        document.documentElement.dataset.theme =
            prefersDark ? 'dark' : 'light';

    },

/* ==========================================================================
   SAVE THEME
========================================================================== */

    saveTheme(theme){

        localStorage.setItem(this.storageKey, theme);

    },

/* ==========================================================================
   TOGGLE
========================================================================== */

    initializeToggle(){

        const button = document.querySelector('[data-theme-toggle]');

        if(!button){

            return;
        }

        button.addEventListener('click',()=>{

            const current = document.documentElement.dataset.theme;

            const next =
                current === 'dark'
                ? 'light'
                : 'dark';

            document.documentElement.dataset.theme = next;

            this.saveTheme(next);

            this.updateIcon(button,next);

        });

        this.updateIcon(
            button,
            document.documentElement.dataset.theme
        );

    },

/* ==========================================================================
   ICON
========================================================================== */

    updateIcon(button,theme){

        const icon = button.querySelector('i');

        if(!icon){

            return;
        }

        icon.setAttribute(

            'data-lucide',

            theme === 'dark'
                ? 'sun'
                : 'moon'

        );

        if(window.lucide){

            lucide.createIcons();

        }

    }

};

/* ==========================================================================
   INITIALIZE
========================================================================== */

document.addEventListener(

    'DOMContentLoaded',

    ()=>{

        Theme.init();

    }

);
