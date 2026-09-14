document.addEventListener('DOMContentLoaded', () => {
    const actionBtn = document.getElementById('actionBtn');
    const messageBox = document.getElementById('messageBox');

    actionBtn.addEventListener('click', () => {
        if (messageBox.classList.contains('hidden')) {
            messageBox.textContent = "🎉 Welcome! This application is completely responsive and successfully hosted for free!";
            messageBox.classList.remove('hidden');
            actionBtn.textContent = "Close Message";
        } else {
            messageBox.classList.add('hidden');
            actionBtn.textContent = "Say Hello";
        }
    });
});
