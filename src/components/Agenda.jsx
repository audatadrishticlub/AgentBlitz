import React from 'react';
import useMobile from '../hooks/useMobile';

const agendaData = [
  {
    time: "10:00 AM – 10:25 AM",
    title: "Kickoff & Hot Takes ☕",
    details: [
      "Let's talk AI agents — open floor, no dumb questions, come with opinions.",
      "Quick intro to Data Drishti and what we've got planned this year.",
      "Group activity to bust some common AI myths together."
    ]
  },
  {
    time: "10:25 AM – 11:00 AM",
    title: "How Agents Actually Work",
    details: [
      "The real breakdown of what's going on under the hood of an AI agent.",
      "How agents pull in outside data and talk to APIs.",
      "Live Q&A to map out how \"tool-calling\" actually works, step by step."
    ]
  },
  {
    time: "11:00 AM – 12:00 PM",
    title: "Build Sprint #1: Money Moves Agent 💸",
    details: [
      "Build your own AI agent that reads the market for you.",
      "Set it up to check on portfolio health monthly.",
      "Get it spitting out actual trend reports you can use."
    ]
  },
  {
    time: "12:00 PM – 1:00 PM",
    title: "Lunch + Vibes 🍕",
    highlight: true,
    details: [
      "Food, breather, meet people, no agenda — just recharge."
    ]
  },
  {
    time: "1:00 PM – 1:40 PM",
    title: "Fixing Your Chaotic Student Life",
    details: [
      "Group discussion: what's actually eating up your time as a student.",
      "Sketch out what an AI system to fix that could look like."
    ]
  },
  {
    time: "1:40 PM – 2:30 PM",
    title: "Build Sprint #2: Your Personal Task Bot 🤖",
    details: [
      "Build an agent that keeps your life together.",
      "Feed it your syllabus, deadlines, and project milestones.",
      "Get it auto-scheduling and prioritizing your to-dos."
    ]
  },
  {
    time: "2:30 PM – 3:00 PM",
    title: "Wrap-Up & Real Talk",
    details: [
      "Group reflection — what clicked, what you're taking home.",
      "Open floor for any last troubleshooting or questions.",
      "Quick feedback form (help us make the next one even better)."
    ]
  }
];

const Agenda = () => {
  const isMobile = useMobile();

  return (
    <section id="agenda">
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Workshop Agenda</h2>
      
      <div className="bg-surface-section" style={{ padding: isMobile ? '1rem' : '0', overflow: 'hidden', background: isMobile ? 'transparent' : 'var(--bg-surface)' }}>
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {agendaData.map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: item.highlight ? 'rgba(45, 225, 208, 0.05)' : 'var(--bg-surface)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}>
                <div style={{ color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{item.time}</div>
                <div style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '1rem', color: '#fff' }}>{item.title}</div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} style={{ marginBottom: dIdx !== item.details.length - 1 ? '0.5rem' : '0' }}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <table className="agenda-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <th style={{ padding: '1.5rem', width: '20%', color: 'var(--text-muted)' }}>Time</th>
                <th style={{ padding: '1.5rem', width: '30%', color: 'var(--text-muted)' }}>Session</th>
                <th style={{ padding: '1.5rem', color: 'var(--text-muted)' }}>What's Happening</th>
              </tr>
            </thead>
            <tbody>
              {agendaData.map((item, idx) => (
                <tr key={idx} style={{ 
                  borderBottom: idx !== agendaData.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  backgroundColor: item.highlight ? 'rgba(45, 225, 208, 0.03)' : 'transparent'
                }}>
                  <td style={{ padding: '1.5rem', color: 'var(--accent-cyan)', fontWeight: '600' }}>{item.time}</td>
                  <td style={{ padding: '1.5rem', fontWeight: 'bold', fontSize: '1.2rem' }}>{item.title}</td>
                  <td style={{ padding: '1.5rem', color: 'var(--text-muted)' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} style={{ marginBottom: dIdx !== item.details.length - 1 ? '0.5rem' : '0' }}>{detail}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default Agenda;
