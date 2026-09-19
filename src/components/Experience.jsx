import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, CheckCircle2, BookOpen } from 'lucide-react';
import { experience } from '../data/experience';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const exp = experience[0];

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp}>
            <span className="section-label">Experience</span>
            <h2 className="section-title">
              Internship <span className="gradient-text">Experience</span>
            </h2>
            <div className="glow-line" />
          </motion.div>

          <motion.div className="experience-card" variants={fadeUp}>
            {/* Header */}
            <div className="experience-header">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <div className="skill-icon-wrapper skill-icon-blue" style={{ width: 44, height: 44, borderRadius: '10px' }}>
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.15rem' }}>
                      {exp.company}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span className="company-badge">{exp.type}</span>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Role:</strong>{' '}
                  {exp.role}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>Duration:</strong>{' '}
                  {exp.duration}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div style={{ marginBottom: '2rem' }}>
              <p className="exp-section-label">Overview</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                {exp.overview}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {/* Responsibilities */}
              <div>
                <p className="exp-section-label">Responsibilities</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.87rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={14} color="var(--accent-blue)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning outcomes */}
              <div>
                <p className="exp-section-label">Key Learning Outcomes</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.learnings.map((l, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.87rem', color: 'var(--text-secondary)' }}>
                      <BookOpen size={14} color="var(--accent-violet-light)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Projects completed */}
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
              <p className="exp-section-label">Projects Completed</p>
              <div className="experience-projects-grid">
                {exp.projects.map((p, i) => (
                  <div key={i} className="exp-project-card">
                    <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                      {p.name}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech used */}
            <div style={{ marginTop: '1.5rem' }}>
              <p className="exp-section-label">Technologies Used</p>
              <div className="project-tech">
                {exp.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
