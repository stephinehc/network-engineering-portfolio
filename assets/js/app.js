/* ==========================================================================
   Network Engineering Portfolio
   Application Controller
   Version: 0.2.0
========================================================================== */

'use strict';

/* ==========================================================================
   APPLICATION
========================================================================== */

const PortfolioApp = {

    version: '0.2.0',

    initialized: false,

    async init(){

        if(this.initialized){

            return;

        }

        console.log(
            `Network Engineering Portfolio v${this.version}`
        );

        this.initialized = true;

        this.initializeLucide();

        this.initializeRevealAnimation();

        this.initializeTooltips();

        this.initializeCounters();

        this.initializeExternalLinks();

        this.initializeCurrentYear();

    },

/* ==========================================================================
   LUCIDE ICONS
========================================================================== */

    initializeLucide(){

        if(window.lucide){

            lucide.createIcons();

        }

    },

/* ==========================================================================
   SCROLL REVEAL
========================================================================== */

    initializeRevealAnimation(){

        const items = document.querySelectorAll('.reveal');

        if(items.length===0){

            return;

        }

        const observer = new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        entry.target.classList.add('active');

                    }

                });

            },

            {

                threshold:.15

            }

        );

        items.forEach(item=>{

            observer.observe(item);

        });

    },

/* ==========================================================================
   TOOLTIPS
========================================================================== */

    initializeTooltips(){

        const elements = document.querySelectorAll('[data-tooltip]');

        elements.forEach(element=>{

            element.title = element.dataset.tooltip;

        });

    },

/* ==========================================================================
   COUNTERS
========================================================================== */

    initializeCounters(){

        const counters = document.querySelectorAll('[data-counter]');

        counters.forEach(counter=>{

            const target = Number(counter.dataset.counter);

            let value = 0;

            const timer = setInterval(()=>{

                value++;

                counter.textContent = value;

                if(value>=target){

                    clearInterval(timer);

                }

            },20);

        });

    },

/* ==========================================================================
   EXTERNAL LINKS
========================================================================== */

    initializeExternalLinks(){

        document

            .querySelectorAll('a[target="_blank"]')

            .forEach(link=>{

                link.rel="noopener noreferrer";

            });

    },

/* ==========================================================================
   FOOTER YEAR
========================================================================== */

    initializeCurrentYear(){

        const year=document.getElementById('current-year');

        if(year){

            year.textContent=new Date().getFullYear();

        }

    }

};

/* ==========================================================================
   DOCUMENT READY
========================================================================== */

document.addEventListener(

    'DOMContentLoaded',

    ()=>{

        PortfolioApp.init();

    }

);
