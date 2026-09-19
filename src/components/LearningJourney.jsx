import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { RefreshCw, CheckCircle2 } from 'lucide-react';
import { learningJourney } from '../data/experience';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };

const areaColors = {
  Programming: 'programming',
  'Data Science': 'datascience',
  'Machine Learning': 'ml',
  'AI Development': 'ai',
};

export default function LearningJourney() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="journey" className="section" ref={ref} style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)' }}>
      <div className="container">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp}>
            <span className="section-label">My Learning Journey</span>
            <h2 className="section-title">
              Currently <span className="gradient-text">Learning</span>
            </h2>
            <div className="glow-line" />
            <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
              An honest view of my ongoing learning — topics I'm practicing, applying in projects, and continuously improving.
            </p>
          </motion.div>

          <motion.div className="learning-grid" variants={stagger}>
            {learningJourney.map((item) => (
              <motion.div
                key={item.id}
                className="learning-card"
                variants={fadeUp}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className={`learning-area ${areaColors[item.area] || 'programming'}`}>
                    {item.area}
                  </span>
                  <span className={`learning-status ${item.status}`}>
                    {item.status === 'applied' ? (
                      <><CheckCircle2 size={12} /> Applied in Projects</>
                    ) : (
                      <><RefreshCw size={12} /> Ongoing</>
                    )}
                  </span>
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer note */}
          <motion.div variants={fadeUp} style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Learning is an ongoing process — this section reflects my current focus areas, not a complete or finished skill set.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
