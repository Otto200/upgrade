document.addEventListener('DOMContentLoaded', () => {
    const menuTabs = document.querySelectorAll('.menu-tab-btn');
    const dynamicViewport = document.getElementById('dynamicViewport');

    // High-density content layout objects for BANKBUGS system deployment
    const terminalViews = {
        models: `
            <div class="panel-block-layout">
                <h3>BANKBUGS FX LIQUIDITY MODELS</h3>
                <p>Track wholesale asset manipulation cycles natively. These 5 core proprietary algorithmic models map high-timeframe pool sweeps and internal liquidity distribution ranges before you execute on MT5.</p>
                
                <!-- 5 Models Premium Grid Matrix -->
                <div class="models-fintech-grid">
                    
                    <!-- Model 1 -->
                    <div class="model-visual-card">
                        <div class="model-card-meta">
                            <span class="model-id-tag">M1</span>
                            <h4>Liquidity Purge Model</h4>
                        </div>
                        <div class="premium-mockup-frame model-frame-view">
                            <img src="img/model1.webp" alt="BANKBUGS Model 1" class="workspace-pure-img" onerror="this.parentElement.innerHTML='<span class=\\'frame-meta-status\\'>// MODEL_1_MISSING_IN_REPO</span>'">
                        </div>
                    </div>

                    <!-- Model 2 -->
                    <div class="model-visual-card">
                        <div class="model-card-meta">
                            <span class="model-id-tag">M2</span>
                            <h4>Internal MSS Shift</h4>
                        </div>
                        <div class="premium-mockup-frame model-frame-view">
                            <img src="img/model2.webp" alt="BANKBUGS Model 2" class="workspace-pure-img" onerror="this.parentElement.innerHTML='<span class=\\'frame-meta-status\\'>// MODEL_2_MISSING_IN_REPO</span>'">
                        </div>
                    </div>

                    <!-- Model 3 -->
                    <div class="model-visual-card">
                        <div class="model-card-meta">
                            <span class="model-id-tag">M3</span>
                            <h4>Premium / Discount Matrix</h4>
                        </div>
                        <div class="premium-mockup-frame model-frame-view">
                            <img src="img/model3.webp" alt="BANKBUGS Model 3" class="workspace-pure-img" onerror="this.parentElement.innerHTML='<span class=\\'frame-meta-status\\'>// MODEL_3_MISSING_IN_REPO</span>'">
                        </div>
                    </div>

                    <!-- Model 4 -->
                    <div class="model-visual-card">
                        <div class="model-card-meta">
                            <span class="model-id-tag">M4</span>
                            <h4>HTF Pool Sweeps</h4>
                        </div>
                        <div class="premium-mockup-frame model-frame-view">
                            <img src="img/model4.webp" alt="BANKBUGS Model 4" class="workspace-pure-img" onerror="this.parentElement.innerHTML='<span class=\\'frame-meta-status\\'>// MODEL_4_MISSING_IN_REPO</span>'">
                        </div>
                    </div>

                    <!-- Model 5 -->
                    <div class="model-visual-card">
                        <div class="model-card-meta">
                            <span class="model-id-tag">M5</span>
                            <h4>Turtle Soup Blueprint</h4>
                        </div>
                        <div class="premium-mockup-frame model-frame-view">
                            <img src="img/model5.webp" alt="BANKBUGS Model 5" class="workspace-pure-img" onerror="this.parentElement.innerHTML='<span class=\\'frame-meta-status\\'>// MODEL_5_MISSING_IN_REPO</span>'">
                        </div>
                    </div>

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
            menuTabs.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');
            const viewKey = tab.getAttribute('data-view');
            dynamicViewport.innerHTML = terminalViews[viewKey];
        });
    });
});
