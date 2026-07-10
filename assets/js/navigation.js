/* ==========================================================================
   Network Engineering Portfolio
   Navigation Controller
   Version: 0.2.0
========================================================================== */

'use strict';

const Navigation = {

    navLinks: [],

    sections: [],

    header: null,

    init(){

        this.header = document.querySelector('.site-header');

        this.navLinks = document.querySelectorAll('.nav-links a');

        this.sections = document.querySelectorAll('section[id]');

        this.initializeSmoothScroll();

        this.initializeActiveNavigation();

        this.initializeStickyHeader();

    },

/* ==========================================================================
   SMOOTH SCROLL
========================================================================== */

    initializeSmoothScroll(){

        this.navLinks.forEach(link=>{

            link.addEventListener('click',(event)=>{

                const href = link.getAttribute('href');

                if(!href.startsWith('#')){

                    return;

                }

                event.preventDefault();

                const target = document.querySelector(href);

                if(!target){

                    return;

                }

                target.scrollIntoView({

                    behavior:'smooth',

                    block:'start'

                });

            });

        });

    },

/* ==========================================================================
   ACTIVE SECTION
========================================================================== */

    initializeActiveNavigation(){

        if(this.sections.length===0){

            return;

        }

        const observer = new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(!entry.isIntersecting){

                        return;

                    }

                    this.navLinks.forEach(link=>{

                        link.classList.remove('active');

                    });

                    const active = document.querySelector(

                        `.nav-links a[href="#${entry.target.id}"]`

                    );

                    if(active){

                        active.classList.add('active');

                    }

                });

            },

            {

                threshold:.45

            }

        );

        this.sections.forEach(section=>{

            observer.observe(section);

        });

    },

/* ==========================================================================
   STICKY HEADER
========================================================================== */

    initializeStickyHeader(){

        window.addEventListener('scroll',()=>{

            if(window.scrollY>25){

                this.header.classList.add('scrolled');

            }else{

                this.header.classList.remove('scrolled');

            }

        });

    }

};

/* ==========================================================================
   INITIALIZE
========================================================================== */

document.addEventListener(

    'DOMContentLoaded',

    ()=>{

        Navigation.init();

    }

);
