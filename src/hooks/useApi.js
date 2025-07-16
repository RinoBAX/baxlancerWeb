import { useState, useCallback } from 'react';

const API_BASE_URL = import.meta.env.API_ADMIN_BASE_URL;

export const useApi = (token) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const execute = useCallback(async (endpoint, method = 'GET', body = null) => {
        setLoading(true);
        setError(null); 
        
        const url = `${API_BASE_URL}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const options = { method, headers };
        if (body) {
            options.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                let errorMessage = `An error occurred: ${response.status}`;
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || JSON.stringify(errorData);
                } catch (e) {
                    errorMessage = await response.text();
                }
                throw new Error(errorMessage);
            }
            if (response.status === 204) {
                setData(null);
                return null;
            }

            const result = await response.json();
            setData(result);
            return result;

        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [token]);

    return { data, loading, error, execute };
};
