import { motion } from 'framer-motion';
import { GitBranch, Link2, ChevronDown, Database, Brain, BarChart2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Animated SVG data visualization motif
function DataVizSVG() {
  const nodes = [
    { cx: 200, cy: 80, r: 6, color: '#3b82f6' },
    { cx: 100, cy: 160, r: 4, color: '#8b5cf6' },
    { cx: 300, cy: 150, r: 5, color: '#3b82f6' },
    { cx: 160, cy: 240, r: 5, color: '#8b5cf6' },
    { cx: 260, cy: 230, r: 4, color: '#60a5fa' },
    { cx: 80,  cy: 280, r: 3, color: '#a78bfa' },
    { cx: 340, cy: 290, r: 4, color: '#3b82f6' },
    { cx: 200, cy: 320, r: 6, color: '#8b5cf6' },
    { cx: 130, cy: 370, r: 3, color: '#3b82f6' },
    { cx: 280, cy: 360, r: 4, color: '#8b5cf6' },
    { cx: 60,  cy: 130, r: 3, color: '#60a5fa' },
    { cx: 360, cy: 200, r: 3, color: '#a78bfa' },
  ];

  const edges = [
    [0,1],[0,2],[1,3],[2,4],[1,5],[2,6],[3,7],[4,7],[5,8],[6,9],[7,8],[7,9],[3,4],[0,10],[2,11],[4,6]
  ];

  return (
    <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="bg-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.02" />
        </radialGradient>
      </defs>
      <rect width="420" height="420" rx="16" fill="url(#bg-grad)" />

      {/* Edges */}
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'}
          strokeWidth="1"
          strokeOpacity="0.25"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: i * 0.06, ease: 'easeInOut' }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill={n.color}
          fillOpacity="0.85"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 + i * 0.07 }}
        />
      ))}

      {/* Bar chart mini */}
      {[0.4, 0.65, 0.5, 0.8, 0.6, 0.75].map((h, i) => (
        <motion.rect
          key={`bar-${i}`}
          x={40 + i * 24}
          y={420 - 40 - h * 60}
          width={14}
          height={h * 60}
          rx="3"
          fill={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'}
          fillOpacity="0.5"
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 1.4 + i * 0.08 }}
          style={{ transformOrigin: `${40 + i * 24 + 7}px 380px` }}
        />
      ))}

      {/* Grid lines */}
      {[80,160,240,320,400].map(y => (
        <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="white" strokeOpacity="0.04" />
      ))}
      {[80,160,240,320,400].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="white" strokeOpacity="0.04" />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="hero-bg">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Left: Content */}
          <div className="hero-content">
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span>B.Tech IT · KGiSL Institute of Technology</span>
            </motion.div>

            <motion.h1
              className="hero-title"
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{ whiteSpace: 'nowrap', fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.02em' }}
            >
              Devadharshini <span className="gradient-text">K.</span>
            </motion.h1>

            <motion.p
              className="hero-headline"
              custom={0.25}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Aspiring Data Scientist &amp; AI Developer
            </motion.p>

            <motion.p
              className="hero-intro"
              custom={0.35}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Exploring data, building predictive models, and developing practical AI applications.
              Passionate about Data Science, Machine Learning, and Artificial Intelligence — learning through hands-on projects and real-world problem solving.
            </motion.p>

            <motion.div
              className="hero-buttons"
              custom={0.45}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                aria-label="View my projects"
              >
                View My Projects
              </a>
              <a
                href="https://github.com/DEVADHARSHINI200608"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore my GitHub profile"
              >
                <GitBranch size={16} aria-hidden="true" />
                Explore GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/devadharshini-k-82b7ba314"
                className="btn btn-outline-violet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
              >
                <Link2 size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </motion.div>

            {/* Quick stat pills */}
            <motion.div
              style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
              custom={0.55}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: <Database size={13} />, text: '2 ML Projects Deployed' },
                { icon: <Brain size={13} />, text: '2 AI Apps in Dev' },
                { icon: <BarChart2 size={13} />, text: 'Data Science · ML · AI' },
              ].map((p, i) => (
                <span key={i} className="badge badge-blue">
                  {p.icon} {p.text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile photo — circular with float */}
          <motion.div
            className="hero-visual"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Floating wrapper */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}
            >
              {/* Outer glow layer */}
              <div style={{
                position: 'relative',
                display: 'inline-block',
              }}>
                {/* Pulsing glow behind */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.65, 0.4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '50%',
                    background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #3b82f6)',
                    filter: 'blur(10px)',
                    zIndex: 0,
                  }}
                />
                {/* Gradient ring border */}
                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '4px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 120deg, #3b82f6, #8b5cf6, #60a5fa, #8b5cf6, #3b82f6)',
                }}>
                  {/* Photo circle */}
                  <div style={{
                    width: '320px',
                    height: '320px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'var(--bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img
                      src="/profile.jpg"
                      alt="Devadharshini K. — Aspiring Data Scientist & AI Developer"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        display: 'block',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Badge below photo */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'rgba(59,130,246,0.08)',
                border: '1px solid rgba(59,130,246,0.22)',
                borderRadius: '100px',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: 'var(--accent-blue-light)',
                backdropFilter: 'blur(8px)',
              }}>
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', display: 'inline-block', flexShrink: 0 }}
                />
                Open to Opportunities
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'var(--text-muted)', cursor: 'default' }}
            aria-hidden="true"
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
