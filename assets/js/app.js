/* ==========================================================================
   Network Engineering Portfolio
   Application Bootstrap
   Version: 2.0.0
   ========================================================================== */

'use strict';

document.addEventListener('DOMContentLoaded', async () => {

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Profile
    if (typeof ProfileModule !== 'undefined') {
        await ProfileModule.load();
    }

    // Dashboard
    if (typeof DashboardModule !== 'undefined') {
        await DashboardModule.load();
    }

    // Projects
    if (typeof ProjectsModule !== 'undefined') {
        await ProjectsModule.load();
    }

    // Roadmap
    if (typeof RoadmapModule !== 'undefined') {
        await RoadmapModule.load();
    }

    // Skills
    if (typeof SkillsModule !== 'undefined') {
        await SkillsModule.load();
    }

    // Certifications
    if (typeof CertificationsModule !== 'undefined') {
        await CertificationsModule.load();
    }
    // Resume
    if (typeof ResumeModule !== 'undefined') {
    await ResumeModule.load();
    }

});
