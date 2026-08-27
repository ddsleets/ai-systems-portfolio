(function () {
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');

  if (navLinks) {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = [
      { href: 'index.html', label: 'Portfolio' },
      { href: 'case-agentic-rf.html', label: 'Case 04' },
      { href: 'case-rfml-memory.html', label: 'Case 05' },
      { href: 'case-ai-rfml-program.html', label: 'Case 06' },
      { href: 'case-elevenlabs-rf-agent.html', label: 'Case 07' },
      { href: 'case-agentic-prior-art.html', label: 'Earlier work' },
      { href: 'contact.html', label: 'Contact', cta: true }
    ];

    navLinks.innerHTML = '';
    navItems.forEach(item => {
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      if (item.cta) link.className = 'nav-cta';
      if (currentPath === item.href || (item.href === 'index.html' && currentPath === '')) {
        link.setAttribute('aria-current', 'page');
      }
      navLinks.appendChild(link);
    });
  }

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Keep the homepage recruiter path current without duplicating navigation logic in every page.
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPath === 'index.html' || currentPath === '') {
    const note = document.querySelector('.hero .muted-note');
    if (note) {
      note.innerHTML = '<a href="resume.html"><strong>Resume</strong></a> &middot; <a href="cv.html"><strong>Professional CV</strong></a> &middot; <a href="contact.html"><strong>Contact</strong></a>';
    }
  }

  // Public EVOLVE page is a portfolio Beta preview; RF Core itself remains on the Alpha.14 evidence baseline.
  if (currentPath === 'evolve-beta.html') {
    document.querySelectorAll('.meta-value').forEach(el => {
      if (el.textContent.includes('Alpha.4')) el.textContent = 'RF Core v0.1 Alpha.14 evidence baseline';
    });
    document.querySelectorAll('.case-aside p, .working-note p').forEach(el => {
      el.innerHTML = el.innerHTML.replace(/Alpha\.4/g, 'Alpha.14').replace(/69 passing automated tests/g, '140/140 automated tests passing');
    });
    document.querySelectorAll('.case-content p').forEach(el => {
      el.innerHTML = el.innerHTML.replace(/Alpha\.4/g, 'Alpha.14').replace(/69 passing automated tests/g, '140/140 automated tests passing');
    });
  }

  const demo = document.querySelector('[data-decision-demo]');
  if (demo) {
    const states = {
      high: {
        confidence: 'Strong record',
        evidence: 'Multiple independent sources line up with pinned evidence and date proof.',
        action: 'Advance the package to human review with a concise basis.'
      },
      mixed: {
        confidence: 'Mixed record',
        evidence: 'Some elements are well supported, but a material gap or conflict is still open.',
        action: 'Hold the recommendation. Name the gap and run targeted follow-up.'
      },
      low: {
        confidence: 'Weak record',
        evidence: 'The evidence is incomplete, ambiguous, or cannot be verified yet.',
        action: 'Do not fill the gap with inference. Return the issue to the reviewer.'
      }
    };
    const buttons = demo.querySelectorAll('[data-demo-state]');
    const confidence = demo.querySelector('[data-demo-confidence]');
    const evidence = demo.querySelector('[data-demo-evidence]');
    const action = demo.querySelector('[data-demo-action]');
    buttons.forEach(btn => btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const s = states[btn.dataset.demoState];
      confidence.textContent = s.confidence;
      evidence.textContent = s.evidence;
      action.textContent = s.action;
    }));
  }
})();
