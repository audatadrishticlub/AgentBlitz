import React from 'react';

const Navbar = () => {
  return (
    <header style={{ 
      position: 'sticky',
      top: '0.5rem',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      padding: '0 0.5rem',
      marginBottom: '2rem'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        backgroundColor: 'rgba(10, 14, 20, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '9999px',
        padding: '0.5rem 1rem',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="hide-on-mobile" style={{ 
            backgroundColor: '#fff', 
            padding: '0.3rem 0.6rem', 
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <img src="/DataBlitz/assets/university-logo.png" alt="University Logo" style={{ height: '30px', objectFit: 'contain' }} />
          </div>
          <div style={{ fontWeight: '800', fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', color: '#fff', marginLeft: '0.25rem', whiteSpace: 'nowrap' }}>
            Agent Blitz <span style={{ color: 'var(--accent-cyan)' }}>2026</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/DataBlitz/assets/data-drishti-logo.png" alt="Data Drishti Logo" style={{ height: '35px', objectFit: 'contain' }} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
