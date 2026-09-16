document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn?.querySelector('.btn-text');
    const spinner = submitBtn?.querySelector('.spinner');

    if (!loginForm) return;

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value;

        // Display the loading spinner inside the premium button layout
        if (submitBtn && btnText && spinner) {
            submitBtn.disabled = true;
            btnText.classList.add('hidden');
            spinner.classList.remove('hidden');
        }

        try {
            // Post authentication credentials to your Vercel API handler
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: emailValue, password: passwordValue })
            });

            const data = await response.json();

            if (data.success && data.redirectUrl) {
                // Lock the session verification token to authorize the route guard
                sessionStorage.setItem('fx_auth_node', data.token);
                
                // Directly transfer authorized users to the premium unlocked dashboard
                window.location.href = data.redirectUrl;
            } else {
                alert(data.message || 'Authentication failed. Access Denied.');
                resetButtonState();
            }

        } catch (error) {
            console.error('Transport vector fault:', error);
            alert('Communication failure. Verify API deployment pathways.');
            resetButtonState();
        }
    });

    function resetButtonState() {
        if (submitBtn && btnText && spinner) {
            submitBtn.disabled = false;
            btnText.classList.remove('hidden');
            spinner.classList.add('hidden');
        }
    }
});
