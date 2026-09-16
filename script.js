document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    const emailGroup = emailInput.closest('.input-group');
    const passwordGroup = passwordInput.closest('.input-group');
    
    const togglePasswordBtn = document.getElementById('togglePassword');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner');

    // --- 1. Toggle Password Visibility Mechanics ---
    togglePasswordBtn.addEventListener('click', () => {
        const isPassword = passwordInput.getAttribute('type') === 'password';
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
        
        // Dynamic architectural update to vector icon inside button
        togglePasswordBtn.innerHTML = isPassword ? `
            <svg viewBox="0 0 24 24" class="icon-eye" aria-hidden="true">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        ` : `
            <svg viewBox="0 0 24 24" class="icon-eye" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    });

    // --- 2. Client-side Interface Verification Tools ---
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    // Clear UI Validation Error Classes on Input Focus
    [emailInput, passwordInput].forEach(input => {
        input.addEventListener('input', () => {
            const group = input.closest('.input-group');
            if (group.classList.contains('invalid')) {
                group.classList.remove('invalid');
            }
        });
    });

    // --- 3. Form Submission Processing & Live API Routing ---
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        let isValid = true;
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value;

        // Perform Interface Validation Rules
        if (!validateEmail(emailValue)) {
            emailGroup.classList.add('invalid');
            isValid = false;
        }

        if (passwordValue.length < 8) {
            passwordGroup.classList.add('invalid');
            isValid = false;
        }

        if (!isValid) return;

        // Visual Presentation state updates for network action tracking
        submitBtn.disabled = true;
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');

        try {
            // Post authentication credentials to your Vercel API endpoint route
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: emailValue, password: passwordValue })
            });

            const data = await response.json();

            if (data.success && data.redirectUrl) {
                // Lock the session verification token inside sessionStorage
                sessionStorage.setItem('fx_auth_node', data.token);
                
                // Transfer traffic directly to the unlocked authorized workspace ecosystem
                window.location.href = data.redirectUrl;
            } else {
                alert(data.message || 'Authentication failed. Access Denied.');
                resetButtonState();
            }

        } catch (error) {
            console.error('Network transport vector fault:', error);
            alert('Communication failure. Verify API serverless configuration setup.');
            resetButtonState();
        }
    });

    function resetButtonState() {
        submitBtn.disabled = false;
        btnText.classList.remove('hidden');
        spinner.classList.add('hidden');
    }
});
