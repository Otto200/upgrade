/* ==========================================================================
   BANKBUGS|FX VISITOR ROUTING CONTROLLER
   Target Location: visitor/dashboard.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sideDashboard = document.getElementById('sideDashboard');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const tabButtons = document.querySelectorAll('.menu-tab-btn');
    const dynamicViewport = document.getElementById('dynamicViewport');

    // --- 1. Off-Canvas Sidebar Dashboard Interactions ---
    const toggleSidebar = () => {
        sideDashboard.classList.toggle('open');
        sidebarOverlay.classList.toggle('visible');
    };

    if (sidebarToggle && sideDashboard && sidebarOverlay) {
        sidebarToggle.addEventListener('click', toggleSidebar);
        sidebarOverlay.addEventListener('click', toggleSidebar);
    }

    // --- 2. Live Tab Routing Action Listeners ---
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetView = btn.getAttribute('data-view');
            
            // Synchronize active states globally across top & bottom matrices
            tabButtons.forEach(b => {
                if (b.getAttribute('data-view') === targetView) {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });

            // Route new interface data to the clean non-overlapping viewport
            renderViewportSection(targetView);
        });
    });

    const renderViewportSection = (viewKey) => {
        const structuralTemplates = {
            models: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">PRIME Model Interbank Matrix</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Streaming algorithmic liquid blocks, swing validation loops, and delivery signatures directly to your visitor profile node.</p>
                </div>`,
            strategy: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Institutional Core Concepts</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Learn why retail support/resistance layers fail during interbank sweeps and liquidity runs before mitigations occur.</p>
                </div>`,
            broker: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Broker Authentication Node</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Connect your institutional verification signatures safely to clear execution pathways inside your workspace.</p>
                </div>`
        };

        dynamicViewport.innerHTML = structuralTemplates[viewKey] || `
            <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem; text-transform:capitalize;">${viewKey} Tracking View Active</h4>
                <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Synchronizing real-time telemetry matrix profiles with live infrastructure nodes...</p>
            </div>`;
    };

    // Initialize with default PRIME Model content injection
    renderViewportSection('models');
});
