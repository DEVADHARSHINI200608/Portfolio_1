import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, BarChart3, Brain, Cpu, Wrench } from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap = { Code2, BarChart3, Brain, Cpu, Wrench };

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section" ref={ref} style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)' }}>
      <div className="container">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp}>
            <span className="section-label">Technical Skills</span>
            <h2 className="section-title">
              What I work <span className="gradient-text">with</span>
            </h2>
            <div className="glow-line" />
            <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
              Skills actively applied in projects, with a few I'm currently learning.
            </p>
          </motion.div>

          <motion.div className="skills-grid" variants={stagger}>
            {skillCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Code2;
              return (
                <motion.div
                  key={cat.id}
                  className="skill-category-card"
                  variants={fadeUp}
                >
                  <div className="skill-category-header">
                    <div className={`skill-icon-wrapper skill-icon-${cat.color}`}>
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{cat.label}</h3>
                  </div>
                  <div className="skill-pills-grid">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`skill-pill${skill.status === 'learning' ? ' learning' : ''}`}
                        title={skill.status === 'learning' ? 'Currently learning' : 'Applied in projects'}
                      >
                        {skill.name}
                        {skill.status === 'learning' && (
                          <span style={{ fontSize: '0.6rem', marginLeft: '2px' }}>✦</span>
                        )}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Legend */}
          <motion.div className="skills-legend" variants={fadeUp}>
            <div className="legend-item">
              <span className="skill-pill" style={{ padding: '0.2rem 0.6rem', fontSize: '0.7rem' }}>Applied in Projects</span>
            </div>
            <div className="legend-item">
              <span className="skill-pill learning" style={{ padding: '0.2rem 0.6rem', fontSize: '0.7rem' }}>
                Currently Learning ✦
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
