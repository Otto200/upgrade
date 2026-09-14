document.addEventListener('DOMContentLoaded', () => {
    const menuTabs = document.querySelectorAll('.menu-tab-btn');
    const dynamicViewport = document.getElementById('dynamicViewport');

    // High-density content layout objects for BANKBUGS system deployment
    const terminalViews = {
        models: `
            <div class="panel-block-layout">
                <h3>BANKBUGS|FX LIQUIDITY MODELS</h3>
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
                
                <!-- 10-Lesson High-Density Video Grid -->
                <div class="mentorship-video-grid">
                    
                    <!-- Video 1 -->
                    <div class="video-matrix-card">
                        <div class="video-meta-top">
                            <span class="video-index">L01</span>
                            <span class="video-duration">12:45</span>
                        </div>
                        <h4>1. Algorithmic Price Delivery Intro</h4>
                        <div class="premium-mockup-frame video-frame-view">
                            <!-- VIDEO INTEGRATION SLOT: Replace src or keep thumbnail placeholder -->
                            <div class="video-thumbnail-overlay">
                                <svg class="play-vector-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <span class="frame-meta-status">// SECURE_STREAM_01</span>
                        </div>
                    </div>

                    <!-- Video 2 -->
                    <div class="video-matrix-card">
                        <div class="video-meta-top">
                            <span class="video-index">L02</span>
                            <span class="video-duration">18:20</span>
                        </div>
                        <h4>2. HTF Liquidity Pool Identification</h4>
                        <div class="premium-mockup-frame video-frame-view">
                            <div class="video-thumbnail-overlay">
                                <svg class="play-vector-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <span class="frame-meta-status">// SECURE_STREAM_02</span>
                        </div>
                    </div>

                    <!-- Video 3 -->
                    <div class="video-matrix-card">
                        <div class="video-meta-top">
                            <span class="video-index">L03</span>
                            <span class="video-duration">14:15</span>
                        </div>
                        <h4>3. Macro vs Micro Time Windows</h4>
                        <div class="premium-mockup-frame video-frame-view">
                            <div class="video-thumbnail-overlay">
                                <svg class="play-vector-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <span class="frame-meta-status">// SECURE_STREAM_03</span>
                        </div>
                    </div>

                    <!-- Video 4 -->
                    <div class="video-matrix-card">
                        <div class="video-meta-top">
                            <span class="video-index">L04</span>
                            <span class="video-duration">22:05</span>
                        </div>
                        <h4>4. The Core Liquidity Purge Setup</h4>
                        <div class="premium-mockup-frame video-frame-view">
                            <div class="video-thumbnail-overlay">
                                <svg class="play-vector-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <span class="frame-meta-status">// SECURE_STREAM_04</span>
                        </div>
                    </div>

                    <!-- Video 5 -->
                    <div class="video-matrix-card">
                        <div class="video-meta-top">
                            <span class="video-index">L05</span>
                            <span class="video-duration">16:40</span>
                        </div>
                        <h4>5. Tracking the Internal M5 MSS</h4>
                        <div class="premium-mockup-frame video-frame-view">
                            <div class="video-thumbnail-overlay">
                                <svg class="play-vector-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <span class="frame-meta-status">// SECURE_STREAM_05</span>
                        </div>
                    </div>

                    <!-- Video 6 -->
                    <div class="video-matrix-card">
                        <div class="video-meta-top">
                            <span class="video-index">L06</span>
                            <span class="video-duration">19:10</span>
                        </div>
                        <h4>6. Execution Above the CHoCH High</h4>
                        <div class="premium-mockup-frame video-frame-view">
                            <div class="video-thumbnail-overlay">
                                <svg class="play-vector-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <span class="frame-meta-status">// SECURE_STREAM_06</span>
                        </div>
                    </div>

                    <!-- Video 7 -->
                    <div class="video-matrix-card">
                        <div class="video-meta-top">
                            <span class="video-index">L07</span>
                            <span class="video-duration">15:55</span>
                        </div>
                        <h4>7. Turtle Soup Entry Safeguards</h4>
                        <div class="premium-mockup-frame video-frame-view">
                            <div class="video-thumbnail-overlay">
                                <svg class="play-vector-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <span class="frame-meta-status">// SECURE_STREAM_07</span>
                        </div>
                    </div>

                    <!-- Video 8 -->
                    <div class="video-matrix-card">
                        <div class="video-meta-top">
                            <span class="video-index">L08</span>
                            <span class="video-duration">25:30</span>
                        </div>
                        <h4>8. Premium & Discount Mathematics</h4>
                        <div class="premium-mockup-frame video-frame-view">
                            <div class="video-thumbnail-overlay">
                                <svg class="play-vector-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <span class="frame-meta-status">// SECURE_STREAM_08</span>
                        </div>
                    </div>

                    <!-- Video 9 -->
                    <div class="video-matrix-card">
                        <div class="video-meta-top">
                            <span class="video-index">L09</span>
                            <span class="video-duration">13:20</span>
                        </div>
                        <h4>9. Algorithmic Position Sizing</h4>
                        <div class="premium-mockup-frame video-frame-view">
                            <div class="video-thumbnail-overlay">
                                <svg class="play-vector-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <span class="frame-meta-status">// SECURE_STREAM_09</span>
                        </div>
                    </div>

                    <!-- Video 10 -->
                    <div class="video-matrix-card">
                        <div class="video-meta-top">
                            <span class="video-index">L10</span>
                            <span class="video-duration">31:12</span>
                        </div>
                        <h4>10. Complete Prop Evaluation Flow</h4>
                        <div class="premium-mockup-frame video-frame-view">
                            <div class="video-thumbnail-overlay">
                                <svg class="play-vector-icon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <span class="frame-meta-status">// SECURE_STREAM_10</span>
                        </div>
                    </div>

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
