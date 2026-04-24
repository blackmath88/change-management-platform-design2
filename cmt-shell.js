(function() {
  'use strict';

  const NAV_ITEMS = [
    { href: 'index.html',               icon: '▦', label: 'Command Center' },
    { href: 'unit1-vision.html',        icon: '◈', label: 'Vision' },
    { href: 'unit2-forces.html',        icon: '↔', label: 'Forces' },
    { href: 'unit3-stakeholders.html',  icon: '◎', label: 'Stakeholders' },
    { href: 'unit4-communication.html', icon: '□', label: 'Messaging' },
    { href: 'unit5-nudges.html',        icon: '◇', label: 'Nudges' }
  ];

  function renderSidebar(activeHref) {
    const navHtml = NAV_ITEMS.map(item => {
      const isActive = item.href === activeHref;
      return `<a class="nav-item${isActive ? ' is-active' : ''}" href="${item.href}">`
        + `<span class="nav-icon">${item.icon}</span>`
        + `<span>${item.label}</span>`
        + `</a>`;
    }).join('');

    return `
      <aside class="sidebar" aria-label="Product navigation">
        <div class="brand">
          <a class="brand-lockup" href="index.html">
            <div class="brand-mark">CM</div>
            <div>
              <div class="brand-title">Change Management Platform</div>
              <div class="brand-subtitle">Operating workspace</div>
            </div>
          </a>
        </div>
        <div class="side-section">
          <div class="side-title meta-label">Workspace</div>
          <nav class="nav-list">${navHtml}</nav>
        </div>
        <div class="sidebar-footer">
          <div class="workspace-chip">
            <div class="meta-label">Active project</div>
            <div class="workspace-chip-title" id="topbar-project"></div>
            <div class="workspace-chip-sub" id="topbar-org"></div>
          </div>
        </div>
      </aside>
    `;
  }

  function mountSidebar() {
    const mount = document.getElementById('sidebar-mount');
    if (!mount) return;
    const activeHref = mount.getAttribute('data-active') || '';
    mount.outerHTML = renderSidebar(activeHref);
  }

  window.CMTShell = { mountSidebar, renderSidebar };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountSidebar);
  } else {
    mountSidebar();
  }
})();
