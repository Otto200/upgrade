/* ==========================================================================
   BANKBUGS|FX UNIFIED WORKSPACE NAVIGATION CONTROLLER
   Target Location: visitor/dashboard.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sideDashboard = document.getElementById('sideDashboard');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const dynamicViewport = document.getElementById('dynamicViewport');

    // Gather navigation nodes across Top Nav, Bottom Nav, and Sidebar Links
    const allNavLinks = document.querySelectorAll('.menu-tab-btn, .bottom-nav-item, .sidebar-item:not(.logout)');

    // --- 1. Off-Canvas Sidebar Toggle Animations ---
    const openSidebar = () => {
        sideDashboard.classList.add('open');
        sidebarOverlay.classList.add('visible');
    };

    const closeSidebar = () => {
        sideDashboard.classList.remove('open');
        sidebarOverlay.classList.remove('visible');
    };

    if (sidebarToggle && sideDashboard && sidebarOverlay) {
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sideDashboard.classList.contains('open') ? closeSidebar() : openSidebar();
        });
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // --- 2. Centralized Canvas Router & View Loader ---
    const renderViewportSection = (viewKey) => {
        const structuralTemplates = {
            models: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">PRIME Model Terminal Feed</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Streaming algorithmic liquid blocks, swing validation loops, and delivery signatures directly to your visitor profile node.</p>
                </div>`,
            strategy: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Institutional Core Concepts</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Learn why retail support/resistance layers fail during interbank sweeps and liquidity runs before mitigations occur.</p>
                </div>`,
            mentorship: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Mentorship Vault</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Access full liquidity analysis video deep dives and institutional mechanics case files.</p>
                </div>`,
            setups: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Weekly Market Profiles</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Institutional bias projections across primary currency crosses mapped at Sunday open.</p>
                </div>`,
            executions: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Live Signals Node</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Real-time interbank execution logs tracking active smart money footprints.</p>
                </div>`,
            broker: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Broker Authentication Node</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Connect your institutional verification signatures safely to clear execution pathways inside your workspace.</p>
                </div>`,
            analysis: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Interbank Liquidity Metrics</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Live computational analysis calculating real-time institutional volume tracking vectors.</p>
                </div>`,
            indicators: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Algorithmic Rule Book / EA</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Download source configurations for quantitative trade delivery bots and charting helper plugins.</p>
                </div>`,
            trade: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Direct Trading Floor</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Live spot matrix platform trading terminal window module placeholder link.</p>
                </div>`,
            more: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Explore Ecosystem Assets</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Review utility features, security protocols, and system architecture properties.</p>
                </div>`
        };

        dynamicViewport.innerHTML = structuralTemplates[viewKey] || `
            <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem; text-transform:capitalize;">${viewKey} Feed Active</h4>
                <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Synchronizing core telemetry with live data infrastructure nodes...</p>
            </div>`;
    };

     // --- 3. Click Handler Event Router Assignment ---
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetView = link.getAttribute('data-view');
            if (!targetView) return;

            e.preventDefault();

            // Synchronize active highlights across all 3 nav menus simultaneously
            allNavLinks.forEach(item => {
                if (item.getAttribute('data-view') === targetView) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // Update main canvas layout view window
            renderViewportSection(targetView);

            // Auto-dismiss the side menu drawer if clicked from inside it
            if (link.classList.contains('sidebar-item')) {
                closeSidebar();
            }
        });
    });

    // --- 4. ONBOARDING REQUIREMENT MODAL CLICK MECHANICS ---
    const modalTrigger = document.getElementById('mentorshipModalTrigger');
    const mentorshipModal = document.getElementById('mentorshipModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    if (modalTrigger && mentorshipModal && modalCloseBtn) {
        modalTrigger.addEventListener('click', (e) => {
            e.preventDefault(); // Stop page jumps
            mentorshipModal.classList.add('active'); // Injects our unlockmentorship.css active animation rules
        });

        modalCloseBtn.addEventListener('click', () => {
            mentorshipModal.classList.remove('active');
        });

        // Close modal when user clicks outside on the darkened backdrop mask layer
        mentorshipModal.addEventListener('click', (e) => {
            if (e.target === mentorshipModal) {
                mentorshipModal.classList.remove('active');
            }
        });
    }

    // Initialize layout with the PRIME Model content view showing by default on launch
    renderViewportSection('models');
});
