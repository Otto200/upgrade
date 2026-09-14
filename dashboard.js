document.addEventListener('DOMContentLoaded', () => {
    const menuTabs = document.querySelectorAll('.menu-tab-btn');
    const dynamicViewport = document.getElementById('dynamicViewport');

    const appViews = {
        models: `
            <div class="panel-block-layout">
                <h3>Bankbugs FX Liquidity Models</h3>
                <p>Track wholesale asset manipulation cycles natively. Identify high-timeframe order block structural mitigation windows before execution.</p>
                <div class="premium-mockup-frame">
                    <span>// GRAPHIC_METRIC_ASSET_LOAD_PENDING</span>
                    <button class="frame-action-btn">Expand Full Chart Model</button>
                </div>
            </div>
        `,
        strategy: `
            <div class="panel-block-layout">
                <h3>Ultimate Prop Firm Strategy Matrix</h3>
                <p>The operational checklist verified to pass prop risk structures without breaching maximum trailing drawdown boundaries.</p>
                <div class="premium-mockup-frame">
                    <span>// STRATEGY_CONCEPTS_CHECKLIST_RULES</span>
                    <button class="frame-action-btn">View Setup Parameters</button>
                </div>
            </div>
        `,
        mentorship: `
            <div class="panel-block-layout">
                <h3>Structured Mentorship Video Feed</h3>
                <p>High-definition continuous educational streaming detailing institutional liquidity tracking rules.</p>
                <div class="premium-mockup-frame">
                    <span>// STREAM_VIDEO_PLAYER_INTERFACE</span>
                    <button class="frame-action-btn">Launch Video Library</button>
                </div>
            </div>
        `,
        setups: `
            <div class="panel-block-layout">
                <h3>Weekly Forecast & Setup Vectors</h3>
                <p>Live technical trend projections across major pairs mapped out before Monday market openings.</p>
                <div class="premium-mockup-frame">
                    <span>// WEEKLY_MARKUP_DATA_FEED</span>
                    <button class="frame-action-btn">Open TradingView Chart Layout</button>
                </div>
            </div>
        `,
        executions: `
            <div class="panel-block-layout">
                <h3>Live Transaction Ledger & Recaps</h3>
                <p>A historical ledger showcasing execution entries matched directly with broker withdrawal histories.</p>
                <div class="premium-mockup-frame">
                    <span>// TRANSACTION_HISTORY_LOG_VERIFIED</span>
                    <button class="frame-action-btn">Download PDF Ledger</button>
                </div>
            </div>
        `
    };

    // Set initial frame viewport
    dynamicViewport.innerHTML = appViews.models;

    // Direct interface navigation event cycle
    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            menuTabs.forEach(btn => btn.classList.remove('active'));
            tab.classList.add('active');

            const viewKey = tab.getAttribute('data-view');
            dynamicViewport.innerHTML = appViews[viewKey];
        });
    });
});
