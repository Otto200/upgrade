document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-item');
    const viewport = document.getElementById('workspaceContent');

    // Structured Dataset holding your proprietary strategy blueprints
    const contentData = {
        models: `
            <div class="content-block">
                <h3>📐 BANKBUGS Liquidity Models</h3>
                <p>Master how our team tracks institutional market makers. Focus strictly on HTF pool sweeps before executing LTF entry patterns.</p>
                <!-- REPLACE WITH YOUR STATIC IMAGE LATER -->
                <div class="placeholder-image">📸 [Insert Liquidity Model Chart Blueprint]</div>
            </div>
        `,
        strategy: `
            <div class="content-block">
                <h3>🎯 Full Strategy & Concepts</h3>
                <p>The repeatable framework built for prop firms. Learn order block validation, premium vs. discount pricing matrices, and exact risk structures.</p>
                <div class="placeholder-image">📸 [Insert Strategy Rules & Checklist Image]</div>
            </div>
        `,
        mentorship: `
            <div class="content-block">
                <h3>📺 Video Masterclasses</h3>
                <p>Watch foundational video series recorded specifically to align PNG students with global algorithmic trading standardizations.</p>
                <div class="placeholder-image">🎥 [Embed Video URL Link or Image Cover]</div>
            </div>
        `,
        setups: `
            <div class="content-block">
                <h3>🔮 Weekly Analysis & Recaps</h3>
                <p>Updated weekly. Review live price metrics, forecast scenarios for major pairs, and dissect past trades for continuous learning.</p>
                <div class="placeholder-image">📸 [Insert Weekly Outlook Markup]</div>
            </div>
        `,
        executions: `
            <div class="content-block">
                <h3>🔥 Live Executions Log</h3>
                <p>Real verified live data histories. Review step-by-step documentation showing precisely where entries occurred and trailing stop mechanics.</p>
                <div class="placeholder-image">📸 [Insert Verified Broker Withdrawal proof / Trade log]</div>
            </div>
        `
    };

    // Initialize with default state
    viewport.innerHTML = contentData.models;

    // Handle button switching mechanism
    menuButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            menuButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const section = btn.getAttribute('data-content');
            viewport.innerHTML = contentData[section];
        });
    });
});
