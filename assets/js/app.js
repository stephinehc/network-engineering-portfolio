/* ==========================================================================
   Application Bootstrap
   Version: 1.0.0
========================================================================== */

'use strict';

document.addEventListener(
    'DOMContentLoaded',
    async () => {

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        await ProfileModule.load();

        await DashboardModule.load();

        await ProjectsModule.load();

        await RoadmapModule.load();

        await SkillsModule.load();

        await CertificationsModule.load();

    }
);
