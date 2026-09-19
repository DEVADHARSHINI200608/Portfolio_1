import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Mic, Heart, AlertCircle } from 'lucide-react';
import { aiProjects } from '../data/projects';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const projectIcons = {
  'seniormind-bhavi': <Mic size={20} />,
  'peace-safe-space': <Heart size={20} />,
};

export default function AIProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="ai-projects" className="section ai-projects-section" ref={ref}>
      <div className="container">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp}>
            <span className="section-label" style={{ color: 'var(--accent-violet-light)' }}>
              <span style={{ background: 'linear-gradient(90deg, var(--accent-violet), var(--accent-blue))', width: 20, height: 2, display: 'inline-block', borderRadius: 1 }} />
              AI Applications
            </span>
            <h2 className="section-title">
              AI-Powered <span className="gradient-text">App Projects</span>
            </h2>
            <div className="glow-line" style={{ background: 'linear-gradient(90deg, var(--accent-violet), var(--accent-blue))' }} />
            <p className="section-subtitle" style={{ marginBottom: '2.75rem' }}>
              Beyond traditional ML — building AI-powered applications with voice, language models, and conversational interfaces.
            </p>
          </motion.div>

          <motion.div className="ai-projects-grid" variants={stagger}>
            {aiProjects.map((project) => (
              <motion.article
                key={project.id}
                className="ai-project-card"
                variants={fadeUp}
                aria-label={project.title}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                      <div className="skill-icon-wrapper skill-icon-violet" style={{ width: 36, height: 36 }}>
                        {projectIcons[project.id] || <Cpu size={18} />}
                      </div>
                      <span className="badge badge-violet">{project.category}</span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{project.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{project.tagline}</p>
                  </div>
                  <span className="ai-status">{project.status}</span>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  {project.description}
                </p>

                {/* Features */}
                <div>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-violet-light)', marginBottom: '0.6rem' }}>
                    Key Features
                  </p>
                  <ul className="ai-features-list">
                    {project.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="project-tech">
                  {project.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>

                {/* Disclaimer if any */}
                {project.note && (
                  <div className="ai-disclaimer">
                    <AlertCircle size={12} style={{ display: 'inline', marginRight: '0.35rem', verticalAlign: 'middle' }} />
                    {project.note}
                  </div>
                )}

                {/* No links (in development) */}
                <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    🔒 GitHub &amp; Demo links will be added upon project completion.
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
