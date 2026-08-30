(function () {
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  if (navLinks) {
    const navItems = [
      { href: 'index.html', label: 'EVOLVE' },
      { href: 'evolve-beta.html', label: 'EVOLVE RF' },
      { href: 'case-agentic-rf.html', label: 'RF Agent' },
      { href: 'case-rfml-memory.html', label: 'RFML' },
      { href: 'case-ai-rfml-program.html', label: 'Program' },
      { href: 'case-elevenlabs-rf-agent.html', label: 'Evaluation' },
      { href: 'resume.html', label: 'Resume' },
      { href: 'contact.html', label: 'Contact', cta: true }
    ];
    navLinks.innerHTML = '';
    navItems.forEach(item => {
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      if (item.cta) link.className = 'nav-cta';
      if (currentPath === item.href || (item.href === 'index.html' && currentPath === '')) link.setAttribute('aria-current', 'page');
      navLinks.appendChild(link);
    });
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
      high: { confidence: 'Strong record', evidence: 'Multiple independent sources line up with pinned evidence and date proof.', action: 'Advance the package to human review with a concise basis.' },
      mixed: { confidence: 'Mixed record', evidence: 'Some elements are well supported, but a material gap or conflict is still open.', action: 'Hold the recommendation. Name the gap and run targeted follow-up.' },
      low: { confidence: 'Weak record', evidence: 'The evidence is incomplete, ambiguous, or cannot be verified yet.', action: 'Do not fill the gap with inference. Return the issue to the reviewer.' }
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

  function loadStylesheet(href) {
    if (document.querySelector(`link[href$="${href}"]`)) return;
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = href;
    document.head.appendChild(stylesheet);
  }

  function addProjectEvidenceBand() {
    const hero = document.querySelector('.case-hero');
    if (!hero || document.querySelector('.project-evidence-band')) return;
    const cases = {
      'case-agentic-rf.html': {
        intro: 'Sanitized engineering evidence from the physical RF measurement stack. These visuals show the real control surface and the public architecture abstraction without exposing raw customer data or implementation details.',
        items: [
          { src: 'assets/case04/gui/fieldfox_gui_sanitized.png', label: 'FIELD EVIDENCE', title: 'Sanitized FieldFox drive-test control surface' },
          { src: 'assets/case04/diagrams/architecture_overview.svg', label: 'SYSTEM ARCHITECTURE', title: 'Human authority, AI supervision, deterministic RF control', diagram: true }
        ]
      },
      'case-rfml-memory.html': {
        intro: 'RFML evidence is presented as an engineering progression, not a single benchmark number: signal representation, hierarchical reasoning, confidence gating, and legitimate UNKNOWN behavior remain visible.',
        items: [
          { src: 'assets/case05/results/rf_signal_identification_progression.svg', label: 'MODEL PROGRESSION', title: 'From signal features to hierarchical RF identification', diagram: true },
          { src: 'assets/case05/results/hierarchical_rf_reasoning.svg', label: 'REASONING BOUNDARY', title: 'Family, class, confidence, and UNKNOWN handling', diagram: true }
        ]
      }
    };
    const cfg = cases[currentPath];
    if (!cfg) return;
    const section = document.createElement('section');
    section.className = 'project-evidence-band';
    section.innerHTML = `<div class="container project-evidence-grid">${cfg.items.map(item => `<figure class="project-evidence-item${item.diagram ? ' diagram' : ''}"><img src="${item.src}" alt="${item.title}"><figcaption class="project-evidence-caption"><span>${item.label}</span><strong>${item.title}</strong></figcaption></figure>`).join('')}</div><div class="container project-evidence-intro"><strong>Evidence boundary:</strong> ${cfg.intro}</div>`;
    hero.insertAdjacentElement('afterend', section);
  }

  function addEvaluationBand() {
    const hero = document.querySelector('.case-hero');
    if (!hero || document.querySelector('.evaluation-visual')) return;
    const configs = {
      'case-ai-rfml-program.html': [
        ['01', 'Measure', 'Start with instrument data and observable RF behavior.'],
        ['02', 'Model', 'Add learned representations without hiding evidence boundaries.'],
        ['03', 'Evaluate', 'Challenge the system with held-out cases and human verification.'],
        ['04', 'Gate', 'Treat performance as evidence, not deployment permission.']
      ],
      'case-elevenlabs-rf-agent.html': [
        ['01', 'Baseline', 'Capture what the assistant does before guardrail changes.'],
        ['02', 'Challenge', 'Probe overconfidence, weak evidence, ambiguity, and unsupported claims.'],
        ['03', 'Correct', 'Revise controls and prompts against observed failure modes.'],
        ['04', 'Regress', 'Re-test the same failure families before release.']
      ]
    };
    const rows = configs[currentPath];
    if (!rows) return;
    const section = document.createElement('section');
    section.className = 'project-evidence-band';
    section.innerHTML = `<div class="container evaluation-visual">${rows.map((r,i)=>`<div class="evaluation-stage${i===3?' alert':''}"><span>${r[0]}</span><div><strong>${r[1]}</strong><p>${r[2]}</p></div></div>`).join('')}</div><div class="container project-evidence-intro"><strong>Program view:</strong> This band summarizes the public evaluation/release logic. It does not imply production deployment or replace the detailed evidence and caveats in the case study.</div>`;
    hero.insertAdjacentElement('afterend', section);
  }

  function alignPublicPortfolioLanguage() {
    if (currentPath === 'index.html' || currentPath === '') {
      document.querySelectorAll('.industrial-heading p, .industrial-tag-row span').forEach(el => {
        el.textContent = el.textContent.replace(/human Gold judgments/gi, 'human-verified evaluation judgments').replace(/^Human Gold$/i, 'Human-verified evaluation');
      });
    }

    if (currentPath !== 'evolve.html') return;
    document.body.classList.add('evolve-proof-page');
    loadStylesheet('evolve-proof.css');
    document.title = 'EVOLVE | Applied AI Operating Model & Technical Proof';

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', 'EVOLVE is an applied-AI operating-model proof showing workflow decomposition, deterministic controls, agent-assisted analysis, evaluation, human authority, and measurable deployment discipline.');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'EVOLVE | Applied AI Operating Model & Technical Proof');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', 'A technical proof-of-concept for evidence-first enterprise AI workflow design and evaluation.');

    document.querySelectorAll('script[type="application/ld+json"]').forEach(node => {
      try { if (JSON.parse(node.textContent || '{}')['@type'] === 'Service') node.remove(); } catch (_) {}
    });

    const eyebrow = document.querySelector('.hero .eyebrow');
    const heroTitle = document.querySelector('.hero h1');
    const heroCopy = document.querySelector('.hero .hero-copy');
    if (eyebrow) eyebrow.textContent = 'EVOLVE / Applied-AI operating model';
    if (heroTitle) heroTitle.textContent = 'A working proof for how enterprise AI should move from workflow friction to controlled deployment.';
    if (heroCopy) heroCopy.textContent = 'EVOLVE is a flagship technical proof-of-concept for decomposing workflows, separating deterministic automation from model reasoning, preserving evidence and human authority, evaluating failure modes, and measuring whether an AI-assisted process is actually better.';

    const heroNote = document.querySelector('.hero .muted-note');
    if (heroNote) heroNote.textContent = 'The browser generates a deterministic opportunity score. When you run the scan, the same non-sensitive intake is also sent to the EVOLVE backend for agent-assisted analysis; the backend is configured not to persist the request. Do not enter classified, export-controlled, proprietary, personal, regulated, credential, or other sensitive information.';

    const heroSide = document.querySelector('.hero-side');
    if (heroSide) heroSide.innerHTML = '<strong>What this demonstrates</strong><p>Workflow decomposition, evidence handling, deterministic controls, agent-assisted reasoning, human authorization, evaluation, and bounded pilot design.</p><strong>What it is not</strong><p>A claim that every workflow needs an agent, or that a confident model should own consequential decisions.</p><strong>Physical-world proof</strong><p>EVOLVE RF applies the same architecture to distributed sensing, uncertainty, and guarded technical reasoning.</p>';

    document.querySelectorAll('.section-heading .small-kicker').forEach(el => { if (/service lanes/i.test(el.textContent)) el.textContent = 'Enterprise workflow patterns'; });
    document.querySelectorAll('.section-heading h2').forEach(el => { if (/Where EVOLVE can create value now/i.test(el.textContent)) el.textContent = 'Representative workflow patterns the operating model can support.'; });
    document.querySelectorAll('.section-heading p').forEach(el => { if (/common pattern is work that mixes information/i.test(el.textContent)) el.textContent = 'These are representative system-design patterns—not a services catalog. The implementation may be deterministic automation, supervised model assistance, evidence retrieval, or a technical agent depending on risk and evidence needs.'; });
    document.querySelectorAll('.note-panel p').forEach(el => { if (/useful first engagement/i.test(el.textContent)) el.textContent = 'A useful first test is one workflow with enough friction to matter and a small enough scope to measure. The scan below demonstrates how I would frame that problem before any broad platform or autonomy decision.'; });

    const footer = document.querySelector('.site-footer .footer-grid span:first-child');
    if (footer) footer.textContent = '© 2026 Dan Sleeter. EVOLVE is presented as an applied-AI operating-model and technical proof-of-concept; production, ROI, and client-outcome claims require separate supporting evidence.';
  }

  function findCaseSectionByLabel(label) {
    return Array.from(document.querySelectorAll('.case-section')).find(section => {
      const text = section.querySelector('.case-aside .label')?.textContent || '';
      return text.trim().toLowerCase() === label.toLowerCase();
    });
  }

  function applyRecruiterContentQC() {
    if (currentPath === 'index.html' || currentPath === '') {
      const rail = document.querySelectorAll('.industrial-metric-rail > div');
      if (rail[2]) {
        rail[2].querySelector('strong').textContent = '99.3%';
        rail[2].querySelector('span').textContent = 'Accepted RF-family accuracy / gated predictions';
      }

      const fastRead = document.querySelector('.industrial-fast-read .industrial-heading > p');
      if (fastRead) fastRead.textContent = 'EVOLVE starts with the workflow, decision, evidence, and consequence of being wrong. It then separates deterministic control, model assistance, human authority, and measurable release criteria before increasing automation.';

      const flagshipIntro = document.querySelector('.industrial-dark .industrial-heading.inverse > p');
      if (flagshipIntro) flagshipIntro.textContent = 'EVOLVE RF is the flagship physical-world proof: distributed sensing, measurement limits, timing quality, localization uncertainty, cooperative sensing, guarded reasoning, and explicit boundaries around what still requires field validation.';

      const flagshipTags = document.querySelector('.flagship-panel .industrial-tag-row');
      if (flagshipTags) flagshipTags.innerHTML = '<span>Distributed sensing</span><span>Localization uncertainty</span><span>Guarded reasoning</span><span>Cooperative sensing</span><span>Evidence boundaries</span>';
    }

    if (currentPath === 'case-ai-rfml-program.html') {
      document.querySelectorAll('.workflow-detail, .case-content p, .pattern-name, .pattern-card p, .sheet-cell').forEach(el => {
        el.textContent = el.textContent
          .replace(/human Gold judgments/gi, 'human-verified reference decisions')
          .replace(/Human-verified Gold judgments/gi, 'Human-verified reference decisions')
          .replace(/Human Gold tasks/gi, 'Human reference cases')
          .replace(/Reviewer-blind Gold/gi, 'Reviewer-blind reference')
          .replace(/Human Gold/gi, 'Human reference')
          .replace(/Gold headline decision/gi, 'reference headline decision')
          .replace(/Gold label/gi, 'reference decision');
      });

      const evaluationSection = findCaseSectionByLabel('Independent evaluation & release readiness');
      if (evaluationSection) {
        const h2 = evaluationSection.querySelector('.case-content h2');
        const paragraphs = evaluationSection.querySelectorAll('.case-content > p');
        const grid = evaluationSection.querySelector('.pattern-grid');
        if (h2) h2.textContent = 'I built an independent evaluation path so model performance could not grade itself.';
        if (paragraphs[0]) paragraphs[0].textContent = 'Evaluator OS separates outcome quality, observable behavior, and safety/authority. Frozen reference cases and human-verified decisions expose disagreements, unsupported actions, and regressions before a model or agent earns more authority.';
        if (paragraphs[1]) paragraphs[1].textContent = 'The objective is engineering discipline, not a universal reliability claim: candidate changes must survive repeatable evidence review, failure checks, and human release authority before promotion.';
        if (grid) grid.innerHTML = '<div class="pattern-card"><div class="pattern-symbol">H</div><div class="pattern-name">Human reference</div><p>Human-verified decisions define the comparison point for consequential release and authority questions.</p></div><div class="pattern-card"><div class="pattern-symbol">F</div><div class="pattern-name">Frozen cases</div><p>Reference inputs are fixed before candidate review so the evaluation target does not move after seeing the answer.</p></div><div class="pattern-card"><div class="pattern-symbol">S</div><div class="pattern-name">Safety / authority</div><p>Unsafe actions and authority violations remain distinct from the quality of the final technical answer.</p></div><div class="pattern-card"><div class="pattern-symbol">R</div><div class="pattern-name">Regression</div><p>Observed failure families are re-tested after changes so improvement is demonstrated rather than assumed.</p></div>';
      }

      const failureSection = findCaseSectionByLabel('Failure analysis');
      if (failureSection) {
        const asideP = failureSection.querySelector('.case-aside p');
        if (asideP) asideP.textContent = 'A frozen physical-instrument recovery scenario showed why “safe sounding” and “correct” are not the same evaluation result.';
        failureSection.querySelectorAll('.sheet-cell, .case-content > p').forEach(el => {
          el.textContent = el.textContent
            .replace(/Gemini/g, 'Candidate A')
            .replace(/Microsoft Copilot/g, 'Candidate B')
            .replace(/human Gold/gi, 'human reference')
            .replace(/Gold/g, 'reference');
        });
      }
    }

    if (currentPath === 'resume.html') {
      const bullets = document.querySelectorAll('.case-content li');
      bullets.forEach(li => {
        if (/Alpha\.14|140\/140 automated tests/i.test(li.textContent)) {
          li.textContent = 'Extended the same evidence-first architecture into EVOLVE RF, a distributed RF-observability proof covering authenticated edge/fusion transport, persistent event correlation, localization uncertainty, cooperative sensing, and automated software validation; physical field-performance claims remain gated pending validation.';
        }
      });
    }

    if (currentPath === 'contact.html') {
      const cards = document.querySelectorAll('.case-card');
      cards.forEach(card => {
        if (/EVOLVE RF \/ PUBLIC BETA PREVIEW/i.test(card.textContent)) {
          const num = card.querySelector('.case-num');
          const h3 = card.querySelector('h3');
          const p = card.querySelector('p');
          const link = card.querySelector('.case-link');
          if (num) num.textContent = 'EVOLVE RF / TECHNICAL PROOF';
          if (h3) h3.textContent = 'Inspect the distributed RF systems proof';
          if (p) p.textContent = 'A sanitized engineering view of distributed RF observability, event correlation, localization uncertainty, cooperative sensing, software validation, and evidence boundaries.';
          if (link) link.textContent = 'Open EVOLVE RF technical proof →';
        }
      });
    }
  }

  function loadEvolveChat() {
    loadStylesheet('evolve-chat.css');
    if (!document.querySelector('script[src$="evolve-chat.js"]') && !window.__evolveChatWidgetLoaded) {
      const script = document.createElement('script');
      script.src = 'evolve-chat.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }

  function loadSharedEnhancements() {
    loadStylesheet('portfolio-polish.css');
    loadStylesheet('industrial-site.css');
    if (document.body.classList.contains('home-industrial')) {
      loadStylesheet('industrial-home.css');
      loadStylesheet('mobile-industrial.css');
    }
    if (/^case-(agentic-rf|rfml-memory|ai-rfml-program|elevenlabs-rf-agent)\.html$/.test(currentPath)) {
      loadStylesheet('project-evidence.css');
      addProjectEvidenceBand();
      addEvaluationBand();
    }
    alignPublicPortfolioLanguage();
    applyRecruiterContentQC();
    loadStylesheet('contrast-qc.css');
    loadEvolveChat();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadSharedEnhancements, { once: true });
  else loadSharedEnhancements();
})();