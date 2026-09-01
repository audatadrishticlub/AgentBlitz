import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-surface-section">
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          AI agents are everywhere on your feed right now — everyone's talking about them, but ask someone how they actually <em>work</em> and you mostly get buzzwords and blank stares. Same energy here, ngl. That's exactly the gap Agent Blitz is here to close.
        </p>
        <p>
          No boring lecture, no death-by-slides. Just an interactive, <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>peer-led</span> session where you go from "wait, what even is an API" to actually building your own AI agents by the end of the day. It's all <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>hands-on</span>, all <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>beginner-friendly</span>, and you don't need to know how to code to show up.
        </p>
      </div>
    </section>
  );
};

export default About;
