import React from 'react';
import useMobile from '../hooks/useMobile';

const Footer = () => {
  const isMobile = useMobile();
  return (
    <footer style={{ 
      backgroundColor: 'var(--bg-darker)', 
      padding: '4rem 2rem', 
      marginTop: '4rem',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="footer-grid-main" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
        
        <div>
          <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>Data Drishti Club</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '300px' }}>
            Brought to you by Data Drishti Club, with the Dept. of Student Support Services. Got questions? Reach out to any of us.
          </p>
          <div style={{ 
            marginTop: '2rem', 
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
            display: 'inline-block',
            padding: '1rem',
            borderRadius: '50%'
          }}>
             <img src="/DataBlitz/assets/data-drishti-logo.png" alt="Data Drishti Logo" style={{ height: '140px', objectFit: 'contain' }} />
          </div>
        </div>

        <div className="footer-grid-inner" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1.5rem' : '2rem' }}>
          
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', color: '#fff' }}>
              Student Leads
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', opacity: 0.8 }}>
              <li style={{ marginBottom: '1.2rem' }}>
                <strong style={{ color: '#fff', fontSize: '1rem' }}>Bharadwaj N</strong> <br/><span style={{fontSize: '0.8rem'}}>Instructor</span><br/>
                <a href="mailto:nbharadwajBTECH24@ced.alliance.edu.in" style={{color: 'inherit'}}>nbharadwajBTECH24@ced.alliance.edu.in</a><br/>
                <span style={{ color: 'var(--accent-cyan)' }}>Tel:</span> 99807 12509
              </li>
              <li style={{ marginBottom: '1.2rem' }}>
                <strong style={{ color: '#fff', fontSize: '1rem' }}>Dileep Bharadwaj S</strong><br/>
                <a href="mailto:dileepBTECH24@ced.alliance.edu.in" style={{color: 'inherit'}}>dileepBTECH24@ced.alliance.edu.in</a><br/>
                <span style={{ color: 'var(--accent-cyan)' }}>Tel:</span> 88670 16193
              </li>
              <li>
                <strong style={{ color: '#fff', fontSize: '1rem' }}>Paladi Karthik</strong><br/>
                <a href="mailto:kpaladiBCOM25@stu.alliance.edu.in" style={{color: 'inherit'}}>kpaladiBCOM25@stu.alliance.edu.in</a><br/>
                <span style={{ color: 'var(--accent-cyan)' }}>Tel:</span> 92472 91023
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', color: '#fff' }}>
              Faculty Leads
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', opacity: 0.8 }}>
              <li style={{ marginBottom: '1.2rem' }}>
                <strong style={{ color: '#fff', fontSize: '1rem' }}>Dr. Supriya Devi</strong><br/>
                <span style={{fontSize: '0.8rem'}}>Associate Professor, Dept. of Pure and Applied Mathematics</span><br/>
                <a href="mailto:supriya.devi@alliance.edu.in" style={{color: 'inherit'}}>supriya.devi@alliance.edu.in</a>
              </li>
              <li>
                <strong style={{ color: '#fff', fontSize: '1rem' }}>Dr. Vivek Mishra</strong><br/>
                <span style={{fontSize: '0.8rem'}}>Associate Professor, Dept. of Pure and Applied Mathematics</span><br/>
                <a href="mailto:vivek.mishra@alliance.edu.in" style={{color: 'inherit'}}>vivek.mishra@alliance.edu.in</a>
              </li>
            </ul>
          </div>

        </div>

      </div>
      
      <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        &copy; 2026 Data Drishti Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
