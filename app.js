document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const displayBox = document.getElementById('strategyDisplay');

    // BANKBUGS|FX Custom Strategy Framework
    const strategies = {
        prop: `
            <div class="data-row"><span class="label">System Identity</span><span class="val">BANKBUGS Prop Bot</span></div>
            <div class="data-row"><span class="label">Max Daily Risk</span><span class="val">1.5% Hard Ceiling</span></div>
            <div class="data-row"><span class="label">Risk-to-Reward</span><span class="val">1 : 2.5 Minimum</span></div>
            <div class="data-row"><span class="label">Evaluation Focus</span><span class="val green">Drawdown Protection</span></div>
        `,
        live: `
            <div class="data-row"><span class="label">System Identity</span><span class="val">BANKBUGS Live Run</span></div>
            <div class="data-row"><span class="label">Withdrawal Cadence</span><span class="val">Bi-Weekly Target</span></div>
            <div class="data-row"><span class="label">Risk per Trade</span><span class="val">0.5% - 1.0% Max</span></div>
            <div class="data-row"><span class="label">Broker Setup</span><span class="val green">Mass Liquidity ECN</span></div>
        `
    };

    // Initialize display content
    displayBox.innerHTML = strategies.prop;

    // Tab switcher logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const selectedStrategy = tab.getAttribute('data-strategy');
            displayBox.innerHTML = strategies[selectedStrategy];
        });
    });
});
