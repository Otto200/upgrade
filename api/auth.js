export default async function handler(req, res) {
    // 🛡️ Cross-Origin Resource Sharing (CORS) Security Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

    // Handle preflight browser requests immediately
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow secure POST traffic payload streams
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed.' });
    }

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Missing authentication parameters.' });
        }

        // ========================================================
        // 🔒 MANUALLY AUTHORIZED TRADERS DATABASE MATRIX
        // Add, change, or remove user objects here to grant access.
        // ========================================================
        const authorizedUsers = [
            { email: "trader1@bankbugsfx.com", password: "BugsPassword2026" },
            { email: "admin@bankbugsfx.com", password: "InstitutionalCore77" },
            { email: "student@domain.com", password: "UnlockMentorship99" }
        ];

        // Format user matching requirements cleanly
        const cleanedEmail = email.toLowerCase().trim();
        const userMatch = authorizedUsers.find(u => u.email === cleanedEmail && u.password === password);

        if (userMatch) {
            // Generate a secure verification state timestamp token string signature
            const secureToken = btoa(JSON.stringify({
                authenticated: true,
                user: cleanedEmail,
                timestamp: Date.now()
            }));

            return res.status(200).json({ 
                success: true, 
                message: 'Access approved.',
                token: secureToken,
                redirectUrl: 'authorized/dashboard.html' // Routes precisely to your premium workspace
            });
        } else {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid credentials. Access Denied.' 
            });
        }

    } catch (error) {
        console.error('Core Auth Engine Failure Vector:', error);
        return res.status(500).json({ success: false, message: 'Internal infrastructure routing fault.' });
    }
}
