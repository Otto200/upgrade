document.addEventListener('DOMContentLoaded', () => {
    const allMenuTabs = document.querySelectorAll('.menu-tab-btn');
    const dynamicViewport = document.getElementById('dynamicViewport');

    // 10-Element Workspace Interface Dataset
    const terminalViews = {
        // TOP NAVBAR ITEMS
        models: `
            <div class="panel-block-layout">
                <h3>BANKBUGS FX LIQUIDITY MODELS</h3>
                <p>Track wholesale asset manipulation cycles natively. These core proprietary algorithmic models map high-timeframe pool sweeps and internal liquidity distribution ranges before you execute on MT5.</p>
                <div class="models-fintech-grid">
                    <div class="model-visual-card"><h4>Liquidity Purge Model</h4><div class="premium-mockup-frame">// M1_CANVAS</div></div>
                    <div class="model-visual-card"><h4>Internal MSS Shift</h4><div class="premium-mockup-frame">// M2_CANVAS</div></div>
                </div>
            </div>
        `,
        strategy: `
            <div class="panel-block-layout">
                <h3>CORE EXECUTION STRATEGY PLAYBOOK</h3>
                <p>Access the rigid checklist rule framework built to clear prop evaluation drawdowns. Zero retail patterns—just high-probability internal market structure shift entries.</p>
                <div class="premium-mockup-frame"><button class="frame-action-btn" onclick="alert('Checking criteria matrix...')">Open Strategy Checklist</button></div>
            </div>
        `,
        mentorship: `
            <div class="panel-block-layout">
                <h3>PREMIUM MENTORSHIP LIBRARY</h3>
                <p>High-end institutional educational modules. Master algorithmic order flow delivery windows, session time constraints, and premium vs discount equilibrium matrices.</p>
                <div class="premium-mockup-frame"><button class="frame-action-btn" onclick="alert('Initializing lesson streams...')">Launch Video Portal</button></div>
            </div>
        `,
        setups: `
            <div class="panel-block-layout">
                <h3>WEEKLY MATRIX FORECASTS & RECAPS</h3>
                <p>Updated technical trend projections and multi-timeframe directional outlook definitions. Dissect previous market structures to consistently refine execution accuracy.</p>
                <div class="premium-mockup-frame"><button class="frame-action-btn" onclick="window.open('https://tradingview.com', '_blank')">Deploy On TradingView</button></div>
            </div>
        `,
        executions: `
            <div class="panel-block-layout">
                <h3>LIVE TRANSACTION EXECUTION DATA</h3>
                <p>Review absolute verified real histories. Study execution prints, lot-allocation tracking variables, and historical withdrawal statements achieved natively from right here in PNG.</p>
                <div class="premium-mockup-frame"><button class="frame-action-btn" onclick="alert('Downloading Statement PDF')">Download Verified Ledger (PDF)</button></div>
            </div>
        `,

               // UPDATED FINTECH IB BROKER WORKSPACE (CENTERED PREMIUM GREEN CTA)
        broker: `
            <div class="broker-viewport">
                <div class="broker-premium-container">
                    
                    <!-- 970x250 Automated Slider Carousel Viewport -->
                    <div class="broker-carousel-viewport">
                        <div class="broker-carousel-track">
                            <div class="broker-banner-slide">
                                <img src="img/banner1.webp" alt="IC Markets Infrastructure" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://w3.org\\' width=\\'970\\' height=\\'250\\' style=\\'background:%23050811;\\'><text x=\\'50%\\' y=\\'50%\\' fill=\\'%23484f58\\' font-family=\\'sans-serif\\' font-size=\\'14\\' text-anchor=\\'middle\\'>// BANNER_1_LOAD_PENDING</text></svg>';">
                            </div>
                            <div class="broker-banner-slide">
                                <img src="img/banner2.webp" alt="Raw ECN Liquidity Metrics" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://w3.org\\' width=\\'970\\' height=\\'250\\' style=\\'background:%23050811;\\'><text x=\\'50%\\' y=\\'50%\\' fill=\\'%23484f58\\' font-family=\\'sans-serif\\' font-size=\\'14\\' text-anchor=\\'middle\\'>// BANNER_2_LOAD_PENDING</text></svg>';">
                            </div>
                            <div class="broker-banner-slide">
                                <img src="img/banner3.webp" alt="Algorithmic Order Processing" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://w3.org\\' width=\\'970\\' height=\\'250\\' style=\\'background:%23050811;\\'><text x=\\'50%\\' y=\\'50%\\' fill=\\'%23484f58\\' font-family=\\'sans-serif\\' font-size=\\'14\\' text-anchor=\\'middle\\'>// BANNER_3_LOAD_PENDING</text></svg>';">
                            </div>
                        </div>
                    </div>

                    <!-- Clean Premium Content Grid Matrix -->
                    <div class="broker-specs-matrix">
                        
                        <!-- Section 1: Broker Requirements -->
                        <div class="matrix-illustration-card">
                            <div class="matrix-vector-aside">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                            </div>
                            <div class="matrix-info-content">
                                <h4>Broker Requirements</h4>
                                <ul style="list-style: none; margin-top: 6px; padding: 0; display: flex; flex-direction: column; gap: 4px;">
                                    <li style="font-size: 12.5px; color: var(--text-secondary); display: flex; align-items: center; gap: 6px;">
                                        <span style="color: var(--glow-green, #00e676);">✓</span> Valid ID (NID, Passport, Drivers License)
                                    </li>
                                    <li style="font-size: 12.5px; color: var(--text-secondary); display: flex; align-items: center; gap: 6px;">
                                        <span style="color: var(--glow-green, #00e676);">✓</span> Bank Visa Card
                                    </li>
                                    <li style="font-size: 12.5px; color: var(--text-secondary); display: flex; align-items: center; gap: 6px;">
                                        <span style="color: var(--glow-green, #00e676);">✓</span> Email
                                    </li>
                                    <li style="font-size: 12.5px; color: var(--text-secondary); display: flex; align-items: center; gap: 6px;">
                                        <span style="color: var(--glow-green, #00e676);">✓</span> Phone Number
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Section 2: Withdrawal and Deposit -->
                        <div class="matrix-illustration-card">
                            <div class="matrix-vector-aside">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                            </div>
                            <div class="matrix-info-content">
                                <h4>Withdrawal and Deposit</h4>
                                <p style="margin-top: 6px; font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">
                                    All transactions are processed directly via Visa Card.
                                </p>
                            </div>
                        </div>

                    </div>

                    <!-- Master Centered Interactive Green CTA Button -->
                    <div class="broker-centered-cta-container">
                        <a href="https://ic.com/open-trading-account/live/?camp=92891" target="_blank" class="broker-action-anchor green-filled-master">
                            <span>SIGN UP WITH IC NOW</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                    </div>

                </div>
            </div>
        `,


        trade: `
            <div class="panel-block-layout">
                <h3>METATRADER 5 GATEWAY INTERFACE</h3>
                <p>Deploy algorithmic order structures safely onto live asset metrics. Sync entry scripts, trailing parameters, and strict execution risk values.</p>
                <div class="premium-mockup-frame">
                    <button class="frame-action-btn" onclick="window.open('https://metatrader5.com', '_blank')">Open WebTrader Console</button>
                </div>
            </div>
        `,
        analysis: `
            <div class="panel-block-layout">
                <h3>CORE ANALYSIS FRAMEWORK</h3>
                <p>Map high-probability liquidity pools and tracking narratives using customized multi-timeframe chart layouts.</p>
                <div class="premium-mockup-frame">
                    <button class="frame-action-btn" onclick="window.open('https://tradingview.com', '_blank')">Launch Advanced Chart Workspace</button>
                </div>
            </div>
        `,
        indicators: `
            <div class="panel-block-layout">
                <h3>INDICATOR PROTOCOLS & EA ENGINE</h3>
                <p>Download automated systems and expert advisors compiled specifically to monitor internal session time constraints and tracking targets.</p>
                <div class="premium-mockup-frame">
                    <button class="frame-action-btn" onclick="alert('Accessing EA repository...')">Download Indicator Packs (EX5)</button>
                </div>
            </div>
        `,
        more: `
            <div class="panel-block-layout">
                <h3>TERMINAL SETTINGS & DISCLAIMERS</h3>
                <p>Configure interface options, adjust layout preferences, or log out of your session parameters safely.</p>
                <div class="premium-mockup-frame">
                    <button class="frame-action-btn" onclick="window.location.href='login.html'">Terminate Workspace Session (Log Out)</button>
                </div>
            </div>
        `
    };

    // Render default startup dashboard layout view
    dynamicViewport.innerHTML = terminalViews.models;

  // Cross-Tab routing cycle hook
    allMenuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Clear active lighting tokens from ALL buttons across top and bottom layers
            allMenuTabs.forEach(btn => btn.classList.remove('active'));
            
            // Set active focus on the target click path element
            tab.classList.add('active');

            // Pull view identification parameter value string
            const TargetKey = tab.getAttribute('data-view');
            
            // Swap core center viewport matrix data panels instantly
            dynamicViewport.innerHTML = terminalViews[TargetKey];
        });
    });
});
    
