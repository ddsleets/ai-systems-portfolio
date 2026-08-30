(function () {
  if (window.__evolveChatWidgetLoaded) return;
  window.__evolveChatWidgetLoaded = true;

  const ENDPOINT = 'https://evolve-rf-web-app.vercel.app/api/agent';
  const HEALTH_ENDPOINT = 'https://evolve-rf-web-app.vercel.app/api/health';

  const legacyRoot = document.querySelector('.evolve-agent-section [data-evolve-agent]');
  if (legacyRoot) {
    const legacySection = legacyRoot.closest('.evolve-agent-section');
    if (legacySection) legacySection.remove();
  }

  const root = document.createElement('div');
  root.className = 'evolve-chat-widget';
  root.dataset.evolveAgent = '';
  root.dataset.endpoint = ENDPOINT;
  root.innerHTML = `
    <button class="evolve-chat-launcher" type="button" data-agent-launcher aria-expanded="false" aria-controls="evolve-chat-panel">
      <span class="evolve-chat-launcher-mark" aria-hidden="true">RF</span>
      <span class="evolve-chat-launcher-copy">
        <strong>Ask EVOLVE</strong>
        <span>RF Guide</span>
      </span>
      <span class="evolve-chat-launcher-status" aria-hidden="true"></span>
    </button>

    <section class="evolve-chat-panel" id="evolve-chat-panel" data-agent-panel role="dialog" aria-label="EVOLVE RF public guide" aria-hidden="true">
      <header class="evolve-chat-head">
        <div class="evolve-chat-brand">
          <span class="evolve-chat-brand-mark" aria-hidden="true">RF</span>
          <div>
            <div class="evolve-chat-kicker">EVOLVE RF Agent v0.1</div>
            <h2>Ask EVOLVE</h2>
          </div>
        </div>
        <div class="evolve-chat-head-actions">
          <span class="evolve-chat-status" data-agent-status><span aria-hidden="true"></span>Public Beta</span>
          <button class="evolve-chat-close" type="button" data-agent-close aria-label="Minimize EVOLVE RF chat">&minus;</button>
        </div>
      </header>

      <div class="evolve-chat-body">
        <div class="evolve-chat-transcript" data-agent-transcript aria-live="polite" aria-relevant="additions">
          <div class="evolve-chat-message agent">
            <div class="evolve-chat-bubble">
              <div class="evolve-chat-evidence">Architecture-level</div>
              <div>Hi, I’m the public EVOLVE RF Guide. Ask me about interference, distributed sensing, RSSI/TDoA/AoA localization, RFML, uncertainty, cooperative sensing, or what has actually been demonstrated.</div>
            </div>
          </div>
        </div>

        <div class="evolve-chat-prompts" aria-label="Suggested EVOLVE RF questions">
          <button class="evolve-chat-prompt" type="button" data-agent-prompt>How can EVOLVE locate an interferer?</button>
          <button class="evolve-chat-prompt" type="button" data-agent-prompt>How does RFML fit into EVOLVE?</button>
          <button class="evolve-chat-prompt" type="button" data-agent-prompt>What happens when evidence is uncertain?</button>
          <button class="evolve-chat-prompt" type="button" data-agent-prompt>What has actually been demonstrated?</button>
        </div>

        <form class="evolve-chat-form" data-agent-form>
          <label class="sr-only" for="evolve-chat-input">Ask EVOLVE RF a question</label>
          <textarea class="evolve-chat-input" id="evolve-chat-input" data-agent-input maxlength="2000" rows="1" placeholder="Ask EVOLVE RF a technical question…"></textarea>
          <button class="evolve-chat-submit" type="submit" data-agent-submit aria-label="Send question">Ask</button>
        </form>

        <div class="evolve-chat-footer">
          <span>Public-safe, evidence-calibrated responses.</span>
          <a href="evolve-beta.html">About EVOLVE RF</a>
        </div>
      </div>
    </section>`;

  document.body.appendChild(root);

  const launcher = root.querySelector('[data-agent-launcher]');
  const panel = root.querySelector('[data-agent-panel]');
  const closeButton = root.querySelector('[data-agent-close]');
  const transcript = root.querySelector('[data-agent-transcript]');
  const form = root.querySelector('[data-agent-form]');
  const input = root.querySelector('[data-agent-input]');
  const submit = root.querySelector('[data-agent-submit]');
  const promptButtons = root.querySelectorAll('[data-agent-prompt]');
  const status = root.querySelector('[data-agent-status]');

  let isOpen = false;

  function setOpen(nextOpen) {
    isOpen = Boolean(nextOpen);
    root.classList.toggle('is-open', isOpen);
    launcher.setAttribute('aria-expanded', String(isOpen));
    panel.setAttribute('aria-hidden', String(!isOpen));
    if (isOpen) {
      window.setTimeout(() => input.focus(), 140);
    } else {
      launcher.focus();
    }
  }

  function addMessage(role, text, evidence) {
    const row = document.createElement('div');
    row.className = `evolve-chat-message ${role}`;

    const bubble = document.createElement('div');
    bubble.className = 'evolve-chat-bubble';

    if (role === 'agent' && evidence) {
      const badge = document.createElement('div');
      badge.className = 'evolve-chat-evidence';
      badge.textContent = evidence;
      bubble.appendChild(badge);
    }

    const body = document.createElement('div');
    body.textContent = text;
    bubble.appendChild(body);
    row.appendChild(bubble);
    transcript.appendChild(row);
    transcript.scrollTop = transcript.scrollHeight;
  }

  function resizeInput() {
    input.style.height = 'auto';
    input.style.height = `${Math.min(input.scrollHeight, 112)}px`;
  }

  async function ask(message) {
    const clean = String(message || '').trim();
    if (!clean) return;

    if (!isOpen) setOpen(true);
    addMessage('user', clean);
    input.value = '';
    resizeInput();
    input.disabled = true;
    submit.disabled = true;
    submit.textContent = '…';

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: clean })
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      const data = await response.json();
      addMessage(
        'agent',
        data.answer || 'I could not generate a public-safe response.',
        data.evidence || 'Architecture-level'
      );
    } catch (error) {
      addMessage(
        'agent',
        'The EVOLVE RF guide is temporarily unavailable. You can still review the public Beta page and portfolio content.',
        'System status'
      );
    } finally {
      input.disabled = false;
      submit.disabled = false;
      submit.textContent = 'Ask';
      input.focus();
    }
  }

  async function checkHealth() {
    try {
      const response = await fetch(HEALTH_ENDPOINT, { method: 'GET' });
      if (!response.ok) return;
      const data = await response.json();
      if (data && data.status === 'ok') {
        status.classList.add('is-online');
        status.lastChild.textContent = 'Online';
      }
    } catch (error) {
      // Keep the neutral Public Beta status if the health probe is blocked or unavailable.
    }
  }

  launcher.addEventListener('click', () => setOpen(!isOpen));
  closeButton.addEventListener('click', () => setOpen(false));

  promptButtons.forEach((button) => {
    button.addEventListener('click', () => ask(button.textContent));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    ask(input.value);
  });

  input.addEventListener('input', resizeInput);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen) setOpen(false);
  });

  checkHealth();
})();
