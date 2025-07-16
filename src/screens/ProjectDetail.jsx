export default function ProjectDetail() {
    const { projectId } = useParams();
    const { data: project, loading, error, execute: fetchProject } = useApi(null);

    useEffect(() => {
        if (projectId) {
            fetchProject(`api/projects/${projectId}`).catch(err => {
                console.error("Gagal memuat detail project:", err.message);
            });
        }
    }, [projectId, fetchProject]);

    if (loading) return <div className="container"><p>Memuat project...</p></div>;
    if (error) return <div className="container"><p style={{color: 'red'}}>Error: {error.message}</p></div>;
    if (!project) return <div className="container"><p>project tidak ditemukan.</p></div>;

    return (
        <div className="detail-page container">
            <RouterLink to="/listproject" className="back-button">
                <ChevronLeft size={20} />
                Kembali ke Daftar project
            </RouterLink>
            <div className="detail-content">
                <img src={project.iconUrl || 'https://placehold.co/800x400/cccccc/ffffff?text=project'} alt={project.namaproject} className="detail-image" />
                <h1 className="detail-title">{project.namaproject}</h1>
                <div className="detail-meta">
                    <span><Tag size={16} /> {project.category || 'Umum'}</span>
                </div>
                <div className="detail-description" dangerouslySetInnerHTML={{ __html: project.deskripsi }} />
                 <div className="project-detail-reward">
                    <span>
                        Hasil Pengerjaan: Rp {Number(project.nilaiproject).toLocaleString('id-ID')}
                    </span>
                </div>
            </div>
        </div>
    );
}