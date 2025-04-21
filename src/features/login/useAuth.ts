import { useState, useEffect } from 'react';

export type User = { email: string };

const KEY = 'eshop-user';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(() => {
        const raw = localStorage.getItem(KEY);
        return raw ? (JSON.parse(raw) as User) : null;
    });

    useEffect(() => {
        user
            ? localStorage.setItem(KEY, JSON.stringify(user))
            : localStorage.removeItem(KEY);
    }, [user]);

    return { user, setUser, logout: () => setUser(null) };
};
