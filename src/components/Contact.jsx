import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitBranch, Link2, Mail } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</span>
            <h2 className="section-title">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="glow-line" style={{ margin: '1.5rem auto 0' }} />
          </motion.div>

          <motion.div className="contact-card" variants={fadeUp}>
            <div style={{ width: 56, height: 56, borderRadius: '14px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Mail size={24} color="white" aria-hidden="true" />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Open to Internship &amp; Placement Opportunities
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: '0.5rem' }}>
              I'm a B.Tech IT student actively looking for internships, project collaborations, and learning opportunities in Data Science, Machine Learning, and AI development.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.75 }}>
              Feel free to reach out via GitHub, LinkedIn, or email.
            </p>

            <div className="contact-links">
              <a
                href="https://github.com/DEVADHARSHINI200608"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="Visit GitHub profile"
              >
                <GitBranch size={16} aria-hidden="true" /> GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/devadharshini-k-82b7ba314"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Connect on LinkedIn"
              >
                <Link2 size={16} aria-hidden="true" /> Connect on LinkedIn
              </a>
              <a
                href="mailto:devadharshinisaravanakumar26@gmail.com"
                className="btn btn-outline-blue"
                aria-label="Send email to Devadharshini"
              >
                <Mail size={16} aria-hidden="true" /> Email Me
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
