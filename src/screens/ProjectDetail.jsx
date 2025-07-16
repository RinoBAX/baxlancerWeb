export default function ProjectDetail() {
    const { projectId } = useParams();
    const { data: project, loading, error, execute: fetchProject } = useApi(null);

    useEffect(() => {
        if (projectId) {
            fetchProject(`api/projects/${projectId}`).catch(err => {
                console.error("Gagal memuat detail proyek:", err.message);
            });
        }
    }, [projectId, fetchProject]);

    if (loading) return <div className="container"><p>Memuat proyek...</p></div>;
    if (error) return <div className="container"><p style={{color: 'red'}}>Error: {error.message}</p></div>;
    if (!project) return <div className="container"><p>Proyek tidak ditemukan.</p></div>;

    return (
        <div className="detail-page container">
            <RouterLink to="/listproject" className="back-button">
                <ChevronLeft size={20} />
                Kembali ke Daftar Proyek
            </RouterLink>
            <div className="detail-content">
                <img src={project.iconUrl || 'https://placehold.co/800x400/cccccc/ffffff?text=Proyek'} alt={project.namaProyek} className="detail-image" />
                <h1 className="detail-title">{project.namaProyek}</h1>
                <div className="detail-meta">
                    <span><Tag size={16} /> {project.category || 'Umum'}</span>
                </div>
                <div className="detail-description" dangerouslySetInnerHTML={{ __html: project.deskripsi }} />
                 <div className="project-detail-reward">
                    <span>
                        Hasil Pengerjaan: Rp {Number(project.nilaiProyek).toLocaleString('id-ID')}
                    </span>
                </div>
            </div>
        </div>
    );
}