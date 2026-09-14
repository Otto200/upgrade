document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-tab');
    const displayWindow = document.getElementById('workspaceContent');

    const libraryData = {
        models: `
            <div class="pane-block">
                <h3>BANKBUGS LIQUIDITY MODELS</h3>
                <p>Advanced tracking frameworks mapping high-timeframe pool sweeps. Designed strictly to execute precision trade entries on structural expansion phases.</p>
                <div class="image-canvas">[ SYSTEM CHART CANVAS ]</div>
            </div>
        `,
        strategy: `
            <div class="pane-block">
                <h3>FULL STRATEGY & CONCEPTUAL RULES</h3>
                <p>Proprietary institutional risk frameworks tailored directly for structural prop evaluations and raw ECN execution parameters.</p>
                <div class="image-canvas">[ CHECKLIST MATRIX MAP ]</div>
            </div>
        `,
        mentorship: `
            <div class="pane-block">
                <h3>MENTORSHIP COMPENDIUM</h3>
                <p>Algorithmic system documentation modules covering core narrative mechanics and order flow delivery models.</p>
                <div class="image-canvas">[ MEDIA COMPONENT INTERFACE ]</div>
            </div>
        `,
        setups: `
            <div class="pane-block">
                <h3>WEEKLY ANALYSIS ARCHIVE</h3>
                <p>Current weekly directional forecast vectors, premium range definitions, and complete algorithmic trade recaps.</p>
                <div class="image-canvas">[ TECHNICAL FORWARD MARKUP ]</div>
            </div>
        `,
        executions: `
            <div class="pane-block">
                <h3>LIVE DATA EXECUTION LOG</h3>
                <p>Verified account trade processing parameters, entry execution screenshots, and real-time ledger accounting details.</p>
                <div class="image-canvas">[ HIGH RESOLUTION TRANSACTION LEDGER ]</div>
            </div>
        `
    };

    // Render baseline profile
    displayWindow.innerHTML = libraryData.models;

    // Direct interface navigation event cycle
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const indexKey = tab.getAttribute('data-content');
            displayWindow.innerHTML = libraryData[indexKey];
        });
    });
});
