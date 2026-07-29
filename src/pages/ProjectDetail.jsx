import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const index = projects.findIndex((p) => p.id === id)
  const project = projects[index]

  if (!project) {
    return (
      <div className="page">
        <Header />
        <div className="gutter" style={{ padding: '10vh 6vw' }}>
          <p>Proyecto no encontrado.</p>
          <Link to="/" className="back-link">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  const prev = projects[index - 1]
  const next = projects[index + 1]

  // Detecta si demoVideo es un ID de YouTube o una ruta de archivo local
  const isYoutube = project.demoVideo && !project.demoVideo.endsWith('.mp4')

  return (
    <div className="page">
      <Header />

      <div className="detail-header">
        <Link to="/" className="back-link">
          ← Todos los proyectos
        </Link>
        
        <div className="title-wrapper">
          <div className="idx">{project.orden}- </div>
          <h1>{project.nombre}</h1>
        </div>
        
        <p className="resumen">{project.resumen}</p>
      </div>

<div className="detail-body">
        <div className="detail-main">
          <h2>Demo</h2>
          <div className="demo-frame">
            {project.demoVideo ? (
              isYoutube ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.demoVideo}`}
                  title={`Demo de ${project.nombre}`}
                  allowFullScreen
                />
              ) : (
                <video src={project.demoVideo} controls />
              )
            ) : (
              <div className="demo-placeholder">
                Añade aquí el ID de YouTube o la ruta del vídeo
                <br />
                en src/data/projects.js
              </div>
            )}
          </div>
        </div>

        <div className="detail-side">
          <div className="box">
            <h2>Tecnologías</h2>
            <div className="stack-row">
              {project.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* NUEVA CAJA: La descripción convertida en tarjeta */}
          <div className="box box-descripcion">
            <h2>Descripción</h2>
            <p className="descripcion-text">{project.descripcion}</p>
          </div>

          <div className="box">
            <h2>Descarga</h2>
            {project.apkUrl ? (
              <a className="download-btn" href={project.apkUrl}>
                Descargar apk
              </a>
            ) : (
              <a className="download-btn" href="#" aria-disabled="true">
                Enlace pendiente
              </a>
            )}
            {project.webUrl && (
              <a className="repo-link" href={project.webUrl} target="_blank" rel="noopener noreferrer">
                Visitar sitio web →
              </a>
            )}
            {project.repoUrl && (
              <a className="repo-link" href={project.repoUrl} target="_blank">
                Ver código en GitHub →
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="detail-nav">
        {prev ? (
          <Link to={`/proyecto/${prev.id}`}>← {prev.nombre}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/proyecto/${next.id}`}>{next.nombre} →</Link>
        ) : (
          <span />
        )}
      </div>
      <Footer />
    </div>
  )
}
