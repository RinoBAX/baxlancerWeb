const API_BASE_URL = 'http://backendku.vercel.app/api';

// Fungsi untuk mengambil semua berita
export const getNews = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/news`);
        if (!response.ok) {
            throw new Error('Gagal mengambil data berita dari server.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error di getNews:", error);
        // Mengembalikan array kosong agar aplikasi tidak crash
        return []; 
    }
};

// Fungsi untuk mengambil semua proyek dengan paginasi
export const getProjects = async (page = 1, pageSize = 10) => {
    try {
        const response = await fetch(`${API_BASE_URL}/projects?page=${page}&pageSize=${pageSize}`);
        if (!response.ok) {
            throw new Error('Gagal mengambil data proyek dari server.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error di getProjects:", error);
        // Mengembalikan struktur data default agar aplikasi tidak crash
        return { data: [], pagination: {} };
    }
};