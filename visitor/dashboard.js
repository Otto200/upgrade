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
                        
                        <div class="partner-perks-list-wrapper">
                            <ul class="broker-highlights-grid">
                                <li><span>Top Choice for high volume Swing traders, Scalpers and Robots (EA)</span></li>
                            </ul>
                        </div>

                        
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
                            <h6>GET STARTED, Trade with IC right here in PNG</h6>
                        </div>
                        <p class="sync-explainer">Sign up with Name, Email and set Password Instantly.</p>
                        
                         <div class="workflow-direct-cta">
                            <a href="https://ic.com/open-trading-account/live/?camp=92891" target="_blank" class="broker-gate-link-premium-icon outbound-ic-link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                <span>Register Trading Account Now</span>
                            </a>
                        </div>


                                               <!-- ⚡ NEW BLENDED SECTION: 4 Simple Steps Matrix -->
                        <div class="onboarding-steps-matrix-wrapper">
                            <h5 class="matrix-steps-title">Open an account in 4 simple steps</h5>
                            
                            <div class="steps-fluid-grid">
                                <div class="step-card-node">
                                    <span class="step-numeric-badge">1</span>
                                    <div class="step-card-content">
                                        <strong>Register</strong>
                                        <p>Choose an account type and complete our fast and secure application form</p>
                                    </div>
                                </div>

                                <div class="step-card-node">
                                    <span class="step-numeric-badge">2</span>
                                    <div class="step-card-content">
                                        <strong>Verify</strong>
                                        <p>Use our digital onboarding system for fast verification</p>
                                    </div>
                                </div>

                                <div class="step-card-node">
                                    <span class="step-numeric-badge">3</span>
                                    <div class="step-card-content">
                                        <strong>Fund</strong>
                                        <p>Fund your trading account using a wide range of funding methods</p>
                                    </div>
                                </div>

                                <div class="step-card-node">
                                    <span class="step-numeric-badge">4</span>
                                    <div class="step-card-content">
                                        <strong>Trade</strong>
                                        <p>Start trading on your live account and access +2,850 instruments</p>
                                    </div>
                                </div>
                            </div>

                             <!-- ⚡ NEW INTEGRATION: Centered Horizontal Dual CTA Buttons -->
                            <div class="steps-dual-cta-container">
                                <a href="https://ic.com/open-trading-account/live/?camp=92891" target="_blank" class="step-cta-btn live-btn outbound-ic-link">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="cta-svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                    <span>Open Live Account</span>
                                </a>
                                <a href="https://ic.com/open-trading-account/demo/?camp=92891" target="_blank" class="step-cta-btn demo-btn outbound-ic-link">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="cta-svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                    <span>Open Demo Account</span>
                                </a>
                            </div>

                        </div>

                    </div>


                    <!-- SECTION 3: Account Verification Criteria Data Layout -->
                    <div class="png-critical-knowledge-panel">
                        <div class="knowledge-header-row">
                            <span class="warning-triangle">📋</span>
                            <h5>IC Broker REQUIREMENTS</h5>
                        </div>
                        <p class="knowledge-intro">To register an individual trading account online in PNG, you must have the following requirements:</p>
                        
                        <div class="requirements-inline-tags">
                            <span class="req-pill">Atleast One Valid ID (Passport, NID, Driver's License)</span>
                            <span class="req-pill">Bank Visa Card</span>
                            <span class="req-pill">Active Email & Phone</span>
                            <span class="req-pill">Money/Funds to Trade</span>
                        </div>
                        
                        <div class="funding-threshold-bar">
                            <span class="threshold-label">Minimum Deposit: <strong>$5 USD</strong></span>
                            <span class="threshold-label baseline">Suggested: <strong>$200 USD</strong></span>
                        </div>

                    </div>

               
                    <!-- SECTION 4: Crucial Optimization Signing Directives Card -->
                    <div class="compliance-card-alert-panel">
                        <h5>⚠️ NOTE FOR FASTER APPROVAL DURING registration:</h5>
                        <ul class="alert-bullet-list">
                            <li><span>Use Exact Name on Your ID Card</span></li>
                            <li><span>Use Exact or Similar Address on your ID Card</span></li>
                            <li><span>Trading Account Name Must Match Local Bank Account Name</span></li>
                            <li><span>You will be required to provide Bank statement for Proof of address if Necessary (optional)</span></li>
                        </ul>
                    </div>

                  <!-- SECTION 5: Terminal Conversion Primary Footer Call-To-Action -->
                    <div class="terminal-footer-action-hub">
                       <a href="https://ic.com/open-trading-account/live/?camp=92891" target="_blank" class="master-action-btn-hub outbound-ic-link">
                            <span>Get Started, Register IC Account</span>
                            <svg viewBox="0 0 24 24" class="btn-arrow-icon" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 5"></polyline></svg>
                        </a>
                    </div>


                </div>`,

            analysis: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Interbank Liquidity Metrics</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Live computational analysis calculating real-time institutional volume tracking vectors.</p>
                </div>`,
            trade: `
                <div style="padding:1.5rem; border:1px solid #253352; border-radius:6px; background-color:#131A2C;">
                    <h4 style="color:#C5A880; font-size:1.1rem; margin-bottom:0.5rem;">Algorithmic Rule Book / EA</h4>
                    <p style="font-size:0.85rem; color:#8E9BAE; line-height:1.5;">Download source configurations for quantitative trade delivery bots and charting helper plugins.</p>
                </div>`,
             indicators: `
                <div class="payment-methods-view animate-fade">
                    
                    <!-- IC Style Section Headline with Clean Vector SVG Badges -->
                    <div class="ic-section-header">
                        <h4>Your money, your way</h4>
                        <p class="ic-section-subtitle">Deposit and withdraw funds quickly and securely across our verified, institutional funding pipelines.</p>
                        
                        <div class="ic-perks-badge-row">
                            <span class="ic-badge-node">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-svg-icon"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                <span>Instant Deposit</span>
                            </span>
                            <span class="ic-badge-node">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-svg-icon"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <span>Fast Withdrawal</span>
                            </span>
                            <span class="ic-badge-node">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-svg-icon"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                <span>0% Commission</span>
                            </span>
                        </div>
                    </div>

                    <!-- IC Markets Pattern Single Content Card -->
                    <div class="ic-payment-single-container">
                        
                        <!-- Isolate Visa Card Node Only -->
                        <div class="ic-payment-card isolated-focus">
                            <div class="card-media-shell">
                                <img src="img/image9.webp" alt="IC Markets Visa Processing Corridor" onerror="this.style.opacity='0.25';">
                                <div class="media-tag-overlay">CARD GATEWAY</div>
                            </div>
                            <div class="card-content-shell">
                                <h5>Credit / Debit Card</h5>
                                <p class="card-explainer-text">Fund your trading account instantly using secure commercial Visa and Mastercard channels.</p>
                                <div class="card-spec-pill-box">
                                    <span class="spec-pill instant">INSTANT DEPOSIT</span>
                                    <span class="spec-pill fee">0% FEES</span>
                                </div>
                            </div>
                        </div>

                        <!-- Fully Bled Continuous Transparent Logo Carousel Box -->
                        <div class="brand-carousel-bled-wrapper">
                            <div class="logo-marquee-track">
                                <img src="/img/visa-logo.png" alt="Visa Framework Node" onerror="this.style.opacity='0.5';">
                                <img src="/img/mastercard-logo.png" alt="Mastercard Framework Node" onerror="this.style.opacity='0.5';">
                                <img src="/img/applepay-logo.png" alt="Apple Pay Corridor" onerror="this.style.opacity='0.5';">
                                <img src="/img/googlepay-logo.png" alt="Google Pay Corridor" onerror="this.style.opacity='0.5';">
                                <!-- Duplicated Loop Track for Smooth Infinite Flow -->
                                <img src="/img/visa-logo.png" aria-hidden="true">
                                <img src="/img/mastercard-logo.png" aria-hidden="true">
                                <img src="/img/applepay-logo.png" aria-hidden="true">
                                <img src="/img/googlepay-logo.png" aria-hidden="true">
                            </div>
                        </div>

                    </div>

                    <!-- Direct Footer Help Descriptor Hub Link -->
                    <div class="ic-funding-footer-notice">
                        <p>For more information on deposits, withdrawals and how to fund your trading account, use our secure registration matrix channels.</p>
                    </div>

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
    renderViewportSection('broker');


    // --- 5. SECURE OUTBOUND AFFIRMATION ROUTING LISTENER ---
    const outboundModal = document.getElementById('outboundAffirmationModal');
    const outboundConfirmBtn = document.getElementById('outboundConfirmBtn');
    const outboundCancelBtn = document.getElementById('outboundCancelBtn');
    let targetOutboundUrl = '';

    // Bulletproof event delegation catches links inside dynamic tab render scopes
    document.body.addEventListener('click', (e) => {
        // Intercept clicks coming from any asset tagged with your target class
        const externalAnchor = e.target.closest('.outbound-ic-link');
        
        if (externalAnchor) {
            e.preventDefault(); // Lock browser from jumping away instantly
            
            // Extract and hold your exact tracked partner destination address
            targetOutboundUrl = externalAnchor.getAttribute('href') || 'https://ic.com';
            
            // Pop the translucent affirmation notice overlay cleanly into active layout view
            if (outboundModal) {
                outboundModal.classList.add('active');
            }
        }
    });

    if (outboundConfirmBtn && outboundCancelBtn && outboundModal) {
        // User clicks Proceed -> Open the tracked signup page in a clean browser window
        outboundConfirmBtn.addEventListener('click', (e) => {
            e.preventDefault();
            outboundModal.classList.remove('active');
            if (targetOutboundUrl) {
                window.open(targetOutboundUrl, '_blank');
            }
        });

        // User clicks Return -> Dismiss overlay window and stay safely inside terminal shell
        outboundCancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            outboundModal.classList.remove('active');
            targetOutboundUrl = ''; // Clean memory reference signature
        });
    }



   
});





