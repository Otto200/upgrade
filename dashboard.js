document.addEventListener('DOMContentLoaded', () => {
    const menuTabs = document.querySelectorAll('.menu-tab-btn');
    const dynamicViewport = document.getElementById('dynamicViewport');

    // High-density content layout objects for BANKBUGS system deployment
    const terminalViews = {
        models: `
            <div class="panel-block-layout">
                <h3>BANKBUGS FX LIQUIDITY MODELS</h3>
                <p>Track algorithmic bank manipulation matrices. Monitor higher timeframe pools, expansion impulses, and internal liquidity distribution ranges safely before deploying trade execution capital.</p>
                <div class="premium-mockup-frame">
                    <span class="frame-meta-status">// METRIC_ASSET_GRID_PENDING_LOAD</span>
                    <button class="frame-action-btn" onclick="alert('Ecosystem chart template initialized.')">Load Liquidity Matrix Map</button>
                </div>
            </div>
        `,
        strategy: `
            <div class="panel-block-layout">
                <h3>CORE EXECUTION STRATEGY PLAYBOOK</h3>
                <p>Access the rigid checklist rule framework built to clear prop evaluation drawdowns. Zero guessing, zero retail patterns—just high-probability internal market structure shift entries.</p>
                <div class="premium-mockup-frame">
                    <span class="frame-meta-status">// SYSTEM_CHECKLIST_DATA_LOG</span>
                    <button class="frame-action-btn" onclick="alert('Pre-Trade checklist array loaded.')">Open Strategy Checklist</button>
                </div>
            </div>
        `,
        mentorship: `
            <div class="panel-block-layout">
                <h3>PREMIUM MENTORSHIP LIBRARY</h3>
                <p>High-end institutional educational modules. Master algorithmic order flow delivery windows, session time constraints, and premium vs discount equilibrium matrices.</p>
                <div class="premium-mockup-frame">
                    <span class="frame-meta-status">// SECURE_STREAM_INTERFACE_CONNECTED</span>
                    <button class="frame-action-btn" onclick="alert('Media stream starting...')">Launch Video Portal</button>
                </div>
            </div>
        `,
        setups: `
            <div class="panel-block-layout">
                <h3>WEEKLY MATRIX FORECASTS & RECAPS</h3>
                <p>Updated technical trend projections and multi-timeframe directional outlook definitions. Dissect previous market structures to consistently refine execution accuracy.</p>
                <div class="premium-mockup-frame">
                    <span class="frame-meta-status">// TECHNICAL_WATCHLIST_FORWARD_MARKUP</span>
                    <button class="frame-action-btn" onclick="window.open('https://tradingview.com', '_blank')">Deploy On TradingView</button>
                </div>
            </div>
        `,
        executions: `
            <div class="panel-block-layout">
                <h3>LIVE TRANSACTION EXECUTION DATA</h3>
                <p>Review absolute verified real histories. Study execution prints, lot-allocation tracking variables, and historical withdrawal statements achieved natively from right here in PNG.</p>
                <div class="premium-mockup-frame">
                    <span class="frame-meta-status">// TRANSACTION_HISTORY_LEDGER_VERIFIED</span>
                    <button class="frame-action-btn" onclick="alert('Downloading transaction record statement.')">Download Verified Ledger (PDF)</button>
                </div>
            </div>
        `
    };

    // Initialize Viewport with Default Module content block
    dynamicViewport.innerHTML = terminalViews.models;

    // Direct interface navigation event cycle loop
    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Demolish past active styles from the layout buttons list
            menuTabs.forEach(btn => btn.classList.remove('active'));
            
            // Apply signature active layout styles to the selected button
            tab.classList.add('active');

            // Extraction router match
            const viewKey = tab.getAttribute('data-view');
            
            // Swap display content with a micro-fade entrance cycle refresh
            dynamicViewport.innerHTML = terminalViews[viewKey];
        });
    });
});
