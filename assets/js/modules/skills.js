'use strict';

const SkillsModule = {

    async load(){

        try{

            const response = await fetch(

                'data/skills.json'

            );

            const skills = await response.json();

            this.render(skills);

        }

        catch(error){

            console.error(error);

        }

    },

    render(skills){

        const tbody=document.querySelector(

            '[data-skills-table]'

        );

        if(!tbody){

            return;

        }

        tbody.innerHTML='';

        skills.forEach(skill=>{

            const row=document.createElement('tr');

            row.innerHTML=`

                <td>${skill.category}</td>

                <td>${skill.technology}</td>

                <td>${'★'.repeat(skill.level)}</td>

                <td>${skill.projects.join(', ')}</td>

            `;

            tbody.appendChild(row);

        });

    }

};
