import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { GitBranch, ExternalLink, BookOpen } from 'lucide-react';
import { featuredProjects } from '../data/projects';
import ProjectModal from './ProjectModal';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="projects" className="section" ref={ref}>
        <div className="container">
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <motion.div variants={fadeUp}>
              <span className="section-label">Featured Projects</span>
              <h2 className="section-title">
                Machine Learning <span className="gradient-text">Projects</span>
              </h2>
              <div className="glow-line" />
              <p className="section-subtitle" style={{ marginBottom: '2.75rem' }}>
                End-to-end ML projects — from data preprocessing to deployed Streamlit applications.
              </p>
            </motion.div>

            <motion.div className="projects-grid" variants={stagger}>
              {featuredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  className={`project-card project-card-${project.categoryColor}`}
                  variants={fadeUp}
                  aria-label={project.title}
                >
                  {/* Header */}
                  <div className="project-card-header">
                    <div style={{ flex: 1 }}>
                      <span className={`badge badge-${project.categoryColor}`} style={{ marginBottom: '0.6rem' }}>
                        {project.category}
                      </span>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-tagline" style={{ marginTop: '0.3rem' }}>{project.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="project-description">{project.description}</p>

                  {/* Metrics (House Price only) */}
                  {project.metrics && (
                    <div className="project-metrics">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="metric-chip">
                          <span className="metric-value">{m.value}</span>
                          <span className="metric-label">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="project-tech">
                    {project.tech.map(t => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-blue btn-sm"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GitBranch size={14} aria-hidden="true" /> View GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      aria-label={`Open live demo for ${project.title}`}
                    >
                      <ExternalLink size={14} aria-hidden="true" /> Live Demo
                    </a>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => setSelected(project)}
                      aria-label={`View case study for ${project.title}`}
                      style={{ marginLeft: 'auto' }}
                    >
                      <BookOpen size={14} aria-hidden="true" /> Case Study
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
