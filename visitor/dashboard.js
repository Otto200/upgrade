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
                <div class="broker-terminal-view animate-fade">
                    
                    <!-- SECTION 1: Core Institutional Statement & Top Slider -->
                    <div class="broker-partner-card">
                        <div class="partner-meta">RECOMMENDED TIER-1 REGULATED Broker</div>
                        <div class="partner-brand-row">
                            <div class="broker-badge">IC MARKETS</div>
                            <span class="account-type-tag">OFFICIAL LIQUIDITY PROVIDER</span>
                        </div>
                        <p class="partner-perks-text">
                            Here is our Tier-1 Regulated Broker recommended for all BANKBUGS|FX Ecosystem users. We recommend all users use this Broker for their Raw spread and Institutional Market Condition Best for all types of trading activities and Traders. We share our trading data using IC market as our liquidity provider so make sure to use this so you get the exact price and data we share here in our platform.
                        </p>
                        
                        <!-- 3 Banner Auto-Sliding Component -->
<div class="slider-wrapper banner-970-250 marquee-fast">
    <div class="slider-track triple-slide">
        <img src="/img/image1.webp" alt="IC Markets Terminal Dashboard">
        <img src="/img/image2.webp" alt="Institutional Trading Environment">
        <img src="/img/image3.webp" alt="Raw Spread Market Liquidity">
        <!-- Duplicated Loop Track for Smooth Infinite Flow -->
        <img src="/img/image1.webp" aria-hidden="true">
        <img src="/img/image2.webp" aria-hidden="true">
        <img src="/img/image3.webp" aria-hidden="true">
    </div>
</div>

                    </div>

                    <!-- SECTION 2: Account Onboarding Quick Gateway -->
                    <div class="broker-sync-card">
                        <div class="sync-header">
                            <div class="sync-status-indicator"></div>
                            <h6>SECURE ACCOUNT REGISTRATION</h6>
                        </div>
                        <p class="sync-explainer">Signup with Name and email and set password first. Can verify later.</p>
                        <div class="workflow-direct-cta">
                            <a href="https://ic.com/open-trading-account/live/?camp=92891" target="_blank" class="broker-gate-link-premium-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                <span>Create Trading Account Now</span>
                            </a>
                        </div>
                    </div>

                    <!-- SECTION 3: Account Verification Criteria Data Layout -->
                    <div class="png-critical-knowledge-panel">
                        <div class="knowledge-header-row">
                            <span class="warning-triangle">📋</span>
                            <h5>BROKER REGISTRATION REQUIREMENTS</h5>
                        </div>
                        <p class="knowledge-intro">To have a profesional trading account, you must have the following requirements:</p>
                        
                        <div class="requirements-inline-tags">
                            <span class="req-pill">Valid Identification (Passport, NID, Driver's License)</span>
                            <span class="req-pill">Bank Visa Card</span>
                            <span class="req-pill">Active Email Address</span>
                            <span class="req-pill">Active Phone Number</span>
                        </div>
                        
                        <div class="funding-threshold-bar">
                            <span class="threshold-label">Minimum Deposit: <strong>$5 USD</strong></span>
                            <span class="threshold-label baseline">Suggested: <strong>$200 USD</strong></span>
                        </div>

                        <!-- 5 Images Automated Slider Frame -->
                        <div class="slider-wrapper aspect-16-9 marquee-medium">
                            <div class="slider-track quintuple-slide">
                                
                                <img src="img/image5.webp" alt="Local PNG Banking Corridor">
                                <img src="img/image6.webp" alt="Secure Server Latency Terminal">
                                <img src="img/image7.webp" alt="Liquidity Stream Sync">
                                <img src="img/image8.webp" alt="Ecosystem Processing Frame">
                                <!-- Duplicated Loop Track for Smooth Infinite Flow -->
                                <img src="img/image4.webp" aria-hidden="true">
                                <img src="img/image5.webp" aria-hidden="true">
                                <img src="img/image6.webp" aria-hidden="true">
                                <img src="img/image7.webp" aria-hidden="true">
                                <img src="img/image8.webp" aria-hidden="true">
                            </div>
                        </div>
                    </div>

                    <!-- SECTION 4: Split Financial Gateway Corridor Rails -->
                    <div class="funding-matrix-panel">
                        <div class="matrix-split-table-widescreen">
                            
                            <!-- Left Column Panel: Deposits -->
                            <div class="matrix-column">
                                <div class="column-header-text">📥 DEPOSIT METHODS AVAILABLE</div>
                                <div class="slider-wrapper aspect-16-9 marquee-slow">
                                    <div class="slider-track triple-slide">
                                        <img src="img/image9.webp" alt="Visa Mastercard Processing Corridor">
                                        <img src="img/image10.webp" alt="Swift Bank Wire Transfer Route">
                                        <img src="img/image11.webp" alt="Digital Wallet Liquidity Vault">
                                        <!-- Duplicated Loop Track for Smooth Infinite Flow -->
                                        <img src="img/image9.webp" aria-hidden="true">
                                        <img src="img/image10.webp" aria-hidden="true">
                                        <img src="img/image11.webp" aria-hidden="true">
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Right Column Panel: Withdrawals -->
                            <div class="matrix-column">
                                <div class="column-header-text">📤 WITHDRAWAL METHODS AVAILABLE</div>
                                <div class="slider-wrapper aspect-16-9 marquee-slow">
                                    <div class="slider-track triple-slide">
                                        <img src="img/image12.webp" alt="Card Reversal Gateway Loop">
                                        <img src="img/image13.webp" alt="Bank Transfer Allocation Route">
                                        <img src="img/image14.webp" alt="Verified Transfer Gateway Node">
                                        <!-- Duplicated Loop Track for Smooth Infinite Flow -->
                                        <img src="img/image12.webp" aria-hidden="true">
                                        <img src="img/image13.webp" aria-hidden="true">
                                        <img src="img/image14.webp" aria-hidden="true">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- SECTION 5: Crucial Optimization Signing Directives Card -->
                    <div class="compliance-card-alert-panel">
                        <h5>⚠️ NOTE FOR FASTER APPROVAL DURING registration:</h5>
                        <ul class="alert-bullet-list">
                            <li><span>Use Exact Name on Your ID Card</span></li>
                            <li><span>Use Exact or Similar Address on your ID Card</span></li>
                            <li><span>Trading Account Name Must Match Local Bank Account Name</span></li>
                            <li><span>You will be required to provide Bank statement for Proof of address if Necessary (optional)</span></li>
                        </ul>
                    </div>

                    <!-- SECTION 6: Terminal Conversion Primary Footer Call-To-Action -->
                    <div class="terminal-footer-action-hub">
                        <a href="https://ic.com/open-trading-account/live/?camp=92891" target="_blank" class="master-action-btn-hub">
                            <span>Get Started, Open IC Account</span>
                            <svg viewBox="0 0 24 24" class="btn-arrow-icon" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 5"></polyline></svg>
                        </a>
                    </div>

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
