import React from 'react';
import useMobile from '../hooks/useMobile';

const Hero = () => {
  const isMobile = useMobile();
  return (
    <section id="hero" style={{ textAlign: 'center', paddingTop: isMobile ? '2rem' : '4rem', paddingBottom: '2rem' }}>
      <h1 style={{
        fontSize: isMobile ? 'clamp(2.2rem, 10vw, 3rem)' : 'clamp(3rem, 6vw, 5rem)',
        lineHeight: '1.1',
        marginBottom: '1.5rem',
        maxWidth: '800px',
        margin: '0 auto 1.5rem'
      }}>
        Agent Blitz <br />
        <span style={{ fontWeight: '600' }}>Automating <span className="glow-text">Intelligence</span></span>
      </h1>

      <p style={{
        color: 'var(--text-muted)',
        fontSize: '1.2rem',
        maxWidth: '600px',
        margin: '0 auto 3rem'
      }}>
        Join us for an interactive, no-code workshop on building real AI agents — no experience needed.
      </p>

      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <div className="icon-chip">
          <span className="icon">📅</span>
          <span className="label">DATE</span>
          <span>will be updated</span>
        </div>
        <div className="icon-chip">
          <span className="icon">📍</span>
          <span className="label">VENUE</span>
          <span>dropping soon 👀</span>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <a href="https://forms.cloud.microsoft/r/wTDC9YC597" className="btn-light">
          SECURE YOUR SPOT
        </a>
      </div>

      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="icon-chip" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>No Coding Needed</div>
        <div className="icon-chip" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>100% Hands-On</div>
        <div className="icon-chip" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>Free Entry</div>
        <div className="icon-chip" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>Activity Points</div>
      </div>
    </section>
  );
};

export default Hero;
