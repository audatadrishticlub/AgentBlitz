import React from 'react';
import useMobile from '../hooks/useMobile';

const Navbar = () => {
  const isMobile = useMobile();
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
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'center' : 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        backgroundColor: 'rgba(10, 14, 20, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: isMobile ? '24px' : '9999px',
        padding: isMobile ? '1rem' : '0.5rem 1rem',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
        gap: isMobile ? '1rem' : '0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexDirection: isMobile ? 'column' : 'row' }}>
          <div style={{ 
            backgroundColor: '#fff', 
            padding: '0.3rem 0.6rem', 
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <img src="/DataBlitz/assets/university-logo.png" alt="University Logo" style={{ height: isMobile ? '40px' : '30px', objectFit: 'contain' }} />
          </div>
          <div style={{ fontWeight: '800', fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', color: '#fff', marginLeft: isMobile ? '0' : '0.25rem', textAlign: isMobile ? 'center' : 'left', whiteSpace: 'nowrap' }}>
            Agent Blitz <span style={{ color: 'var(--accent-cyan)' }}>2026</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/DataBlitz/assets/data-drishti-logo.png" alt="Data Drishti Logo" style={{ height: isMobile ? '50px' : '35px', objectFit: 'contain' }} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
