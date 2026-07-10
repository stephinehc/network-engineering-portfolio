'use strict';

const RoadmapModule = {

    async load(){

        try{

            const response = await fetch(

                'data/roadmap.json'

            );

            const roadmap = await response.json();

            this.render(roadmap);

        }

        catch(error){

            console.error(error);

        }

    },

    render(items){

        const container=document.querySelector(

            '[data-roadmap-container]'

        );

        if(!container){

            return;

        }

        container.innerHTML='';

        items.forEach(item=>{

            const card=document.createElement('article');

            card.className='roadmap-card';

            card.innerHTML=`

                <h3>${item.title}</h3>

                <p>${item.description}</p>

                <a
                    href="${item.repository}"
                    target="_blank"
                    class="btn btn-outline"
                >

                    View Repository

                </a>

            `;

            container.appendChild(card);

        });

    }

};
