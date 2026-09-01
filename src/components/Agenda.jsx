import React from 'react';

const Agenda = () => {
  return (
    <section id="agenda">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Workshop Agenda</h2>
      
      <div className="bg-surface-section" style={{ padding: '0', overflow: 'hidden' }}>
        <table className="agenda-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <th style={{ padding: '1.5rem', width: '20%', color: 'var(--text-muted)' }}>Time</th>
              <th style={{ padding: '1.5rem', width: '30%', color: 'var(--text-muted)' }}>Session</th>
              <th style={{ padding: '1.5rem', color: 'var(--text-muted)' }}>What's Happening</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1.5rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>10:00 AM – 10:25 AM</td>
              <td style={{ padding: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>Kickoff & Hot Takes ☕</td>
              <td style={{ padding: '1.5rem', color: 'var(--text-muted)' }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Let's talk AI agents — open floor, no dumb questions, come with opinions.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Quick intro to Data Drishti and what we've got planned this year.</li>
                  <li>Group activity to bust some common AI myths together.</li>
                </ul>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1.5rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>10:25 AM – 11:00 AM</td>
              <td style={{ padding: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>How Agents Actually Work</td>
              <td style={{ padding: '1.5rem', color: 'var(--text-muted)' }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>The real breakdown of what's going on under the hood of an AI agent.</li>
                  <li style={{ marginBottom: '0.5rem' }}>How agents pull in outside data and talk to APIs.</li>
                  <li>Live Q&A to map out how "tool-calling" actually works, step by step.</li>
                </ul>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1.5rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>11:00 AM – 12:00 PM</td>
              <td style={{ padding: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>Build Sprint #1: Money Moves Agent 💸</td>
              <td style={{ padding: '1.5rem', color: 'var(--text-muted)' }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Build your own AI agent that reads the market for you.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Set it up to check on portfolio health monthly.</li>
                  <li>Get it spitting out actual trend reports you can use.</li>
                </ul>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(45, 225, 208, 0.03)' }}>
              <td style={{ padding: '1.5rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>12:00 PM – 1:00 PM</td>
              <td style={{ padding: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>Lunch + Vibes 🍕</td>
              <td style={{ padding: '1.5rem', color: 'var(--text-muted)' }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                  <li>Food, breather, meet people, no agenda — just recharge.</li>
                </ul>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1.5rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>1:00 PM – 1:40 PM</td>
              <td style={{ padding: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>Fixing Your Chaotic Student Life</td>
              <td style={{ padding: '1.5rem', color: 'var(--text-muted)' }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Group discussion: what's actually eating up your time as a student.</li>
                  <li>Sketch out what an AI system to fix that could look like.</li>
                </ul>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '1.5rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>1:40 PM – 2:30 PM</td>
              <td style={{ padding: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>Build Sprint #2: Your Personal Task Bot 🤖</td>
              <td style={{ padding: '1.5rem', color: 'var(--text-muted)' }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Build an agent that keeps your life together.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Feed it your syllabus, deadlines, and project milestones.</li>
                  <li>Get it auto-scheduling and prioritizing your to-dos.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '1.5rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>2:30 PM – 3:00 PM</td>
              <td style={{ padding: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>Wrap-Up & Real Talk</td>
              <td style={{ padding: '1.5rem', color: 'var(--text-muted)' }}>
                <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Group reflection — what clicked, what you're taking home.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Open floor for any last troubleshooting or questions.</li>
                  <li>Quick feedback form (help us make the next one even better).</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Agenda;
