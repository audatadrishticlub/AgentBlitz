import React from 'react';

const Navbar = () => {
  return (
    <header style={{ 
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '0.75rem 2rem',
      backgroundColor: 'rgba(10, 14, 20, 0.85)',
      backdropFilter: 'blur(16px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ 
            backgroundColor: '#fff', 
            padding: '0.4rem 0.8rem', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <img src="/DataBlitz/assets/university-logo.png" alt="University Logo" style={{ height: '45px', objectFit: 'contain' }} />
          </div>
          <div style={{ fontWeight: '800', fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#fff' }}>
            Agent Blitz <span style={{ color: 'var(--accent-cyan)' }}>2026</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/DataBlitz/assets/data-drishti-logo.png" alt="Data Drishti Logo" style={{ height: '60px', objectFit: 'contain' }} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
