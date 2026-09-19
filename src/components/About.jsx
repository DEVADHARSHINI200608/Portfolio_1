import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, BookOpen, Database, Brain, Cpu } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const interests = [
  { icon: <Database size={13} />, label: 'Data Science' },
  { icon: <Brain size={13} />, label: 'Machine Learning' },
  { icon: <Cpu size={13} />, label: 'Artificial Intelligence' },
  { icon: <BookOpen size={13} />, label: 'Predictive Analytics' },
  { icon: <Cpu size={13} />, label: 'AI Application Development' },
];

const stats = [
  { value: '3rd Year', label: 'B.Tech IT Student' },
  { value: 'KGiSL', label: 'Institute of Technology' },
  { value: 'Python', label: 'Primary Language' },
  { value: '2 Live', label: 'Deployed ML Apps' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={fadeUp}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Building skills through <span className="gradient-text">hands-on projects</span>
            </h2>
            <div className="glow-line" />
          </motion.div>

          <div className="about-grid">
            {/* Left: Text */}
            <motion.div variants={stagger}>
              <motion.p variants={fadeUp} style={{ marginBottom: '1.25rem' }}>
                I am a third-year B.Tech Information Technology student at KGiSL Institute of Technology,
                developing my foundation in Python, Data Science, Machine Learning, and AI application development.
              </motion.p>
              <motion.p variants={fadeUp} style={{ marginBottom: '1.25rem' }}>
                My learning journey includes data preprocessing, exploratory data analysis,
                predictive modeling, model evaluation, and building practical applications that
                address real-world problems.
              </motion.p>
              <motion.p variants={fadeUp} style={{ marginBottom: '1.75rem' }}>
                I am also strengthening my Python problem-solving skills through Data Structures
                and Algorithms practice — constantly working to improve my technical foundation.
              </motion.p>

              {/* Areas of interest */}
              <motion.div variants={fadeUp}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-blue)', marginBottom: '0.75rem' }}>
                  Areas of Interest
                </p>
                <div className="interest-tags">
                  {interests.map((item, i) => (
                    <span key={i} className="badge badge-blue">
                      {item.icon} {item.label}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={{ marginTop: '2rem' }}>
                <a
                  href="https://github.com/DEVADHARSHINI200608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-blue btn-sm"
                  aria-label="View GitHub profile"
                >
                  <GraduationCap size={15} />
                  View GitHub Profile
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Stat cards */}
            <motion.div variants={fadeUp}>
              <div className="about-stats-grid">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    className="about-stat-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    <span className="about-stat-value">{s.value}</span>
                    <span className="about-stat-label">{s.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Education card */}
              <motion.div
                className="card"
                style={{ padding: '1.5rem', marginTop: '1rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div className="skill-icon-wrapper skill-icon-blue" style={{ flexShrink: 0 }}>
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      B.Tech Information Technology
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.15rem' }}>
                      KGiSL Institute of Technology
                    </p>
                    <span className="badge badge-blue" style={{ marginTop: '0.5rem' }}>
                      3rd Year · Ongoing
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
