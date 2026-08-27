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
      { href: 'case-agentic-prior-art.html', label: 'Earlier work' }
    ];

    const contactLink = navLinks.querySelector('.nav-cta');
    navLinks.innerHTML = '';

    navItems.forEach(item => {
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      if (currentPath === item.href || (item.href === 'index.html' && currentPath === '')) {
        link.setAttribute('aria-current', 'page');
      }
      navLinks.appendChild(link);
    });

    if (contactLink) {
      navLinks.appendChild(contactLink);
    } else {
      const contact = document.createElement('a');
      contact.className = 'nav-cta';
      contact.href = 'mailto:daniel.d.sleeter@gmail.com';
      contact.textContent = 'Contact';
      navLinks.appendChild(contact);
    }
  }

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
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
