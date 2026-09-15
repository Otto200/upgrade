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

        // NEW UTILITY BOTTOM NAVBAR ITEMS
               // UPDATED ACTIVE BROKER PORTAL INTERFACE VIEW
        broker: `
            <div class="broker-viewport">
                <!-- Hero Broker Info Layout -->
                <div class="broker-hero-banner">
                    <div class="broker-title-row">
                        <h3>IC Markets Global Architecture</h3>
                        <span class="broker-badge">RAW SPREAD ECN</span>
                    </div>
                    <p style="font-size: 13.5px; color: var(--text-muted); line-height: 1.5; margin: 0;">
                        The foundational liquidity infrastructure selected to handle execution loops within the BANKBUGS Ecosystem. Raw ECN connections feed true interbank spreads directly into your trading desks.
                    </p>
                    
                    <!-- Performance Tapes -->
                    <div class="broker-stat-tape">
                        <div class="broker-stat-card">
                            <span class="broker-stat-lbl">Base Spread</span>
                            <span class="broker-stat-val highlight">0.0 Pips</span>
                        </div>
                        <div class="broker-stat-card">
                            <span class="broker-stat-lbl">Latency Speed</span>
                            <span class="broker-stat-val">&lt; 1.0ms</span>
                        </div>
                        <div class="broker-stat-card">
                            <span class="broker-stat-lbl">Regulation</span>
                            <span class="broker-stat-val">ASIC / FSA</span>
                        </div>
                    </div>
                </div>

                <!-- PNG Grid Layout Framework -->
                <div class="png-integration-grid">
                    <!-- Local Bank Handling Card -->
                    <div class="png-requirement-card">
                        <h4>🇵🇬 PNG Bank Funding</h4>
                        <ul>
                            <li>Supports BSP & Kina Bank Visa Cards for secure online card deposits.</li>
                            <li>Instant deposit processing straight into your live wallet layer.</li>
                            <li>Suggested baseline capital start: $100 USD to defend drawdowns.</li>
                        </ul>
                    </div>

                    <!-- KYC Check Verification Card -->
                    <div class="png-requirement-card">
                        <h4>🛡️ KYC Onboarding Proofs</h4>
                        <ul>
                            <li>Primary Identity: Clear photo of NID Card, Passport, or Driver's License.</li>
                            <li>Address Validation: Bank statement summary showing your matched full name.</li>
                            <li>Fast Track: Approvals route completely within 24-hours for verification.</li>
                        </ul>
                    </div>
                </div>

                <!-- Strategic Conversion Action Anchor Link -->
                <a href="https://ic.com" target="_blank" class="broker-master-cta">
                    <span>Open Verified Trading Account</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
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


    // Add this helper style router within your existing tabs listener processing cycle loop:
    allMenuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            allMenuTabs.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');

            const viewKey = tab.getAttribute('data-view');
            
            // ⚡ DYNAMIC BROKER CSS ENGINE TRIGGER GUARD
            if (viewKey === 'broker') {
                if (!document.getElementById('broker-stylesheet-guard')) {
                    const cssLink = document.createElement('link');
                    cssLink.id = 'broker-stylesheet-guard';
                    cssLink.rel = 'stylesheet';
                    cssLink.href = 'dashboard/broker.css';
                    document.head.appendChild(cssLink);
                }
            }
            
            dynamicViewport.innerHTML = terminalViews[viewKey];
        });
    });
