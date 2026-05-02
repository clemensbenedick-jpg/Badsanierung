// =====================================================
// Badsanierungs-App
// =====================================================

// ─── Schema (Checkliste) ───
const SCHEMA = [
  {
    id: 'wc', title: 'WC-Modul', sub: 'Vorwand, Drücker, Sitz',
    fields: [
      { key: 'modul', label: 'Modul', type: 'dropdown', options: ['Geberit Duofix', 'Geberit Duofix Sigma', 'TECEprofil', 'Grohe Rapid SL'], free: true },
      { key: 'hoehe', label: 'Höhe', type: 'dropdown', options: ['112 cm', '98 cm', '82 cm'], free: true },
      { key: 'befestigung', label: 'Befestigung / Füße', type: 'text', placeholder: 'z.B. Geberit Standardfüße' },
      { key: 'druecker', label: 'Drückerplatte', type: 'dropdown', options: ['Sigma 01', 'Sigma 20', 'Sigma 30', 'Omega 20', 'Omega 60'], free: true },
      { key: 'wctyp', label: 'WC-Typ', type: 'dropdown', options: ['Normal', 'Kompakt'], free: true },
      { key: 'sitz', label: 'Sitz', type: 'dropdown', options: ['Softclose', 'Normal'], free: true },
    ]
  },
  {
    id: 'basin', title: 'Waschbecken', sub: 'Becken, Armatur, Set',
    fields: [
      { key: 'modul', label: 'Geberit-Modul', type: 'dropdown', options: ['Duofix Waschtisch', 'Duofix Universal', 'Kombifix'], free: true },
      { key: 'breite', label: 'Breite', type: 'dropdown', options: ['50 cm', '55 cm', '60 cm', '65 cm'], free: true },
      { key: 'unterschrank', label: 'Alternativ: Waschbecken mit Unterschrank', type: 'text', placeholder: 'Modell / Maße' },
      { key: 'armatur', label: 'Armatur', type: 'dropdown', options: ['Einhandmischer', 'Zweigriff', 'Wandarmatur', 'Sensor'], free: true },
      { key: 'set', label: 'Waschtisch-Set', type: 'text', placeholder: 'z.B. Hersteller / Set-Bezeichnung' },
    ]
  },
  {
    id: 'duschtasse', title: 'Duschtasse', sub: 'Maße, Typ, Tiefe',
    fields: [
      { key: 'laenge', label: 'Länge (cm)', type: 'text', placeholder: 'z.B. 100' },
      { key: 'breite', label: 'Breite (cm)', type: 'text', placeholder: 'z.B. 90' },
      { key: 'typ', label: 'Typ', type: 'dropdown', options: ['Kaldewei Conoflat', 'Kaldewei Superplan'], free: true },
      { key: 'tiefe', label: 'Tiefe', type: 'dropdown', options: ['65 cm', '85 cm'], free: true },
    ]
  },
  {
    id: 'duscharmatur', title: 'Duscharmatur', sub: 'Mischer, Kopf-/Handbrause, Stange',
    fields: [
      { key: 'bauart', label: 'Bauart', type: 'dropdown', options: ['Aufputz', 'Unterputz'], free: true },
      { key: 'mischer', label: 'Mischer-Typ', type: 'dropdown', options: ['Einhebelmischer', 'Thermostat', '2-Wege-Thermostat', '3-Wege-Thermostat'], free: true },
      { key: 'hersteller', label: 'Hersteller / Serie', type: 'dropdown', options: ['Grohe Grohtherm', 'Grohe Eurosmart', 'Hansgrohe Ecostat', 'Hansgrohe ShowerSelect', 'Ideal Standard Ceratherm', 'Kludi'], free: true },
      { key: 'unterputzbox', label: 'Unterputz-Einbaukörper', type: 'text', placeholder: 'z.B. Grohe Rapido SmartBox' },
      { key: 'kopfbrause', label: 'Kopfbrause', type: 'dropdown', options: ['Ø 200 mm rund', 'Ø 250 mm rund', '300 × 300 mm eckig', 'ohne'], free: true },
      { key: 'handbrause', label: 'Handbrause + Schlauch', type: 'text', placeholder: 'z.B. Hansgrohe Croma 100, 1,60 m' },
      { key: 'stange', label: 'Brausestange / Wandhalter', type: 'dropdown', options: ['Brausestange 65 cm', 'Brausestange 90 cm', 'Wandhalter (Punkt)', 'ohne'], free: true },
      { key: 'rohbau', label: 'Rohbauset / Anschluss', type: 'text', placeholder: 'z.B. S-Anschlüsse, Rosetten' },
    ]
  },
  {
    id: 'rahmen', title: 'Montagerahmen Dusche', sub: 'Rahmen + Ablaufgarnitur',
    fields: [
      { key: 'hersteller', label: 'Hersteller', type: 'dropdown', options: ['MePa', 'Kaldewei', 'TECE', 'Geberit'], free: true },
      { key: 'ablauf', label: 'Ablaufgarnitur', type: 'dropdown', options: ['Kaldewei', 'Viega', 'Geberit', 'Tece'], free: true },
    ]
  },
  {
    id: 'wanne', title: 'Badewanne', sub: 'Maße, Typ, Zubehör',
    fields: [
      { key: 'laenge', label: 'Länge (cm)', type: 'text', placeholder: 'z.B. 170' },
      { key: 'breite', label: 'Breite (cm)', type: 'text', placeholder: 'z.B. 75' },
      { key: 'typ', label: 'Typ', type: 'text', placeholder: 'z.B. Stahlemail Kaldewei' },
      { key: 'ablauf', label: 'Ablaufgarnitur', type: 'dropdown', options: ['Kaldewei Comfort-Level', 'Viega Multiplex', 'Geberit Uniflex'], free: true },
      { key: 'fuesse', label: 'Füße / Wannenträger', type: 'text', placeholder: 'z.B. Universal-Wannenfußgestell' },
      { key: 'schiene', label: 'Montageschiene', type: 'text', placeholder: 'z.B. Wandhalterung' },
    ]
  },
  {
    id: 'wannenarmatur', title: 'Wannenarmatur', sub: 'Mischer, Wanneneinlauf, Umsteller',
    fields: [
      { key: 'bauart', label: 'Bauart', type: 'dropdown', options: ['Aufputz Wandmontage', 'Unterputz Wandmontage', 'Wannenrand-Armatur', 'Freistehend (bodenstehend)'], free: true },
      { key: 'mischer', label: 'Mischer-Typ', type: 'dropdown', options: ['Einhebelmischer', 'Thermostat', 'Zweigriff'], free: true },
      { key: 'hersteller', label: 'Hersteller / Serie', type: 'dropdown', options: ['Grohe Grohtherm', 'Grohe Eurosmart', 'Hansgrohe Ecostat', 'Hansgrohe Talis', 'Ideal Standard', 'Kludi'], free: true },
      { key: 'unterputzbox', label: 'Unterputz-Einbaukörper', type: 'text', placeholder: 'z.B. Grohe Rapido SmartBox' },
      { key: 'einlauf', label: 'Wanneneinlauf', type: 'dropdown', options: ['Wandauslauf', 'Bodeneinlauf', 'Kaskade', 'integriert in Armatur'], free: true },
      { key: 'umsteller', label: 'Umsteller / Brausegarnitur', type: 'text', placeholder: 'z.B. Automatik-Umsteller mit Handbrause' },
      { key: 'rohbau', label: 'Rohbauset / Anschluss', type: 'text', placeholder: 'z.B. S-Anschlüsse, Rosetten' },
    ]
  },
  {
    id: 'rohre', title: 'Rohr- und Verbindungsleitungen', sub: 'Kupfer, Fittings, Befestigung',
    fields: [
      { key: 'cu15', label: '15er Kupferrohr', type: 'text', placeholder: 'Meter / Anzahl' },
      { key: 'cu22', label: '22er Kupferrohr', type: 'text', placeholder: 'Meter / Anzahl' },
      { key: 'cu28', label: '28er Kupferrohr', type: 'text', placeholder: 'Meter / Anzahl' },
      { key: 'fittings', label: 'Form-/Verbindungsstücke + Befestigung', type: 'textarea', placeholder: 'Bögen, T-Stücke, Schellen, Pauschale …' },
    ]
  },
  {
    id: 'schutt', title: 'Bauschuttentsorgung', sub: 'Container und Kosten',
    fields: [
      { key: 'noetig', label: 'Erforderlich?', type: 'dropdown', options: ['Ja', 'Nein'], free: false },
      { key: 'kosten', label: 'Kosten (€) / Notiz', type: 'text', placeholder: 'z.B. Container 7m³ – 380 €' },
    ]
  },
  {
    id: 'stunden', title: 'Arbeitsstunden', sub: 'Monteur, Helfer, Azubi',
    fields: [
      { key: 'monteur', label: 'Monteur (Std.)', type: 'text', placeholder: 'z.B. 24' },
      { key: 'helfer', label: 'Helfer (Std.)', type: 'text', placeholder: 'z.B. 16' },
      { key: 'azubi', label: 'Auszubildender (Std.)', type: 'text', placeholder: 'z.B. 8' },
    ]
  },
  {
    id: 'fahrzeug', title: 'Fahrzeug- / Transporterkosten', sub: 'Anfahrt, Materialtransport',
    fields: [
      { key: 'kosten', label: 'Kosten (€) / Notiz', type: 'text', placeholder: 'z.B. 4 Fahrten à 25 € = 100 €' },
    ]
  },
];

const SYM_LIB = {
  wc:      { label: 'WC',      w: 40,  h: 60,  color: '#185FA5' },
  basin:   { label: 'Waschb.', w: 60,  h: 45,  color: '#0F6E56' },
  bath:    { label: 'Wanne',   w: 170, h: 75,  color: '#534AB7' },
  shower:  { label: 'Dusche',  w: 90,  h: 90,  color: '#993C1D' },
  bidet:   { label: 'Bidet',   w: 36,  h: 55,  color: '#993556' },
  cabinet: { label: 'Schrank', w: 60,  h: 35,  color: '#5F5E5A' },
  washer:  { label: 'WaMa',    w: 60,  h: 60,  color: '#854F0B' },
  door:    { label: 'Tür',     w: 80,  h: 10,  color: '#3B6D11' },
};

const STORAGE_KEY = 'badapp-data-v1';
const SVG_NS = 'http://www.w3.org/2000/svg';
const SNAP_DIST = 5; // cm

// ─── App-State ───
let appData = {
  projects: [],
  activeId: null,
};

let dragInfo = null;
let scale = 1, offX = 40, offY = 40;

// ─── Hilfsfunktionen ───
function uid() { return 'p_' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36); }
function fmtEur(n) { return new Intl.NumberFormat('de-DE').format(Math.round(n)) + ' €'; }
function fmtHours(n) { return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 1 }).format(n) + ' h'; }
function num(v) { const n = parseFloat(String(v).replace(',', '.')); return isNaN(n) ? 0 : n; }
function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function todayISO() { return new Date().toISOString().slice(0, 10); }

function emptyProject(name = 'Neues Projekt') {
  const p = {
    id: uid(),
    name,
    address: '',
    date: todayISO(),
    note: '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    customer: {
      firstName: '',
      lastName: '',
      street: '',
      zip: '',
      city: '',
      siteAddress: '',
      orderNo: '',
    },
    customerExpanded: true,
    checklist: {},
    plan: { roomL: 400, roomW: 250, symbols: [], nextId: 1 },
    selectedId: null,
  };
  SCHEMA.forEach(s => {
    p.checklist[s.id] = { checked: false, expanded: false, values: {}, free: {}, note: '' };
    s.fields.forEach(f => {
      p.checklist[s.id].values[f.key] = '';
      if (f.free) p.checklist[s.id].free[f.key] = '';
    });
  });
  return p;
}

function migrateProject(p) {
  // Stellt sicher, dass alle Felder existieren (für Updates)
  if (!p.customer) {
    p.customer = { firstName: '', lastName: '', street: '', zip: '', city: '', siteAddress: '', orderNo: '' };
  } else {
    ['firstName','lastName','street','zip','city','siteAddress','orderNo'].forEach(k => {
      if (p.customer[k] === undefined) p.customer[k] = '';
    });
  }
  if (p.customerExpanded === undefined) p.customerExpanded = true;
  if (!p.checklist) p.checklist = {};
  SCHEMA.forEach(s => {
    if (!p.checklist[s.id]) p.checklist[s.id] = { checked: false, expanded: false, values: {}, free: {}, note: '' };
    s.fields.forEach(f => {
      if (p.checklist[s.id].values[f.key] === undefined) p.checklist[s.id].values[f.key] = '';
      if (f.free && p.checklist[s.id].free[f.key] === undefined) p.checklist[s.id].free[f.key] = '';
    });
  });
  if (!p.plan) p.plan = { roomL: 400, roomW: 250, symbols: [], nextId: 1 };
  if (p.plan.nextId === undefined) p.plan.nextId = (p.plan.symbols.length || 0) + 1;
  // Symbole: w/h ggf. ergänzen aus SYM_LIB
  p.plan.symbols.forEach(sym => {
    const def = SYM_LIB[sym.type];
    if (def) {
      if (sym.w === undefined) sym.w = def.w;
      if (sym.h === undefined) sym.h = def.h;
    }
    if (sym.rot === undefined) sym.rot = 0;
  });
  return p;
}

function getActive() {
  return appData.projects.find(p => p.id === appData.activeId);
}

function save() {
  try {
    const p = getActive();
    if (p) p.updatedAt = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  } catch(e) { console.error('Save failed:', e); }
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.projects && Array.isArray(parsed.projects)) {
        appData = parsed;
        appData.projects.forEach(migrateProject);
      }
    }
  } catch(e) { console.error('Load failed:', e); }
  if (!appData.projects.length) {
    const p = emptyProject('Mein erstes Projekt');
    appData.projects.push(p);
    appData.activeId = p.id;
    save();
  }
  if (!appData.activeId || !getActive()) {
    appData.activeId = appData.projects[0].id;
  }
}

// ─── Header / Projekt-Anzeige ───
function updateHeader() {
  const p = getActive();
  document.getElementById('app-title').textContent = p ? p.name : 'Badsanierung';
  const info = [];
  if (p) {
    if (p.address) info.push(p.address);
    if (p.date) info.push(new Date(p.date).toLocaleDateString('de-DE'));
  }
  document.getElementById('project-info').textContent = info.join(' · ') || 'Kein Projekt-Detail';
}

// ─── Kundendaten ───
function customerCompactText(c) {
  if (!c) return 'Noch keine Daten erfasst';
  const fullName = [c.firstName, c.lastName].filter(Boolean).join(' ');
  const cityLine = [c.zip, c.city].filter(Boolean).join(' ');
  const parts = [];
  if (fullName) parts.push(fullName);
  if (c.street) parts.push(c.street);
  if (cityLine) parts.push(cityLine);
  if (c.orderNo) parts.push('Auftrag ' + c.orderNo);
  return parts.length ? parts.join(' · ') : 'Noch keine Daten erfasst';
}

function renderCustomer() {
  const p = getActive(); if (!p) return;
  const card = document.getElementById('customer-card');
  card.classList.toggle('expanded', !!p.customerExpanded);
  document.querySelectorAll('.cust-fld').forEach(el => {
    const key = el.dataset.key;
    el.value = p.customer[key] || '';
  });
  document.getElementById('customer-compact').textContent = customerCompactText(p.customer);
}

document.getElementById('customer-head').addEventListener('click', () => {
  const p = getActive(); if (!p) return;
  p.customerExpanded = !p.customerExpanded;
  document.getElementById('customer-card').classList.toggle('expanded', p.customerExpanded);
  save();
});

document.querySelectorAll('.cust-fld').forEach(el => {
  el.addEventListener('input', e => {
    const p = getActive(); if (!p) return;
    p.customer[e.target.dataset.key] = e.target.value;
    document.getElementById('customer-compact').textContent = customerCompactText(p.customer);
    save();
  });
});

document.getElementById('btn-copy-address').addEventListener('click', () => {
  const p = getActive(); if (!p) return;
  const c = p.customer;
  const cityLine = [c.zip, c.city].filter(Boolean).join(' ');
  const combined = [c.street, cityLine].filter(Boolean).join(', ');
  if (!combined) {
    alert('Bitte zuerst die Kundenadresse oben ausfüllen.');
    return;
  }
  c.siteAddress = combined;
  document.getElementById('cust-siteAddress').value = combined;
  save();
});

// ─── Tabs ───
const TABS = { check: 'view-check', plan: 'view-plan', summary: 'view-summary' };
function switchTab(k) {
  Object.keys(TABS).forEach(j => {
    document.getElementById(TABS[j]).style.display = j === k ? 'block' : 'none';
    document.getElementById('tab-' + j).classList.toggle('active', j === k);
  });
  if (k === 'summary') renderSummary();
  if (k === 'plan') drawPlan();
}
Object.keys(TABS).forEach(k => {
  document.getElementById('tab-' + k).addEventListener('click', () => switchTab(k));
});

// ─── Stats berechnen ───
function computeTotals() {
  const p = getActive(); if (!p) return { hours: 0, extra: 0 };
  const s = p.checklist.stunden.values;
  const hours = num(s.monteur) + num(s.helfer) + num(s.azubi);
  const schutt = p.checklist.schutt.values.noetig === 'Ja' ? num(p.checklist.schutt.values.kosten) : 0;
  const fahrzeug = num(p.checklist.fahrzeug.values.kosten);
  return { hours, extra: schutt + fahrzeug };
}

function updateStats() {
  const p = getActive(); if (!p) return;
  const done = SCHEMA.filter(s => p.checklist[s.id].checked).length;
  document.getElementById('stat-positions').textContent = done + ' / ' + SCHEMA.length;
  const t = computeTotals();
  document.getElementById('stat-hours').textContent = fmtHours(t.hours);
  document.getElementById('stat-extra').textContent = fmtEur(t.extra);
}

// ─── Checkliste rendern ───
function renderChecklist() {
  const p = getActive(); if (!p) return;
  const root = document.getElementById('checklist');
  root.innerHTML = '';
  SCHEMA.forEach(s => {
    const st = p.checklist[s.id];
    const card = document.createElement('div');
    card.className = 'item-card' + (st.checked ? ' done' : '') + (st.expanded ? ' expanded' : '');
    const filled = s.fields.filter(f => st.values[f.key] || st.free[f.key]).length;
    const subText = filled > 0 ? s.sub + ' · ' + filled + '/' + s.fields.length + ' Felder' : s.sub;

    const head = document.createElement('div');
    head.className = 'item-head';
    head.innerHTML = `
      <input type="checkbox" class="cb" ${st.checked ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer;">
      <div>
        <div class="item-title">${escapeHtml(s.title)}</div>
        <div class="item-sub">${escapeHtml(subText)}</div>
      </div>
      <span class="chev">›</span>
    `;
    card.appendChild(head);

    const body = document.createElement('div');
    body.className = 'item-body';
    s.fields.forEach(f => {
      const row = document.createElement('div');
      row.className = 'field-row';
      const val = st.values[f.key] || '';
      const freeVal = st.free[f.key] || '';
      if (f.type === 'text') {
        row.innerHTML = `<label class="field-label">${escapeHtml(f.label)}</label><input type="text" class="fld" data-pos="${s.id}" data-key="${f.key}" value="${escapeHtml(val)}" placeholder="${escapeHtml(f.placeholder || '')}">`;
      } else if (f.type === 'textarea') {
        row.innerHTML = `<label class="field-label">${escapeHtml(f.label)}</label><textarea class="fld" data-pos="${s.id}" data-key="${f.key}" rows="2" placeholder="${escapeHtml(f.placeholder || '')}">${escapeHtml(val)}</textarea>`;
      } else if (f.type === 'dropdown') {
        if (f.free) {
          row.innerHTML = `
            <label class="field-label">${escapeHtml(f.label)}</label>
            <div class="field-pair">
              <select class="fld" data-pos="${s.id}" data-key="${f.key}">
                <option value="">— wählen —</option>
                ${f.options.map(o => `<option ${val===o?'selected':''}>${escapeHtml(o)}</option>`).join('')}
              </select>
              <input type="text" class="fld-free" data-pos="${s.id}" data-key="${f.key}" value="${escapeHtml(freeVal)}" placeholder="oder Freitext …">
            </div>`;
        } else {
          row.innerHTML = `
            <label class="field-label">${escapeHtml(f.label)}</label>
            <select class="fld" data-pos="${s.id}" data-key="${f.key}">
              <option value="">— wählen —</option>
              ${f.options.map(o => `<option ${val===o?'selected':''}>${escapeHtml(o)}</option>`).join('')}
            </select>`;
        }
      }
      body.appendChild(row);
    });

    const noteRow = document.createElement('div');
    noteRow.className = 'field-row';
    noteRow.style.borderTop = '1px solid var(--border)';
    noteRow.style.paddingTop = '12px';
    noteRow.innerHTML = `<label class="field-label">Zusätzliche Notiz zu dieser Position</label><textarea class="fld-note" data-pos="${s.id}" rows="2" placeholder="Hinweise, Sonderwünsche, Bestellnummern …">${escapeHtml(st.note || '')}</textarea>`;
    body.appendChild(noteRow);

    card.appendChild(body);
    root.appendChild(card);

    head.querySelector('.cb').addEventListener('click', e => {
      e.stopPropagation();
      st.checked = e.target.checked;
      card.classList.toggle('done', st.checked);
      save(); updateStats();
    });
    head.addEventListener('click', e => {
      if (e.target.classList.contains('cb')) return;
      st.expanded = !st.expanded;
      card.classList.toggle('expanded', st.expanded);
      save();
    });
  });

  root.querySelectorAll('.fld').forEach(el => {
    const handler = e => {
      const pos = e.target.dataset.pos, key = e.target.dataset.key;
      p.checklist[pos].values[key] = e.target.value;
      save(); updateStats();
      const card = e.target.closest('.item-card');
      const sc = SCHEMA.find(x => x.id === pos);
      const filled = sc.fields.filter(f => p.checklist[pos].values[f.key] || p.checklist[pos].free[f.key]).length;
      const sub = card.querySelector('.item-sub');
      if (sub) sub.textContent = filled > 0 ? sc.sub + ' · ' + filled + '/' + sc.fields.length + ' Felder' : sc.sub;
    };
    el.addEventListener('input', handler);
    el.addEventListener('change', handler);
  });
  root.querySelectorAll('.fld-free').forEach(el => {
    el.addEventListener('input', e => {
      p.checklist[e.target.dataset.pos].free[e.target.dataset.key] = e.target.value;
      save();
    });
  });
  root.querySelectorAll('.fld-note').forEach(el => {
    el.addEventListener('input', e => {
      p.checklist[e.target.dataset.pos].note = e.target.value;
      save();
    });
  });
}

document.getElementById('btn-expand-all').addEventListener('click', () => {
  const p = getActive(); if (!p) return;
  SCHEMA.forEach(s => p.checklist[s.id].expanded = true);
  save(); renderChecklist();
});
document.getElementById('btn-collapse-all').addEventListener('click', () => {
  const p = getActive(); if (!p) return;
  SCHEMA.forEach(s => p.checklist[s.id].expanded = false);
  save(); renderChecklist();
});
document.getElementById('btn-reset').addEventListener('click', () => {
  if (!confirm('Alle Eingaben dieses Projekts zurücksetzen?')) return;
  const p = getActive(); if (!p) return;
  SCHEMA.forEach(s => {
    p.checklist[s.id] = { checked: false, expanded: false, values: {}, free: {}, note: '' };
    s.fields.forEach(f => {
      p.checklist[s.id].values[f.key] = '';
      if (f.free) p.checklist[s.id].free[f.key] = '';
    });
  });
  save(); renderChecklist(); updateStats();
});

// =====================================================
// GRUNDRISS-EDITOR
// =====================================================

function getSelected() {
  const p = getActive(); if (!p) return null;
  return p.plan.symbols.find(s => s.id === p.selectedId);
}

function clampSymbol(sym) {
  const p = getActive(); if (!p) return;
  const w = sym.rot % 180 === 0 ? sym.w : sym.h;
  const h = sym.rot % 180 === 0 ? sym.h : sym.w;
  sym.x = Math.max(0, Math.min(p.plan.roomL - w, sym.x));
  sym.y = Math.max(0, Math.min(p.plan.roomW - h, sym.y));
}

function snapToWalls(sym) {
  const p = getActive(); if (!p) return;
  const w = sym.rot % 180 === 0 ? sym.w : sym.h;
  const h = sym.rot % 180 === 0 ? sym.h : sym.w;
  if (sym.x < SNAP_DIST) sym.x = 0;
  if (sym.y < SNAP_DIST) sym.y = 0;
  if (p.plan.roomL - (sym.x + w) < SNAP_DIST) sym.x = p.plan.roomL - w;
  if (p.plan.roomW - (sym.y + h) < SNAP_DIST) sym.y = p.plan.roomW - h;
}

function drawPlan() {
  const p = getActive(); if (!p) return;
  const svg = document.getElementById('canvas');
  if (!svg) return;
  // Inputs synchronisieren
  document.getElementById('room-l').value = p.plan.roomL;
  document.getElementById('room-w').value = p.plan.roomW;

  svg.innerHTML = '';
  const VW = 640, VH = 420, padding = 40;
  const availW = VW - 2*padding, availH = VH - 2*padding;
  scale = Math.min(availW / p.plan.roomL, availH / p.plan.roomW);
  const roomPxW = p.plan.roomL * scale, roomPxH = p.plan.roomW * scale;
  offX = (VW - roomPxW) / 2; offY = (VH - roomPxH) / 2;

  // Raster
  const grid = document.createElementNS(SVG_NS, 'g');
  for (let cm = 0; cm <= p.plan.roomL; cm += 50) {
    const x = offX + cm * scale;
    const ln = document.createElementNS(SVG_NS, 'line');
    ln.setAttribute('x1', x); ln.setAttribute('x2', x);
    ln.setAttribute('y1', offY); ln.setAttribute('y2', offY + roomPxH);
    ln.setAttribute('stroke', '#E5E5E0');
    ln.setAttribute('stroke-width', cm % 100 === 0 ? '0.8' : '0.4');
    grid.appendChild(ln);
  }
  for (let cm = 0; cm <= p.plan.roomW; cm += 50) {
    const y = offY + cm * scale;
    const ln = document.createElementNS(SVG_NS, 'line');
    ln.setAttribute('x1', offX); ln.setAttribute('x2', offX + roomPxW);
    ln.setAttribute('y1', y); ln.setAttribute('y2', y);
    ln.setAttribute('stroke', '#E5E5E0');
    ln.setAttribute('stroke-width', cm % 100 === 0 ? '0.8' : '0.4');
    grid.appendChild(ln);
  }
  svg.appendChild(grid);

  // Raum
  const rect = document.createElementNS(SVG_NS, 'rect');
  rect.setAttribute('x', offX); rect.setAttribute('y', offY);
  rect.setAttribute('width', roomPxW); rect.setAttribute('height', roomPxH);
  rect.setAttribute('fill', 'none'); rect.setAttribute('stroke', '#2C2C2A');
  rect.setAttribute('stroke-width', '2.5');
  svg.appendChild(rect);

  // Maße
  const dimL = document.createElementNS(SVG_NS, 'text');
  dimL.setAttribute('x', offX + roomPxW/2); dimL.setAttribute('y', offY - 10);
  dimL.setAttribute('text-anchor', 'middle');
  dimL.setAttribute('font-size', '12'); dimL.setAttribute('fill', '#5F5E5A');
  dimL.textContent = p.plan.roomL + ' cm';
  svg.appendChild(dimL);
  const dimW = document.createElementNS(SVG_NS, 'text');
  dimW.setAttribute('x', offX - 10); dimW.setAttribute('y', offY + roomPxH/2);
  dimW.setAttribute('text-anchor', 'end'); dimW.setAttribute('dominant-baseline', 'middle');
  dimW.setAttribute('font-size', '12'); dimW.setAttribute('fill', '#5F5E5A');
  dimW.textContent = p.plan.roomW + ' cm';
  svg.appendChild(dimW);

  p.plan.symbols.forEach(sym => drawSymbol(svg, sym, p.selectedId));
  const area = (p.plan.roomL * p.plan.roomW) / 10000;
  document.getElementById('area-out').textContent = area.toFixed(1).replace('.', ',') + ' m²';
}

function drawSymbol(svg, sym, selectedId) {
  const def = SYM_LIB[sym.type];
  if (!def) return;
  const g = document.createElementNS(SVG_NS, 'g');
  g.setAttribute('data-id', sym.id);
  g.style.cursor = 'move';
  g.style.touchAction = 'none';
  const px = offX + sym.x * scale, py = offY + sym.y * scale;
  const w = sym.rot % 180 === 0 ? sym.w : sym.h;
  const h = sym.rot % 180 === 0 ? sym.h : sym.w;
  const pw = w * scale, ph = h * scale;
  g.setAttribute('transform', `translate(${px},${py})`);
  const isSelected = sym.id === selectedId;

  const r = document.createElementNS(SVG_NS, 'rect');
  r.setAttribute('width', pw); r.setAttribute('height', ph);
  r.setAttribute('fill', def.color); r.setAttribute('fill-opacity', isSelected ? '0.28' : '0.18');
  r.setAttribute('stroke', def.color);
  r.setAttribute('stroke-width', isSelected ? '2.5' : '1.5');
  r.setAttribute('rx', '3');
  g.appendChild(r);

  if (sym.type === 'wc') {
    const c = document.createElementNS(SVG_NS, 'ellipse');
    c.setAttribute('cx', pw/2); c.setAttribute('cy', ph*0.55);
    c.setAttribute('rx', pw*0.32); c.setAttribute('ry', ph*0.32);
    c.setAttribute('fill', 'white'); c.setAttribute('stroke', def.color);
    c.style.pointerEvents = 'none';
    g.appendChild(c);
  } else if (sym.type === 'basin') {
    const c = document.createElementNS(SVG_NS, 'ellipse');
    c.setAttribute('cx', pw/2); c.setAttribute('cy', ph/2);
    c.setAttribute('rx', pw*0.4); c.setAttribute('ry', ph*0.32);
    c.setAttribute('fill', 'white'); c.setAttribute('stroke', def.color);
    c.style.pointerEvents = 'none';
    g.appendChild(c);
  } else if (sym.type === 'bath') {
    const inn = document.createElementNS(SVG_NS, 'rect');
    inn.setAttribute('x', pw*0.06); inn.setAttribute('y', ph*0.12);
    inn.setAttribute('width', pw*0.88); inn.setAttribute('height', ph*0.76);
    inn.setAttribute('fill', 'white'); inn.setAttribute('stroke', def.color);
    inn.setAttribute('rx', Math.min(pw, ph)*0.15);
    inn.style.pointerEvents = 'none';
    g.appendChild(inn);
  } else if (sym.type === 'shower') {
    const d = document.createElementNS(SVG_NS, 'circle');
    d.setAttribute('cx', pw*0.85); d.setAttribute('cy', ph*0.15);
    d.setAttribute('r', Math.min(pw,ph)*0.08); d.setAttribute('fill', def.color);
    d.style.pointerEvents = 'none';
    g.appendChild(d);
    const c1 = document.createElementNS(SVG_NS, 'line');
    c1.setAttribute('x1', 0); c1.setAttribute('y1', 0);
    c1.setAttribute('x2', pw); c1.setAttribute('y2', ph);
    c1.setAttribute('stroke', def.color); c1.setAttribute('stroke-width', '0.5');
    c1.setAttribute('stroke-dasharray', '3 3'); c1.style.pointerEvents = 'none';
    g.appendChild(c1);
    const c2 = document.createElementNS(SVG_NS, 'line');
    c2.setAttribute('x1', pw); c2.setAttribute('y1', 0);
    c2.setAttribute('x2', 0); c2.setAttribute('y2', ph);
    c2.setAttribute('stroke', def.color); c2.setAttribute('stroke-width', '0.5');
    c2.setAttribute('stroke-dasharray', '3 3'); c2.style.pointerEvents = 'none';
    g.appendChild(c2);
  } else if (sym.type === 'door') {
    const arc = document.createElementNS(SVG_NS, 'path');
    arc.setAttribute('d', `M 0 ${ph} A ${pw} ${pw} 0 0 1 ${pw} 0`);
    arc.setAttribute('fill', 'none'); arc.setAttribute('stroke', def.color);
    arc.setAttribute('stroke-width', '1'); arc.setAttribute('stroke-dasharray', '3 2');
    arc.style.pointerEvents = 'none';
    g.appendChild(arc);
  }

  const t = document.createElementNS(SVG_NS, 'text');
  t.setAttribute('x', pw/2); t.setAttribute('y', ph/2 + 4);
  t.setAttribute('text-anchor', 'middle');
  t.setAttribute('font-size', Math.min(11, pw/5));
  t.setAttribute('fill', '#2C2C2A'); t.setAttribute('font-weight', '500');
  t.style.pointerEvents = 'none';
  t.textContent = def.label;
  g.appendChild(t);

  svg.appendChild(g);
}

function getEventPoint(e) {
  const svg = document.getElementById('canvas');
  let clientX, clientY;
  if (e.touches && e.touches.length) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if (e.changedTouches && e.changedTouches.length) {
    clientX = e.changedTouches[0].clientX;
    clientY = e.changedTouches[0].clientY;
  } else {
    clientX = e.clientX; clientY = e.clientY;
  }
  const pt = svg.createSVGPoint();
  pt.x = clientX; pt.y = clientY;
  const ctm = svg.getScreenCTM();
  if (!ctm) return { x: 0, y: 0 };
  const sp = pt.matrixTransform(ctm.inverse());
  return { x: sp.x, y: sp.y };
}

function attachCanvasEvents() {
  const svg = document.getElementById('canvas');
  if (!svg || svg._eventsAttached) return;
  svg._eventsAttached = true;

  const onStart = (e) => {
    const p = getActive(); if (!p) return;
    const target = e.target.closest('g[data-id]');
    if (!target) {
      p.selectedId = null;
      updateSelPanel(); drawPlan();
      return;
    }
    const id = parseInt(target.getAttribute('data-id'));
    const sym = p.plan.symbols.find(s => s.id === id);
    if (!sym) return;
    e.preventDefault();
    p.selectedId = id;
    const pt = getEventPoint(e);
    dragInfo = { sym, startX: pt.x, startY: pt.y, origX: sym.x, origY: sym.y, moved: false };
    updateSelPanel();
    drawPlan();
  };

  const onMove = (e) => {
    if (!dragInfo) return;
    e.preventDefault();
    const pt = getEventPoint(e);
    const dx = (pt.x - dragInfo.startX) / scale;
    const dy = (pt.y - dragInfo.startY) / scale;
    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) dragInfo.moved = true;
    dragInfo.sym.x = dragInfo.origX + dx;
    dragInfo.sym.y = dragInfo.origY + dy;
    clampSymbol(dragInfo.sym);
    drawPlan();
  };

  const onEnd = () => {
    if (!dragInfo) return;
    if (dragInfo.moved) {
      snapToWalls(dragInfo.sym);
      clampSymbol(dragInfo.sym);
    }
    dragInfo = null;
    save();
    updateSelPanel(); drawPlan();
  };

  const onDblClick = (e) => {
    const p = getActive(); if (!p) return;
    const target = e.target.closest('g[data-id]');
    if (!target) return;
    const id = parseInt(target.getAttribute('data-id'));
    const sym = p.plan.symbols.find(s => s.id === id);
    if (!sym) return;
    sym.rot = (sym.rot + 90) % 360;
    clampSymbol(sym);
    save(); updateSelPanel(); drawPlan();
  };

  const onContextMenu = (e) => {
    const p = getActive(); if (!p) return;
    const target = e.target.closest('g[data-id]');
    if (!target) return;
    e.preventDefault();
    const id = parseInt(target.getAttribute('data-id'));
    p.plan.symbols = p.plan.symbols.filter(s => s.id !== id);
    if (p.selectedId === id) p.selectedId = null;
    save(); updateSelPanel(); drawPlan();
  };

  svg.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);
  svg.addEventListener('dblclick', onDblClick);
  svg.addEventListener('contextmenu', onContextMenu);
  svg.addEventListener('touchstart', onStart, { passive: false });
  svg.addEventListener('touchmove', onMove, { passive: false });
  svg.addEventListener('touchend', onEnd);
  svg.addEventListener('touchcancel', onEnd);
}

function updateSelPanel() {
  const panel = document.getElementById('sel-panel');
  const sym = getSelected();
  if (!sym) { panel.style.display = 'none'; return; }
  panel.style.display = 'block';
  const def = SYM_LIB[sym.type];
  document.getElementById('sel-title').textContent = def ? def.label + ' (' + sym.type + ')' : sym.type;
  const w = sym.rot % 180 === 0 ? sym.w : sym.h;
  const h = sym.rot % 180 === 0 ? sym.h : sym.w;
  document.getElementById('sel-w').value = Math.round(w);
  document.getElementById('sel-h').value = Math.round(h);
  document.getElementById('sel-x').value = Math.round(sym.x);
  document.getElementById('sel-y').value = Math.round(sym.y);
}

function bindSelPanel() {
  const onWH = () => {
    const sym = getSelected(); if (!sym) return;
    const wIn = parseFloat(document.getElementById('sel-w').value) || sym.w;
    const hIn = parseFloat(document.getElementById('sel-h').value) || sym.h;
    if (sym.rot % 180 === 0) { sym.w = wIn; sym.h = hIn; }
    else { sym.w = hIn; sym.h = wIn; }
    clampSymbol(sym); save(); drawPlan();
  };
  const onXY = () => {
    const sym = getSelected(); if (!sym) return;
    sym.x = parseFloat(document.getElementById('sel-x').value) || 0;
    sym.y = parseFloat(document.getElementById('sel-y').value) || 0;
    clampSymbol(sym); save(); drawPlan();
  };
  document.getElementById('sel-w').addEventListener('input', onWH);
  document.getElementById('sel-h').addEventListener('input', onWH);
  document.getElementById('sel-x').addEventListener('input', onXY);
  document.getElementById('sel-y').addEventListener('input', onXY);
  document.getElementById('sel-rotate').addEventListener('click', () => {
    const sym = getSelected(); if (!sym) return;
    sym.rot = (sym.rot + 90) % 360;
    clampSymbol(sym); save(); updateSelPanel(); drawPlan();
  });
  document.getElementById('sel-delete').addEventListener('click', () => {
    const p = getActive(); const sym = getSelected();
    if (!p || !sym) return;
    p.plan.symbols = p.plan.symbols.filter(s => s.id !== sym.id);
    p.selectedId = null;
    save(); updateSelPanel(); drawPlan();
  });
  document.getElementById('sel-close').addEventListener('click', () => {
    const p = getActive(); if (!p) return;
    p.selectedId = null;
    updateSelPanel(); drawPlan();
  });
}

function bindKeyboard() {
  window.addEventListener('keydown', e => {
    if (document.activeElement && ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
    const sym = getSelected(); if (!sym) return;
    const step = e.shiftKey ? 10 : 1;
    let handled = true;
    if (e.key === 'ArrowLeft')  sym.x -= step;
    else if (e.key === 'ArrowRight') sym.x += step;
    else if (e.key === 'ArrowUp')    sym.y -= step;
    else if (e.key === 'ArrowDown')  sym.y += step;
    else if (e.key === 'Delete' || e.key === 'Backspace') {
      const p = getActive(); if (!p) return;
      p.plan.symbols = p.plan.symbols.filter(s => s.id !== sym.id);
      p.selectedId = null;
    } else handled = false;
    if (handled) {
      e.preventDefault();
      const sym2 = getSelected();
      if (sym2) clampSymbol(sym2);
      save(); updateSelPanel(); drawPlan();
    }
  });
}

document.getElementById('btn-apply').addEventListener('click', () => {
  const p = getActive(); if (!p) return;
  p.plan.roomL = Math.max(100, parseInt(document.getElementById('room-l').value) || 400);
  p.plan.roomW = Math.max(100, parseInt(document.getElementById('room-w').value) || 250);
  p.plan.symbols.forEach(clampSymbol);
  save(); drawPlan();
});
document.getElementById('btn-clear').addEventListener('click', () => {
  if (!confirm('Alle Symbole entfernen?')) return;
  const p = getActive(); if (!p) return;
  p.plan.symbols = []; p.selectedId = null;
  save(); updateSelPanel(); drawPlan();
});
document.querySelectorAll('.sym-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const p = getActive(); if (!p) return;
    const type = btn.dataset.sym, def = SYM_LIB[type];
    const sym = {
      id: p.plan.nextId++, type,
      x: Math.max(0, p.plan.roomL/2 - def.w/2),
      y: Math.max(0, p.plan.roomW/2 - def.h/2),
      w: def.w, h: def.h, rot: 0
    };
    clampSymbol(sym);
    p.plan.symbols.push(sym);
    p.selectedId = sym.id;
    save(); updateSelPanel(); drawPlan();
  });
});

// =====================================================
// ZUSAMMENFASSUNG
// =====================================================

function renderSummary() {
  const p = getActive(); if (!p) return;
  const root = document.getElementById('summary-content');
  let html = '';
  // Kopf
  html += `<h2 style="margin-top: 0;">${escapeHtml(p.name)}</h2>`;
  if (p.address || p.date) {
    const meta = [p.address, p.date ? new Date(p.date).toLocaleDateString('de-DE') : ''].filter(Boolean).join(' · ');
    html += `<p style="color: var(--text-secondary); margin-top: -8px;">${escapeHtml(meta)}</p>`;
  }
  if (p.note) html += `<p style="margin-bottom: 1rem; font-style: italic;">${escapeHtml(p.note)}</p>`;

  // Kundendaten
  const c = p.customer;
  const hasCustomer = c && Object.values(c).some(v => v && String(v).trim());
  if (hasCustomer) {
    html += '<div class="summary-block"><p style="font-weight: 500;">Kundendaten</p>';
    const fullName = [c.firstName, c.lastName].filter(Boolean).join(' ');
    if (fullName) html += `<p style="margin: 2px 0; font-size: 13px;"><span style="color: var(--text-secondary);">Kunde:</span> ${escapeHtml(fullName)}</p>`;
    if (c.street || c.zip || c.city) {
      const addr = [c.street, [c.zip, c.city].filter(Boolean).join(' ')].filter(Boolean).join(', ');
      html += `<p style="margin: 2px 0; font-size: 13px;"><span style="color: var(--text-secondary);">Adresse:</span> ${escapeHtml(addr)}</p>`;
    }
    if (c.siteAddress) html += `<p style="margin: 2px 0; font-size: 13px;"><span style="color: var(--text-secondary);">Baustelle:</span> ${escapeHtml(c.siteAddress)}</p>`;
    if (c.orderNo) html += `<p style="margin: 2px 0; font-size: 13px;"><span style="color: var(--text-secondary);">Auftragsnummer:</span> ${escapeHtml(c.orderNo)}</p>`;
    html += '</div>';
  }

  // Stats
  html += '<div style="background: var(--bg-secondary); border-radius: var(--radius-md); padding: 14px 16px; margin-bottom: 1rem;">';
  const t = computeTotals();
  const area = (p.plan.roomL * p.plan.roomW) / 10000;
  html += `<p style="margin: 0 0 6px;"><strong>Raumgröße:</strong> ${p.plan.roomL} × ${p.plan.roomW} cm (${area.toFixed(1).replace('.', ',')} m²)</p>`;
  html += `<p style="margin: 0 0 6px;"><strong>Symbole geplant:</strong> ${p.plan.symbols.length}</p>`;
  html += `<p style="margin: 0 0 6px;"><strong>Stunden gesamt:</strong> ${fmtHours(t.hours)} <span style="color: var(--text-secondary); font-size: 12px;">(Preis wird vom Büro ergänzt)</span></p>`;
  html += `<p style="margin: 0;"><strong>Sonstige Kosten:</strong> ${fmtEur(t.extra)}</p>`;
  html += '</div>';

  // Symbol-Liste
  if (p.plan.symbols.length) {
    html += '<div class="summary-block"><p style="font-weight: 500;">Grundriss-Symbole</p>';
    p.plan.symbols.forEach(s => {
      const w = s.rot % 180 === 0 ? s.w : s.h;
      const h = s.rot % 180 === 0 ? s.h : s.w;
      const def = SYM_LIB[s.type];
      html += `<p style="margin: 2px 0; color: var(--text-secondary); font-size: 13px;">${escapeHtml(def ? def.label : s.type)}: ${Math.round(w)}×${Math.round(h)} cm @ Pos. ${Math.round(s.x)},${Math.round(s.y)} cm</p>`;
    });
    html += '</div>';
  }

  // Positionen
  SCHEMA.forEach(s => {
    const st = p.checklist[s.id];
    const filled = s.fields.filter(f => st.values[f.key] || st.free[f.key]);
    if (filled.length === 0 && !st.note && !st.checked) return;
    html += `<div class="summary-block">`;
    html += `<p style="font-weight: 500;">${st.checked ? '✓ ' : ''}${escapeHtml(s.title)}</p>`;
    filled.forEach(f => {
      const v = st.values[f.key], fr = st.free[f.key];
      const txt = [v, fr].filter(Boolean).join(' / ');
      html += `<p style="margin: 2px 0; color: var(--text-secondary); font-size: 13px;">${escapeHtml(f.label)}: <span style="color: var(--text-primary);">${escapeHtml(txt)}</span></p>`;
    });
    if (st.note) html += `<p style="margin: 4px 0 0; font-size: 13px; font-style: italic; color: var(--text-secondary);">Notiz: ${escapeHtml(st.note)}</p>`;
    html += '</div>';
  });
  root.innerHTML = html;
}

function exportText() {
  const p = getActive(); if (!p) return '';
  let txt = `Badsanierung – ${p.name}\n`;
  if (p.address) txt += `Adresse: ${p.address}\n`;
  if (p.date) txt += `Datum: ${new Date(p.date).toLocaleDateString('de-DE')}\n`;

  const c = p.customer;
  const hasCustomer = c && Object.values(c).some(v => v && String(v).trim());
  if (hasCustomer) {
    txt += '\n## Kundendaten\n';
    const fullName = [c.firstName, c.lastName].filter(Boolean).join(' ');
    if (fullName) txt += `- Kunde: ${fullName}\n`;
    if (c.street) txt += `- Straße: ${c.street}\n`;
    const cityLine = [c.zip, c.city].filter(Boolean).join(' ');
    if (cityLine) txt += `- PLZ/Ort: ${cityLine}\n`;
    if (c.siteAddress) txt += `- Baustellen-Adresse: ${c.siteAddress}\n`;
    if (c.orderNo) txt += `- Auftragsnummer: ${c.orderNo}\n`;
  }

  txt += `\nRaum: ${p.plan.roomL} × ${p.plan.roomW} cm (${((p.plan.roomL*p.plan.roomW)/10000).toFixed(1).replace('.', ',')} m²)\n\n`;
  if (p.note) txt += `Allgemeine Notiz: ${p.note}\n\n`;
  if (p.plan.symbols.length) {
    txt += `## Grundriss-Symbole\n`;
    p.plan.symbols.forEach(s => {
      const w = s.rot % 180 === 0 ? s.w : s.h;
      const h = s.rot % 180 === 0 ? s.h : s.w;
      const def = SYM_LIB[s.type];
      txt += `- ${def ? def.label : s.type}: ${Math.round(w)}×${Math.round(h)} cm @ Pos. ${Math.round(s.x)},${Math.round(s.y)} cm\n`;
    });
    txt += '\n';
  }
  SCHEMA.forEach(s => {
    const st = p.checklist[s.id];
    const filled = s.fields.filter(f => st.values[f.key] || st.free[f.key]);
    if (filled.length === 0 && !st.note) return;
    txt += `## ${s.title}${st.checked ? ' [erledigt]' : ''}\n`;
    filled.forEach(f => {
      const v = [st.values[f.key], st.free[f.key]].filter(Boolean).join(' / ');
      txt += `- ${f.label}: ${v}\n`;
    });
    if (st.note) txt += `- Notiz: ${st.note}\n`;
    txt += '\n';
  });
  const t = computeTotals();
  txt += `## Summen\n- Stunden gesamt: ${fmtHours(t.hours)} (Preis wird vom Büro ergänzt)\n- Sonstige Kosten: ${fmtEur(t.extra)}\n`;
  return txt;
}

document.getElementById('btn-copy').addEventListener('click', e => {
  const txt = exportText();
  if (navigator.clipboard) {
    navigator.clipboard.writeText(txt).then(() => {
      e.target.textContent = '✓ Kopiert';
      setTimeout(() => { e.target.textContent = 'In Zwischenablage kopieren'; }, 1500);
    });
  } else {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = txt;
    document.body.appendChild(ta);
    ta.select(); document.execCommand('copy');
    document.body.removeChild(ta);
    e.target.textContent = '✓ Kopiert';
    setTimeout(() => { e.target.textContent = 'In Zwischenablage kopieren'; }, 1500);
  }
});

document.getElementById('btn-export-json').addEventListener('click', () => {
  const p = getActive(); if (!p) return;
  const blob = new Blob([JSON.stringify(p, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = (p.name.replace(/[^\w\säöüÄÖÜß-]/g, '') || 'badsanierung') + '.json';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

// =====================================================
// PDF / DRUCKEN
// =====================================================

function generatePrintHTML() {
  const p = getActive(); if (!p) return '';
  const t = computeTotals();
  const area = (p.plan.roomL * p.plan.roomW) / 10000;

  // SVG für PDF erzeugen (eigene Version, ohne Interaktion)
  let svgContent = '';
  const VW = 600, VH = 380, padding = 40;
  const availW = VW - 2*padding, availH = VH - 2*padding;
  const pdfScale = Math.min(availW / p.plan.roomL, availH / p.plan.roomW);
  const roomPxW = p.plan.roomL * pdfScale, roomPxH = p.plan.roomW * pdfScale;
  const pOffX = (VW - roomPxW) / 2, pOffY = (VH - roomPxH) / 2;
  svgContent += `<svg viewBox="0 0 ${VW} ${VH}" xmlns="http://www.w3.org/2000/svg" style="width: 100%; max-width: 600px; border: 1px solid #ccc;">`;
  // Raster
  for (let cm = 0; cm <= p.plan.roomL; cm += 50) {
    const x = pOffX + cm * pdfScale;
    svgContent += `<line x1="${x}" x2="${x}" y1="${pOffY}" y2="${pOffY + roomPxH}" stroke="#E5E5E0" stroke-width="${cm % 100 === 0 ? '0.8' : '0.4'}"/>`;
  }
  for (let cm = 0; cm <= p.plan.roomW; cm += 50) {
    const y = pOffY + cm * pdfScale;
    svgContent += `<line x1="${pOffX}" x2="${pOffX + roomPxW}" y1="${y}" y2="${y}" stroke="#E5E5E0" stroke-width="${cm % 100 === 0 ? '0.8' : '0.4'}"/>`;
  }
  // Raum
  svgContent += `<rect x="${pOffX}" y="${pOffY}" width="${roomPxW}" height="${roomPxH}" fill="none" stroke="#2C2C2A" stroke-width="2.5"/>`;
  svgContent += `<text x="${pOffX + roomPxW/2}" y="${pOffY - 10}" text-anchor="middle" font-size="12" fill="#5F5E5A">${p.plan.roomL} cm</text>`;
  svgContent += `<text x="${pOffX - 10}" y="${pOffY + roomPxH/2}" text-anchor="end" dominant-baseline="middle" font-size="12" fill="#5F5E5A">${p.plan.roomW} cm</text>`;
  // Symbole
  p.plan.symbols.forEach(s => {
    const def = SYM_LIB[s.type];
    if (!def) return;
    const w = s.rot % 180 === 0 ? s.w : s.h;
    const h = s.rot % 180 === 0 ? s.h : s.w;
    const px = pOffX + s.x * pdfScale, py = pOffY + s.y * pdfScale;
    const pw = w * pdfScale, ph = h * pdfScale;
    svgContent += `<g transform="translate(${px},${py})">`;
    svgContent += `<rect width="${pw}" height="${ph}" fill="${def.color}" fill-opacity="0.18" stroke="${def.color}" stroke-width="1.5" rx="3"/>`;
    svgContent += `<text x="${pw/2}" y="${ph/2 + 4}" text-anchor="middle" font-size="${Math.min(11, pw/5)}" fill="#2C2C2A" font-weight="500">${def.label}</text>`;
    svgContent += '</g>';
  });
  svgContent += '</svg>';

  let body = '';
  body += `<h1>${escapeHtml(p.name)}</h1>`;
  const meta = [p.address, p.date ? new Date(p.date).toLocaleDateString('de-DE') : ''].filter(Boolean).join(' · ');
  if (meta) body += `<p class="meta">${escapeHtml(meta)}</p>`;
  if (p.note) body += `<p class="note">${escapeHtml(p.note)}</p>`;

  // Kundendaten
  const cust = p.customer;
  const hasCust = cust && Object.values(cust).some(v => v && String(v).trim());
  if (hasCust) {
    body += '<h2>Kundendaten</h2>';
    body += '<table class="overview">';
    const fullName = [cust.firstName, cust.lastName].filter(Boolean).join(' ');
    if (fullName) body += `<tr><td>Kunde</td><td>${escapeHtml(fullName)}</td></tr>`;
    if (cust.street) body += `<tr><td>Straße</td><td>${escapeHtml(cust.street)}</td></tr>`;
    const cityLine = [cust.zip, cust.city].filter(Boolean).join(' ');
    if (cityLine) body += `<tr><td>PLZ / Ort</td><td>${escapeHtml(cityLine)}</td></tr>`;
    if (cust.siteAddress) body += `<tr><td>Baustellen-Adresse</td><td>${escapeHtml(cust.siteAddress)}</td></tr>`;
    if (cust.orderNo) body += `<tr><td>Auftragsnummer</td><td>${escapeHtml(cust.orderNo)}</td></tr>`;
    body += '</table>';
  }

  body += '<h2>Übersicht</h2>';
  body += '<table class="overview">';
  body += `<tr><td>Raumgröße</td><td>${p.plan.roomL} × ${p.plan.roomW} cm (${area.toFixed(1).replace('.', ',')} m²)</td></tr>`;
  body += `<tr><td>Symbole geplant</td><td>${p.plan.symbols.length}</td></tr>`;
  body += `<tr><td>Stunden gesamt</td><td>${fmtHours(t.hours)} <em>(Preis wird vom Büro ergänzt)</em></td></tr>`;
  body += `<tr><td>Sonstige Kosten</td><td>${fmtEur(t.extra)}</td></tr>`;
  body += '</table>';

  body += '<h2>Grundriss</h2>';
  body += `<div class="plan">${svgContent}</div>`;

  if (p.plan.symbols.length) {
    body += '<table class="syms"><thead><tr><th>Symbol</th><th>Maße (cm)</th><th>Position (cm)</th></tr></thead><tbody>';
    p.plan.symbols.forEach(s => {
      const w = s.rot % 180 === 0 ? s.w : s.h;
      const h = s.rot % 180 === 0 ? s.h : s.w;
      const def = SYM_LIB[s.type];
      body += `<tr><td>${escapeHtml(def ? def.label : s.type)}</td><td>${Math.round(w)} × ${Math.round(h)}</td><td>X ${Math.round(s.x)}, Y ${Math.round(s.y)}</td></tr>`;
    });
    body += '</tbody></table>';
  }

  body += '<h2>Positionen</h2>';
  SCHEMA.forEach(s => {
    const st = p.checklist[s.id];
    const filled = s.fields.filter(f => st.values[f.key] || st.free[f.key]);
    if (filled.length === 0 && !st.note && !st.checked) return;
    body += `<div class="pos"><h3>${st.checked ? '✓ ' : ''}${escapeHtml(s.title)}</h3>`;
    if (filled.length) {
      body += '<dl>';
      filled.forEach(f => {
        const v = [st.values[f.key], st.free[f.key]].filter(Boolean).join(' / ');
        body += `<dt>${escapeHtml(f.label)}</dt><dd>${escapeHtml(v)}</dd>`;
      });
      body += '</dl>';
    }
    if (st.note) body += `<p class="note">Notiz: ${escapeHtml(st.note)}</p>`;
    body += '</div>';
  });

  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="UTF-8"><title>${escapeHtml(p.name)} – Badsanierung</title>
<style>
  @page { margin: 16mm; size: A4; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #2C2C2A; max-width: 800px; margin: 0 auto; padding: 16px; line-height: 1.5; }
  h1 { font-size: 20px; margin: 0 0 4px; border-bottom: 2px solid #2C2C2A; padding-bottom: 8px; }
  h2 { font-size: 15px; margin-top: 22px; margin-bottom: 8px; border-bottom: 1px solid #ccc; padding-bottom: 4px; }
  h3 { font-size: 13px; margin: 14px 0 6px; }
  .meta { color: #5F5E5A; font-size: 13px; margin: 0 0 8px; }
  .note { font-style: italic; color: #5F5E5A; font-size: 12px; }
  table { width: 100%; border-collapse: collapse; font-size: 12px; }
  table.overview td { padding: 6px 8px; border-bottom: 1px solid #eee; }
  table.overview td:first-child { color: #5F5E5A; width: 40%; }
  table.syms { margin-top: 12px; }
  table.syms th { text-align: left; padding: 6px 8px; background: #f0efea; border-bottom: 1px solid #ccc; }
  table.syms td { padding: 6px 8px; border-bottom: 1px solid #eee; }
  .plan { margin: 12px 0; text-align: center; }
  .pos { margin-bottom: 10px; break-inside: avoid; page-break-inside: avoid; }
  dl { display: grid; grid-template-columns: 30% 1fr; gap: 4px 12px; margin: 6px 0; font-size: 12px; }
  dt { color: #5F5E5A; }
  dd { margin: 0; }
  @media print { body { padding: 0; max-width: 100%; } }
</style></head>
<body>${body}<script>window.onload = () => setTimeout(() => window.print(), 300);<\/script></body></html>`;
}

function openPrintWindow() {
  const html = generatePrintHTML();
  const win = window.open('', '_blank');
  if (!win) {
    alert('Bitte Pop-ups erlauben, um die PDF-Ansicht zu öffnen.');
    return;
  }
  win.document.write(html);
  win.document.close();
}
document.getElementById('btn-pdf').addEventListener('click', openPrintWindow);
document.getElementById('btn-pdf-2').addEventListener('click', openPrintWindow);

// =====================================================
// PROJEKT-VERWALTUNG
// =====================================================

let editingProjectId = null;

function showModal(id) { document.getElementById(id).classList.add('active'); }
function hideModal(id) { document.getElementById(id).classList.remove('active'); }

function renderProjectList() {
  const ul = document.getElementById('project-list');
  ul.innerHTML = '';
  // sortieren: zuletzt geändert oben
  const sorted = [...appData.projects].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  sorted.forEach(p => {
    const li = document.createElement('li');
    li.className = 'project-item' + (p.id === appData.activeId ? ' active' : '');
    const meta = [p.address, p.date ? new Date(p.date).toLocaleDateString('de-DE') : ''].filter(Boolean).join(' · ');
    li.innerHTML = `
      <div style="flex: 1; min-width: 0; cursor: pointer;" class="select-area">
        <div class="name">${escapeHtml(p.name)}</div>
        <div class="meta">${escapeHtml(meta)}</div>
      </div>
      <div style="display: flex; gap: 4px;">
        <button class="edit-btn icon-only" title="Bearbeiten">✏️</button>
        <button class="del-btn icon-only danger" title="Löschen">🗑</button>
      </div>
    `;
    li.querySelector('.select-area').addEventListener('click', () => {
      appData.activeId = p.id;
      save(); hideModal('modal-projects');
      updateHeader(); renderCustomer(); renderChecklist(); updateStats(); drawPlan();
    });
    li.querySelector('.edit-btn').addEventListener('click', e => {
      e.stopPropagation();
      openEditModal(p.id);
    });
    li.querySelector('.del-btn').addEventListener('click', e => {
      e.stopPropagation();
      if (!confirm(`Projekt "${p.name}" wirklich löschen?`)) return;
      appData.projects = appData.projects.filter(x => x.id !== p.id);
      if (appData.activeId === p.id) {
        appData.activeId = appData.projects[0] ? appData.projects[0].id : null;
        if (!appData.activeId) {
          const np = emptyProject('Neues Projekt');
          appData.projects.push(np);
          appData.activeId = np.id;
        }
      }
      save();
      renderProjectList();
      updateHeader(); renderCustomer(); renderChecklist(); updateStats(); drawPlan();
    });
    ul.appendChild(li);
  });
}

function openEditModal(id) {
  editingProjectId = id;
  if (id) {
    const p = appData.projects.find(x => x.id === id);
    if (!p) return;
    document.getElementById('edit-modal-title').textContent = 'Projekt bearbeiten';
    document.getElementById('edit-name').value = p.name;
    document.getElementById('edit-address').value = p.address || '';
    document.getElementById('edit-date').value = p.date || '';
    document.getElementById('edit-note').value = p.note || '';
  } else {
    document.getElementById('edit-modal-title').textContent = 'Neues Projekt';
    document.getElementById('edit-name').value = '';
    document.getElementById('edit-address').value = '';
    document.getElementById('edit-date').value = todayISO();
    document.getElementById('edit-note').value = '';
  }
  showModal('modal-edit-project');
}

document.getElementById('btn-projects').addEventListener('click', () => {
  renderProjectList();
  showModal('modal-projects');
});
document.getElementById('btn-close-projects').addEventListener('click', () => hideModal('modal-projects'));
document.getElementById('btn-new-project').addEventListener('click', () => openEditModal(null));
document.getElementById('btn-edit-cancel').addEventListener('click', () => hideModal('modal-edit-project'));
document.getElementById('btn-edit-save').addEventListener('click', () => {
  const name = document.getElementById('edit-name').value.trim();
  if (!name) { alert('Bitte einen Projektnamen eingeben.'); return; }
  const address = document.getElementById('edit-address').value.trim();
  const date = document.getElementById('edit-date').value;
  const note = document.getElementById('edit-note').value;
  if (editingProjectId) {
    const p = appData.projects.find(x => x.id === editingProjectId);
    if (p) { p.name = name; p.address = address; p.date = date; p.note = note; }
  } else {
    const p = emptyProject(name);
    p.address = address; p.date = date; p.note = note;
    appData.projects.push(p);
    appData.activeId = p.id;
  }
  save();
  hideModal('modal-edit-project');
  renderProjectList();
  updateHeader(); renderCustomer(); renderChecklist(); updateStats(); drawPlan();
});

document.getElementById('btn-import-json').addEventListener('click', () => {
  document.getElementById('import-file').click();
});
document.getElementById('import-file').addEventListener('change', e => {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const obj = JSON.parse(ev.target.result);
      if (obj.id && obj.name && obj.checklist) {
        // einzelnes Projekt
        obj.id = uid();
        migrateProject(obj);
        appData.projects.push(obj);
        appData.activeId = obj.id;
        save();
        renderProjectList();
        updateHeader(); renderCustomer(); renderChecklist(); updateStats(); drawPlan();
        alert('Projekt importiert: ' + obj.name);
      } else {
        alert('Ungültige Datei.');
      }
    } catch(err) { alert('Fehler beim Lesen: ' + err.message); }
  };
  reader.readAsText(file);
  e.target.value = '';
});

// Modal-Backdrop schließen bei Klick außerhalb
document.querySelectorAll('.modal-backdrop').forEach(m => {
  m.addEventListener('click', e => {
    if (e.target === m) m.classList.remove('active');
  });
});

// =====================================================
// INIT
// =====================================================

load();
updateHeader();
renderCustomer();
renderChecklist();
updateStats();
drawPlan();
attachCanvasEvents();
bindSelPanel();
bindKeyboard();
