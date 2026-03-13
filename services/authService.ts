export const AuthService = {
    login: async (credentials: any) => {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        const data = await res.json();
        if (res.ok) {
            localStorage.setItem('token', data.token);
            if (data.user) {
                localStorage.setItem('user', JSON.stringify(data.user));
            }
            return data;
        } else {
            throw new Error(data.message || 'Login failed');
        }
    },

    logout: (isExpired = false) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = isExpired ? '/admin/login?expired=true' : '/admin/login';
    },

    getToken: () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token');
        }
        return null;
    },

    isAuthenticated: () => {
        const token = AuthService.getToken();
        // Basic check. For production, you might want to decode JWT and check expiry
        return !!token;
    },

    // Helper for authenticated requests
    fetchAuth: async (url: string, options: RequestInit = {}) => {
        const token = AuthService.getToken();
        const headers: any = {
            ...options.headers,
            'Authorization': `Bearer ${token}`
        };

        // Only set Content-Type to application/json if not sending FormData
        if (!(options.body instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }

        const res = await fetch(url, { ...options, headers });

        if (res.status === 401 || res.status === 403) {
            AuthService.logout(true);
            throw new Error('Session expired');
        }

        return res;
    }
};
