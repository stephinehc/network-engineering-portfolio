'use strict';

const CertificationsModule = {

    async load(){

        try{

            const response = await fetch(

                'data/certifications.json'

            );

            const certifications = await response.json();

            this.render(certifications);

        }

        catch(error){

            console.error(error);

        }

    },

    render(certifications){

        const container=document.querySelector(

            '[data-certifications-container]'

        );

        if(!container){

            return;

        }

        container.innerHTML='';

        certifications.forEach(cert=>{

            const card=document.createElement('article');

            card.className='card';

            card.innerHTML=`

                <img
                    src="${cert.badge}"
                    alt="${cert.name}"
                    class="cert-badge"
                >

                <h3>${cert.name}</h3>

                <p>${cert.issuer}</p>

                <a
                    href="${cert.verification}"
                    target="_blank"
                    class="btn btn-primary"
                >

                    Verify

                </a>

            `;

            container.appendChild(card);

        });

    }

};
