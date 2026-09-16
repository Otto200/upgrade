export default async function handler(req, res) {
    // Cross-origin headers protection
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed.' });
    }

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Missing parameters.' });
        }

        // ========================================================
        // 🔒 MANUALLY AUTHORIZED TRADERS DATABASE MATRIX
        // Add or remove user objects below to grant/revoke access.
        // ========================================================
        const authorizedUsers = [
            { email: "trader@bankbugsfx.app", password: "12345678" },
            { email: "admin@bankbugsfx.app", password: "12345678" },
            { email: "student@bankbugsfx.app", password: "12345678" }
        ];

        // Match against user inputs cleanly
        const cleanedEmail = email.toLowerCase().trim();
        const userMatch = authorizedUsers.find(u => u.email === cleanedEmail && u.password === password);

        if (userMatch) {
            return res.status(200).json({ 
                success: true, 
                message: 'Access approved.',
                redirectUrl: 'authorized/dashboard.html'
            });
        } else {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid institutional credentials.' 
            });
        }

    } catch (error) {
        console.error('Auth handler error vector:', error);
        return res.status(500).json({ success: false, message: 'Internal engine fault.' });
    }
}
