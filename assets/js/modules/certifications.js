/* ==========================================================================
   Certifications Module
========================================================================== */

'use strict';

const CertificationsModule = {

    async load() {

        try {

            const response = await fetch(
                'data/certifications.json'
            );

            const certifications =
                await response.json();

            this.render(certifications);

        }

        catch (error) {

            console.error(error);

        }

    },

    render(certifications) {

        const container = document.querySelector(
            '[data-certifications-container]'
        );

        if (!container) return;

        container.innerHTML = '';

        const template = document.getElementById(
            'certification-card-template'
        );

        certifications.forEach(cert => {

            const clone = template.content.cloneNode(true);

            clone.querySelector(
                '.certification-image'
            ).src = cert.badge;

            clone.querySelector(
                '.certification-image'
            ).alt = cert.name;

            clone.querySelector(
                '[data-certification-name]'
            ).textContent = cert.name;

            clone.querySelector(
                '[data-certification-issuer]'
            ).textContent = cert.issuer;

            clone.querySelector(
                '[data-certification-link]'
            ).href = cert.verification;

            container.appendChild(clone);

        });

    }

};
window.CertificationsModule = CertificationsModule;
