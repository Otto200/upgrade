document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadStrategyBtn');
    const notificationPanel = document.getElementById('notificationPanel');

    // Trigger explicit message on strategy kit selection
    downloadBtn.addEventListener('click', () => {
        notificationPanel.className = "visible-panel";
        notificationPanel.innerHTML = `
            <strong>📥 Accessing BANKBUGS Strategy:</strong><br>
            Your repeatable blueprint download token has initialized. Ensure steps 1 and 2 are fully completed to prevent connection drop-outs during trade setup matching.
        `;
        
        // Scroll smoothly to notification view for mobile users
        notificationPanel.scrollIntoView({ behavior: 'smooth' });
    });
});
