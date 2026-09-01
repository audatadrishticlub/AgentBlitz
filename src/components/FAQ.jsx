import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>What to Bring</h2>
        
        <details open>
          <summary>Laptops & Software</summary>
          <div className="details-content">
            Your laptop, charged (or bring the charger). Grab VS Code or AntiGravity IDE beforehand if you can — if not, no stress, we'll get you set up live at the start.
          </div>
        </details>
        
        <details>
          <summary>Internet Access</summary>
          <div className="details-content">
            Stable Wi-Fi/internet on your laptop — you'll need it for the build sprints.
          </div>
        </details>
        
        <details>
          <summary>Coding Experience</summary>
          <div className="details-content">
            Zero coding background required. Seriously. If you can follow instructions and aren't afraid to click around, you're set.
          </div>
        </details>
      </div>

      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Questions You're Probably Asking</h2>
        
        <details open>
          <summary>Do I get activity points?</summary>
          <div className="details-content">
            Yup — 10 points just for showing up and participating, 12 if you volunteer. Confirmation lands in your inbox 3–5 working days after.
          </div>
        </details>
        
        <details>
          <summary>Is this free?</summary>
          <div className="details-content">
            100%. Free entry, no hidden catch.
          </div>
        </details>
        
        <details>
          <summary>Who's actually running this?</summary>
          <div className="details-content">
            Bharadwaj N — a fellow student (B.Tech Aerospace Engineering) who's just as into this stuff as you are, not some outside expert talking down at you.
          </div>
        </details>
      </div>
    </section>
  );
};

export default FAQ;
