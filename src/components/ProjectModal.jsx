import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GitBranch, ExternalLink, AlertTriangle } from 'lucide-react';

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panel = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 30, scale: 0.97, transition: { duration: 0.25 } },
};

export default function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const firstFocusRef = useRef(null);
  useEffect(() => { firstFocusRef.current?.focus(); }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
      >
        <motion.div
          className="modal-panel"
          variants={panel}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close button */}
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close case study"
            ref={firstFocusRef}
          >
            <X size={16} />
          </button>

          {/* Header */}
          <div style={{ paddingRight: '2.5rem' }}>
            <span className={`badge badge-${project.categoryColor}`} style={{ marginBottom: '0.75rem' }}>
              {project.category}
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{project.tagline}</p>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', marginTop: '1.5rem' }} />

          {/* 1. Overview */}
          <p className="modal-section-title">Overview</p>
          <p className="modal-text">{project.description}</p>

          {/* 2. Problem Statement */}
          <p className="modal-section-title">Problem Statement</p>
          <p className="modal-text">{project.problem}</p>

          {/* 3. Dataset */}
          <p className="modal-section-title">Dataset</p>
          <p className="modal-text">{project.dataset}</p>

          {/* 4. Data Preprocessing */}
          <p className="modal-section-title">Data Preprocessing</p>
          <ul className="modal-list">
            {project.preprocessing.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          {/* 5. Methodology */}
          <p className="modal-section-title">Methodology</p>
          <ul className="modal-list">
            {project.methodology.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          {/* 6. Evaluation */}
          <p className="modal-section-title">Model Evaluation</p>
          <p className="modal-text">{project.evaluation}</p>

          {/* 7. Results / Metrics */}
          <p className="modal-section-title">Results</p>
          <p className="modal-text" style={{ marginBottom: project.metrics ? '1rem' : 0 }}>
            {project.results}
          </p>
          {project.metrics && (
            <>
              <div className="modal-metrics">
                {project.metrics.map((m, i) => (
                  <div key={i} className="modal-metric">
                    <span className="modal-metric-value">{m.value}</span>
                    <span className="modal-metric-label">{m.label}</span>
                    {m.unit && <span className="modal-metric-note">{m.unit}</span>}
                  </div>
                ))}
              </div>
              {/* Provisional warning */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.75rem', padding: '0.6rem 0.85rem', background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '8px' }}>
                <AlertTriangle size={13} color="#d97706" style={{ marginTop: '2px', flexShrink: 0 }} />
                <p style={{ fontSize: '0.75rem', color: '#d97706', lineHeight: 1.5 }}>
                  These metrics are provisional records from project documentation. Confirm the exact evaluation setup and model configuration for final reporting.
                </p>
              </div>
            </>
          )}

          {/* 8. Tech Stack */}
          <p className="modal-section-title">Technologies Used</p>
          <div className="project-tech">
            {project.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
          </div>

          {/* 9. Limitations */}
          <p className="modal-section-title">Limitations</p>
          <ul className="modal-list">
            {project.limitations.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          {/* 10. Future Work */}
          <p className="modal-section-title">Future Improvements</p>
          <ul className="modal-list">
            {project.futureWork.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          {/* Links */}
          <div className="modal-links">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-blue btn-sm"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitBranch size={14} /> View GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label={`Open live demo for ${project.title}`}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
