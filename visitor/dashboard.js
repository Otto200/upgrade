/* ==========================================================================
   BANKBUGS|FX PREMIUM DASHBOARD CONTROLLER
   Target File: visitor/dashboard.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobileToggle');
    const sidebar = document.getElementById('sidebar');
    const pairs = document.querySelectorAll('.pairs-selector .pair');
    const unlockBtn = document.getElementById('unlockMentorshipBtn');
    const premiumBtn = document.querySelector('.premium-action-btn');
    const ctaUnlockBtn = document.getElementById('ctaUnlockBtn');

    // --- 1. Responsive Sidebar Offcanvas Navigation Toggle ---
    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('open');
        });

        // Click outside the workspace sidebar context to dismiss the drawer smoothly
        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== mobileToggle) {
                sidebar.classList.remove('open');
            }
        });
    }

    // --- 2. Interactive Asset Group Selection & Vector Updates ---
    pairs.forEach(pair => {
        pair.addEventListener('click', () => {
            // Remove previous active state vectors
            pairs.forEach(p => p.classList.remove('active'));
            pair.classList.add('active');
            
            // Emulate interbank data premium update sequences
            const wave = document.querySelector('.vector-wave path');
            if (wave) {
                // Dynamically modify vector paths to represent market liquidity shift signatures
                const variantPaths = [
                    "M0,150 Q75,40 150,110 T300,50 T450,160 T600,80",
                    "M0,100 Q75,160 150,70 T300,140 T450,60 T600,120",
                    "M0,60 Q75,30 150,140 T300,90 T450,110 T600,50"
                ];
                const selectedIndex = Math.floor(Math.random() * variantPaths.length);
                wave.setAttribute('d', variantPaths[selectedIndex]);
                
                // Randomize positions of the swing point markers slightly to simulate a data update
                const highMarker = document.querySelector('.swing-point-marker.high');
                const lowMarker = document.querySelector('.swing-point-marker.low');
                
                if (highMarker) {
                    highMarker.style.top = `${Math.floor(Math.random() * 25) + 15}%`;
                    highMarker.style.left = `${Math.floor(Math.random() * 20) + 35}%`;
                }
                if (lowMarker) {
                    lowMarker.style.top = `${Math.floor(Math.random() * 25) + 60}%`;
                    lowMarker.style.left = `${Math.floor(Math.random() * 20) + 65}%`;
                }
            }
        });
    });

    // --- 3. Premium Mentorship Verification Portal Actions ---
    const triggerMentorshipPrompt = (e) => {
        if (e) e.preventDefault();
        alert("Initializing Secure Gateway Link...\nRedirecting you to the premium BANKBUGS|FX Institutional Mentorship portal.");
    };

    // Bind event hooks to user authentication access points safely
    if (unlockBtn) unlockBtn.addEventListener('click', triggerMentorshipPrompt);
    if (premiumBtn) premiumBtn.addEventListener('click', triggerMentorshipPrompt);
    if (ctaUnlockBtn) ctaUnlockBtn.addEventListener('click', triggerMentorshipPrompt);
});
