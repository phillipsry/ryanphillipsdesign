/* @ds-bundle: {"format":3,"namespace":"QuillDesignSystem_a37217","components":[{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/display/Eyebrow.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ProductCard","sourcePath":"components/surfaces/ProductCard.jsx"}],"sourceHashes":{"components/display/Avatar.jsx":"f09ed2ccdbbc","components/display/Badge.jsx":"b909fc8ac35f","components/display/Eyebrow.jsx":"7896d6957cf4","components/forms/Button.jsx":"283b5f4b71eb","components/forms/Input.jsx":"51f16ad32d5f","components/surfaces/Card.jsx":"060c9b8845e6","components/surfaces/ProductCard.jsx":"695121e12142","ui_kits/marketplace/App.js":"aee6f56f2a6a","ui_kits/marketplace/CardDetail.js":"76414a1447e8","ui_kits/marketplace/Sections.js":"28358e764771","ui_kits/marketplace/data.js":"617cba6147b0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.QuillDesignSystem_a37217 = window.QuillDesignSystem_a37217 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .ql-avatar {
    display: inline-flex; align-items: center; justify-content: center;
    border-radius: var(--radius-pill);
    overflow: hidden;
    background: var(--paper-deep);
    color: var(--ink-soft);
    font-family: var(--font-display);
    font-style: italic;
    font-variation-settings: var(--fraunces-text);
    border: 1px solid var(--line-soft);
    flex: 0 0 auto;
  }
  .ql-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ql-avatar--sm { width: 32px; height: 32px; font-size: var(--text-sm); }
  .ql-avatar--md { width: 44px; height: 44px; font-size: var(--text-md); }
  .ql-avatar--lg { width: 64px; height: 64px; font-size: var(--text-xl); }
  `;
  const el = document.createElement('style');
  el.setAttribute('data-ql', 'avatar');
  el.textContent = css;
  document.head.appendChild(el);
}
function Avatar({
  src,
  alt = '',
  initials,
  size = 'md',
  className = '',
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ql-avatar', `ql-avatar--${size}`, className].filter(Boolean).join(' ')
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("span", null, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .ql-badge {
    display: inline-flex; align-items: center;
    font-family: var(--font-body);
    font-size: var(--text-2xs);
    font-weight: var(--weight-medium);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: var(--radius-pill);
    line-height: 1.4;
    white-space: nowrap;
  }
  .ql-badge--everyday { background: var(--tier-everyday-bg); color: var(--tier-everyday-fg); }
  .ql-badge--featured { background: var(--tier-featured-bg); color: var(--tier-featured-fg); }
  .ql-badge--signed   { background: var(--tier-signed-bg);   color: var(--tier-signed-fg); }
  .ql-badge--heirloom { background: var(--tier-heirloom-bg); color: var(--tier-heirloom-fg); }
  .ql-badge--neutral  { background: var(--paper-deep); color: var(--ink-soft); }
  `;
  const el = document.createElement('style');
  el.setAttribute('data-ql', 'badge');
  el.textContent = css;
  document.head.appendChild(el);
}
const LABELS = {
  everyday: 'Everyday',
  featured: 'Featured',
  signed: 'Signed',
  heirloom: 'Heirloom'
};
function Badge({
  tier = 'neutral',
  children,
  className = '',
  ...rest
}) {
  ensureStyles();
  const label = children ?? LABELS[tier] ?? tier;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ql-badge', `ql-badge--${tier}`, className].filter(Boolean).join(' ')
  }, rest), label);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .ql-eyebrow {
    display: inline-flex; align-items: center; gap: var(--space-3);
    font-family: var(--font-body);
    font-size: var(--text-xs);
    font-weight: var(--weight-medium);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wider);
    color: var(--terracotta);
  }
  .ql-eyebrow::before {
    content: ''; width: 24px; height: 1px; background: currentColor; display: inline-block;
  }
  .ql-eyebrow--muted { color: var(--ink-muted); letter-spacing: var(--tracking-widest); }
  .ql-eyebrow--muted::before { display: none; }
  `;
  const el = document.createElement('style');
  el.setAttribute('data-ql', 'eyebrow');
  el.textContent = css;
  document.head.appendChild(el);
}
function Eyebrow({
  children,
  muted = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ql-eyebrow', muted ? 'ql-eyebrow--muted' : '', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once. Pseudo-states (hover/active/focus) carry the
   brand's interaction language, so they live in a stylesheet, not inline. */
let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .ql-btn {
    --_bg: var(--ink);
    --_fg: var(--paper);
    --_bd: var(--ink);
    display: inline-flex; align-items: center; justify-content: center;
    gap: var(--space-3);
    font-family: var(--font-body);
    font-weight: var(--weight-medium);
    font-size: var(--text-base);
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid var(--_bd);
    background: var(--_bg);
    color: var(--_fg);
    border-radius: var(--radius-sm);
    padding: var(--space-4) var(--space-8);
    transition: background var(--dur-fast) var(--ease-out),
                border-color var(--dur-fast) var(--ease-out),
                color var(--dur-fast) var(--ease-out),
                transform var(--dur-fast) var(--ease-out),
                box-shadow var(--dur-fast) var(--ease-out);
  }
  .ql-btn:hover { transform: var(--lift-sm); box-shadow: var(--shadow-btn-hover); }
  .ql-btn:active { transform: translateY(0); box-shadow: none; }
  .ql-btn:focus-visible { outline: 2px solid var(--terracotta); outline-offset: 2px; }
  .ql-btn .ql-btn__arrow { transition: transform var(--dur) var(--ease-out); }
  .ql-btn:hover .ql-btn__arrow { transform: translateX(4px); }

  /* Primary — solid ink, warms to terracotta on hover */
  .ql-btn--primary:hover { --_bg: var(--terracotta); --_bd: var(--terracotta); }

  /* Accent — terracotta from rest, deepens on press */
  .ql-btn--accent { --_bg: var(--terracotta); --_bd: var(--terracotta); }
  .ql-btn--accent:hover { --_bg: var(--terracotta-deep); --_bd: var(--terracotta-deep); }

  /* Secondary — ink outline on paper, fills ink on hover */
  .ql-btn--secondary { --_bg: transparent; --_fg: var(--ink); --_bd: var(--ink); }
  .ql-btn--secondary:hover { --_bg: var(--ink); --_fg: var(--paper); }

  /* Ghost — text only, terracotta on hover */
  .ql-btn--ghost { --_bg: transparent; --_fg: var(--ink-soft); --_bd: transparent; }
  .ql-btn--ghost:hover { --_fg: var(--terracotta); box-shadow: none; }

  /* Link — underlined inline text, no chrome; never lifts */
  .ql-btn--link {
    --_bg: transparent; --_fg: var(--ink); --_bd: transparent;
    padding-left: 0; padding-right: 0;
    text-decoration: underline; text-underline-offset: 3px;
    text-decoration-thickness: 1px; text-decoration-color: var(--line-strong);
  }
  .ql-btn--link:hover { --_fg: var(--terracotta); text-decoration-color: var(--terracotta); transform: none; box-shadow: none; }
  .ql-btn--link:active { transform: none; }

  /* Sizes */
  .ql-btn--sm { font-size: var(--text-sm); padding: var(--space-2) var(--space-4); }
  .ql-btn--lg { font-size: var(--text-lg); padding: var(--space-5) var(--space-10); }

  .ql-btn:disabled, .ql-btn[aria-disabled="true"] {
    opacity: 0.45; cursor: not-allowed; transform: none; box-shadow: none;
  }
  `;
  const el = document.createElement('style');
  el.setAttribute('data-ql', 'button');
  el.textContent = css;
  document.head.appendChild(el);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  withArrow = false,
  disabled = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['ql-btn', `ql-btn--${variant}`, size !== 'md' ? `ql-btn--${size}` : '', className].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, children, withArrow && /*#__PURE__*/React.createElement("span", {
    className: "ql-btn__arrow",
    "aria-hidden": "true"
  }, "\u2192"));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .ql-field { display: flex; flex-direction: column; gap: var(--space-2); }
  .ql-field__label {
    font-family: var(--font-body);
    font-size: var(--text-xs);
    font-weight: var(--weight-medium);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wider);
    color: var(--ink-muted);
  }
  .ql-input {
    font-family: var(--font-body);
    font-size: var(--text-base);
    color: var(--ink);
    background: var(--paper-warm);
    border: 1px solid var(--border-field);
    border-radius: var(--radius-sm);
    padding: var(--space-4) var(--space-6);
    outline: none;
    width: 100%;
    box-sizing: border-box;
    transition: border-color var(--dur-fast) var(--ease-out),
                background var(--dur-fast) var(--ease-out),
                box-shadow var(--dur-fast) var(--ease-out);
  }
  .ql-input::placeholder { color: var(--ink-muted); }
  .ql-input:hover { border-color: var(--line-strong); }
  .ql-input:focus {
    border-color: var(--ink);
    background: var(--paper);
    box-shadow: 0 0 0 3px var(--focus-ring);
  }
  .ql-input:disabled { opacity: 0.5; cursor: not-allowed; }
  .ql-field--invalid .ql-input { border-color: var(--danger); }
  .ql-field--invalid .ql-input:focus { border-color: var(--danger); box-shadow: 0 0 0 3px var(--focus-ring-danger); }
  .ql-field__hint { font-size: var(--text-sm); color: var(--ink-muted); }
  .ql-field--invalid .ql-field__hint { color: var(--danger); }
  textarea.ql-input { resize: vertical; min-height: 96px; line-height: var(--leading-normal); }
  `;
  const el = document.createElement('style');
  el.setAttribute('data-ql', 'input');
  el.textContent = css;
  document.head.appendChild(el);
}
function Input({
  label,
  hint,
  invalid = false,
  multiline = false,
  id,
  className = '',
  ...rest
}) {
  ensureStyles();
  const fieldId = id || (label ? `ql-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: ['ql-field', invalid ? 'ql-field--invalid' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ql-field__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    className: "ql-input"
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    className: "ql-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .ql-card {
    background: var(--surface-card);
    border: 1px solid var(--border-card);
    border-radius: var(--radius);
    padding: var(--space-6);
    box-shadow: var(--shadow-sm);
    transition: transform var(--dur) var(--ease-out),
                box-shadow var(--dur) var(--ease-out),
                border-color var(--dur) var(--ease-out);
  }
  .ql-card--interactive { cursor: pointer; }
  .ql-card--interactive:hover {
    transform: var(--lift);
    box-shadow: var(--shadow-lg);
    border-color: var(--line-strong);
  }
  .ql-card--flush { padding: 0; overflow: hidden; }
  `;
  const el = document.createElement('style');
  el.setAttribute('data-ql', 'card');
  el.textContent = css;
  document.head.appendChild(el);
}
function Card({
  children,
  interactive = false,
  flush = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['ql-card', interactive ? 'ql-card--interactive' : '', flush ? 'ql-card--flush' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let _injected = false;
function ensureStyles() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .ql-productcard {
    background: var(--surface-card);
    border: 1px solid var(--border-card);
    border-radius: var(--radius);
    padding: var(--space-6);
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    transition: transform var(--dur) var(--ease-out),
                box-shadow var(--dur) var(--ease-out),
                border-color var(--dur) var(--ease-out);
  }
  .ql-productcard:hover {
    transform: var(--lift);
    box-shadow: var(--shadow-lg);
    border-color: var(--line-strong);
  }
  .ql-productcard__portrait {
    position: relative; overflow: hidden;
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-4);
    background: var(--paper-deep);
  }
  .ql-productcard__portrait img {
    width: 100%; aspect-ratio: 4 / 5; object-fit: cover; display: block;
    transition: transform var(--dur-slow) var(--ease-out);
  }
  .ql-productcard:hover .ql-productcard__portrait img { transform: scale(1.02); }
  .ql-productcard__no {
    position: absolute; top: var(--space-3); right: var(--space-3);
    font-family: var(--font-display); font-style: italic;
    font-variation-settings: var(--fraunces-caption);
    font-size: var(--text-sm); color: var(--ink-muted);
    background: var(--paper-warm); padding: 2px 8px;
    border-radius: var(--radius-pill); border: 1px solid var(--line-soft);
  }
  .ql-productcard__title {
    font-family: var(--font-display);
    font-size: var(--text-xl); font-weight: var(--weight-medium);
    font-variation-settings: var(--fraunces-text);
    letter-spacing: var(--tracking-tight);
    color: var(--ink); margin: 0 0 var(--space-2);
  }
  .ql-productcard__desc {
    font-size: var(--text-base); color: var(--ink-soft);
    line-height: var(--leading-normal); margin: 0 0 var(--space-4);
  }
  .ql-productcard__footer {
    display: flex; align-items: center; justify-content: space-between;
    padding-top: var(--space-4); border-top: 1px solid var(--border-divider);
  }
  .ql-productcard__tags {
    display: flex; align-items: center; gap: var(--space-2);
    font-size: var(--text-2xs); text-transform: uppercase;
    letter-spacing: var(--tracking-wide); color: var(--ink-muted);
  }
  .ql-productcard__action {
    font-size: var(--text-sm); color: var(--terracotta);
    font-weight: var(--weight-medium); display: inline-flex; align-items: center; gap: 4px;
  }
  .ql-productcard__action span { transition: transform var(--dur) var(--ease-out); }
  .ql-productcard:hover .ql-productcard__action span { transform: translateX(3px); }
  `;
  const el = document.createElement('style');
  el.setAttribute('data-ql', 'productcard');
  el.textContent = css;
  document.head.appendChild(el);
}
function ProductCard({
  title,
  description,
  portrait,
  number,
  category,
  tier = 'everyday',
  action = 'View card',
  className = '',
  ...rest
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("article", _extends({
    className: ['ql-productcard', className].filter(Boolean).join(' ')
  }, rest), portrait && /*#__PURE__*/React.createElement("div", {
    className: "ql-productcard__portrait"
  }, /*#__PURE__*/React.createElement("img", {
    src: portrait,
    alt: title
  }), number && /*#__PURE__*/React.createElement("div", {
    className: "ql-productcard__no"
  }, "\u2116\xA0", number)), /*#__PURE__*/React.createElement("h3", {
    className: "ql-productcard__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "ql-productcard__desc"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "ql-productcard__footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ql-productcard__tags"
  }, category && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, category), /*#__PURE__*/React.createElement("span", null, "\xB7")), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tier: tier
  })), /*#__PURE__*/React.createElement("div", {
    className: "ql-productcard__action"
  }, action, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/App.js
try { (() => {
// SkillDecks — app shell. Plain-JS (no Babel). Manages modal, waitlist scroll, toast.
(function () {
  var e = React.createElement;
  function App() {
    var cards = window.CARDS;
    var os = React.useState(null);
    var open = os[0],
      setOpen = os[1];
    var ts = React.useState(null);
    var toast = ts[0],
      setToast = ts[1];
    function scrollToWaitlist() {
      var el = document.getElementById('waitlist');
      if (el) window.scrollTo({
        top: el.offsetTop - 40,
        behavior: 'smooth'
      });
    }
    function addToDeck(card) {
      setOpen(null);
      setToast(card.title);
      window.clearTimeout(App._t);
      App._t = window.setTimeout(function () {
        setToast(null);
      }, 2600);
    }
    return e('div', {
      className: 'page'
    }, [e(window.Nav, {
      key: 'nav',
      onWaitlist: scrollToWaitlist
    }), e(window.Hero, {
      key: 'hero',
      cards: cards,
      onOpen: setOpen,
      onWaitlist: scrollToWaitlist
    }), e('div', {
      key: 'div',
      className: 'sd-divider'
    }, e('div', {
      className: 'sd-divider-line'
    })), e(window.Featured, {
      key: 'feat',
      cards: cards,
      onOpen: setOpen
    }), e(window.Manifesto, {
      key: 'man'
    }), e(window.TiersSection, {
      key: 'tiers'
    }), e(window.Waitlist, {
      key: 'wait'
    }), e(window.Footer, {
      key: 'foot'
    }), e(window.CardDetail, {
      key: 'modal',
      card: open,
      onClose: function () {
        setOpen(null);
      },
      onAdd: addToDeck
    }), toast ? e('div', {
      key: 'toast',
      className: 'sd-toast'
    }, e('span', null, ['Added ', e('em', {
      key: 'em'
    }, toast), ' to your deck.'])) : null]);
  }
  var rootEl = document.getElementById('root');
  if (rootEl) {
    ReactDOM.createRoot(rootEl).render(e(App));
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/App.js", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/CardDetail.js
try { (() => {
// CardDetail — modal shown when a card is opened. Plain-JS (no Babel).
(function () {
  var e = React.createElement;
  var Q = window.QuillDesignSystem_a37217;
  function CardDetail(props) {
    var card = props.card,
      onClose = props.onClose,
      onAdd = props.onAdd;
    React.useEffect(function () {
      function onKey(ev) {
        if (ev.key === 'Escape') onClose();
      }
      window.addEventListener('keydown', onKey);
      return function () {
        window.removeEventListener('keydown', onKey);
      };
    }, [card, onClose]);
    if (!card) return null;
    return e('div', {
      className: 'sd-modal-scrim',
      onClick: onClose
    }, e('div', {
      className: 'sd-modal',
      onClick: function (ev) {
        ev.stopPropagation();
      }
    }, [e('div', {
      className: 'sd-modal-art',
      key: 'art'
    }, [e('img', {
      key: 'i',
      src: card.portrait,
      alt: card.title
    }), e('span', {
      key: 'n',
      className: 'sd-modal-no'
    }, '\u2116\u00a0' + card.number)]), e('div', {
      className: 'sd-modal-body',
      key: 'body',
      style: {
        position: 'relative'
      }
    }, [e('button', {
      key: 'x',
      className: 'sd-modal-close',
      onClick: onClose,
      'aria-label': 'Close'
    }, '\u00d7'), e('div', {
      key: 'cat',
      className: 'sd-modal-cat'
    }, [e('span', {
      key: 'a'
    }, card.category), e('span', {
      key: 'b'
    }, '\u00b7'), e(Q.Badge, {
      key: 'c',
      tier: card.tier
    })]), e('h2', {
      key: 'title',
      className: 'sd-modal-title'
    }, card.title), e('p', {
      key: 'about',
      className: 'sd-modal-about'
    }, card.about), e('p', {
      key: 'works',
      className: 'sd-modal-works'
    }, 'Works with ' + card.works.join(', ') + '.'), e('div', {
      key: 'act',
      className: 'sd-modal-actions'
    }, [e(Q.Button, {
      key: 'add',
      variant: 'primary',
      withArrow: true,
      onClick: function () {
        onAdd(card);
      }
    }, 'Add to deck'), e(Q.Button, {
      key: 'later',
      variant: 'ghost',
      onClick: onClose
    }, 'Maybe later')]), e('div', {
      key: 'drawn',
      className: 'sd-modal-drawn'
    }, card.drawn)])]));
  }
  window.CardDetail = CardDetail;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/CardDetail.js", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/Sections.js
try { (() => {
// SkillDecks page sections. Plain-JS (no Babel); reads components from the bundle.
(function () {
  var e = React.createElement;
  var Q = window.QuillDesignSystem_a37217;
  function ThemeToggle() {
    var T = window.QuillTheme;
    var st = React.useState(T ? T.effective() : 'light');
    var mode = st[0],
      setMode = st[1];
    React.useEffect(function () {
      if (!T) return;
      setMode(T.effective());
      return T.subscribe(function (m) {
        setMode(m);
      });
    }, []);
    var isDark = mode === 'dark';
    return e('button', {
      className: 'sd-theme-toggle',
      type: 'button',
      'aria-label': isDark ? 'Switch to light theme' : 'Switch to dark theme',
      title: isDark ? 'Dark mode — switch to Light' : 'Light mode — switch to Dark',
      onClick: function () {
        if (T) T.toggle();
      }
    }, [e('span', {
      key: 'm',
      className: 'sd-tt-mark ' + (isDark ? 'sd-tt-mark--moon' : 'sd-tt-mark--sun'),
      'aria-hidden': 'true'
    }), e('span', {
      key: 'l'
    }, isDark ? 'Dark' : 'Light')]);
  }
  function Nav(props) {
    return e('nav', {
      className: 'sd-nav'
    }, [e('div', {
      key: 'w',
      className: 'sd-wordmark',
      onClick: function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, ['Skill', e('em', {
      key: 'e'
    }, 'Decks')]), e('div', {
      key: 'l',
      className: 'sd-nav-links'
    }, [e('a', {
      key: 1,
      href: '#featured'
    }, 'Browse'), e('a', {
      key: 2,
      href: '#tiers'
    }, 'Collections'), e('a', {
      key: 3,
      href: '#manifesto'
    }, 'Manifesto'), e('a', {
      key: 4,
      href: '#'
    }, 'Journal')]), e('div', {
      key: 'r',
      className: 'sd-nav-right'
    }, [e(ThemeToggle, {
      key: 'tt'
    }), e(Q.Button, {
      key: 'c',
      variant: 'secondary',
      size: 'sm',
      onClick: props.onWaitlist
    }, 'Start your collection')])]);
  }
  function HeroCard(s, posClass, onOpen) {
    return e('div', {
      key: s.id,
      className: 'sd-hero-card ' + posClass,
      onClick: function () {
        onOpen(s);
      }
    }, [e('img', {
      key: 'i',
      src: s.portrait,
      alt: s.title
    }), e('div', {
      key: 'l',
      className: 'sd-hero-card-label'
    }, s.title), e('div', {
      key: 'm',
      className: 'sd-hero-card-meta'
    }, [e('span', {
      key: 'n'
    }, '\u2116 ' + s.number), e(Q.Badge, {
      key: 'b',
      tier: s.tier
    })])]);
  }
  function Hero(props) {
    var cards = props.cards,
      onOpen = props.onOpen;
    var order = [cards[2], cards[0], cards[1]];
    var pos = ['sd-hc-1', 'sd-hc-2', 'sd-hc-3'];
    return e('section', {
      className: 'sd-hero'
    }, [e('div', {
      key: 'copy'
    }, [e(Q.Eyebrow, {
      key: 'eb'
    }, 'Issue \u2116001 \u00b7 Spring Collection'), e('h1', {
      key: 'h',
      style: {
        marginTop: 'var(--space-6)'
      }
    }, ['Tools,', e('br', {
      key: 'br'
    }), 'made by ', e('em', {
      key: 'em'
    }, 'hand'), '.']), e('p', {
      key: 'p',
      className: 'lead'
    }, 'A curated collection of agent tools for the work you actually do. Cross-platform. Hand-picked. Made to last longer than the model that runs them.'), e(Q.Button, {
      key: 'cta',
      variant: 'primary',
      withArrow: true,
      onClick: props.onWaitlist
    }, 'Start your collection'), e('div', {
      key: 'meta',
      className: 'sd-hero-meta'
    }, [e('span', {
      key: 1
    }, 'Works with Claude, Codex, Cursor, Gemini'), e('span', {
      key: 2
    }, '\u00b7 New drops every week')])]), e('div', {
      key: 'cards',
      className: 'sd-hero-cards'
    }, order.map(function (s, i) {
      return HeroCard(s, pos[i], onOpen);
    }))]);
  }
  function Featured(props) {
    var cards = props.cards,
      onOpen = props.onOpen;
    var state = React.useState('all');
    var filter = state[0],
      setFilter = state[1];
    var filters = ['all', 'everyday', 'featured', 'signed', 'heirloom'];
    var shown = filter === 'all' ? cards : cards.filter(function (s) {
      return s.tier === filter;
    });
    return e('section', {
      className: 'sd-featured',
      id: 'featured'
    }, [e('div', {
      key: 'head',
      className: 'sd-section-head'
    }, [e('div', {
      key: 'l'
    }, [e('div', {
      key: 'lab',
      className: 'sd-section-label'
    }, 'The First Drawing'), e('h2', {
      key: 'tit',
      className: 'sd-section-title'
    }, ['Three to start ', e('em', {
      key: 'em'
    }, 'your deck')])]), e('div', {
      key: 'cap',
      className: 'sd-section-caption'
    }, ['Hand-drawn for', e('br', {
      key: 'br'
    }), 'the work ahead'])]), e('div', {
      key: 'filters',
      className: 'sd-filters'
    }, filters.map(function (f) {
      return e('button', {
        key: f,
        className: 'sd-chip' + (filter === f ? ' is-active' : ''),
        onClick: function () {
          setFilter(f);
        }
      }, f === 'all' ? 'All cards' : f[0].toUpperCase() + f.slice(1));
    })), e('div', {
      key: 'grid',
      className: 'sd-cards-grid'
    }, shown.map(function (s) {
      return e(Q.ProductCard, {
        key: s.id,
        title: s.title,
        description: s.blurb,
        portrait: s.portrait,
        number: s.number,
        category: s.category,
        tier: s.tier,
        onClick: function () {
          onOpen(s);
        }
      });
    })), shown.length === 0 ? e('p', {
      key: 'empty',
      style: {
        color: 'var(--ink-muted)',
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontVariationSettings: 'var(--fraunces-caption)'
      }
    }, 'No cards in this collection yet — new drops every week.') : null]);
  }
  function Manifesto() {
    return e('section', {
      className: 'sd-manifesto',
      id: 'manifesto'
    }, e('div', {
      className: 'sd-manifesto-inner'
    }, [e('div', {
      key: 'm',
      className: 'sd-manifesto-mark'
    }, '\u00b6'), e('p', {
      key: 'p'
    }, ['We believe an agent is only as good as the ', e('em', {
      key: 'em'
    }, 'tools'), ' it brings to the table. So we make them slowly, keep them small, and draw each one by hand — so the work feels like it was made for the work.']), e('div', {
      key: 's',
      className: 'sd-manifesto-sig'
    }, e('span', null, 'The SkillDecks Collection'))]));
  }
  function TiersSection() {
    var tiers = window.TIERS;
    var fg = {
      everyday: 'var(--tier-everyday-fg)',
      featured: 'var(--tier-featured-fg)',
      signed: 'var(--tier-signed-fg)',
      heirloom: 'var(--tier-heirloom-fg)'
    };
    var bg = {
      everyday: 'var(--tier-everyday-bg)',
      featured: 'var(--tier-featured-bg)',
      signed: 'var(--tier-signed-bg)',
      heirloom: 'var(--tier-heirloom-bg)'
    };
    return e('section', {
      className: 'sd-tiers',
      id: 'tiers'
    }, [e('div', {
      key: 'head',
      className: 'sd-section-head'
    }, [e('div', {
      key: 'l'
    }, [e('div', {
      key: 'lab',
      className: 'sd-section-label'
    }, 'Anatomy of a Deck'), e('h2', {
      key: 'tit',
      className: 'sd-section-title'
    }, ['Four kinds of ', e('em', {
      key: 'em'
    }, 'card')])]), e('div', {
      key: 'cap',
      className: 'sd-section-caption'
    }, ['From everyday staples', e('br', {
      key: 'br'
    }), 'to numbered heirlooms'])]), e('div', {
      key: 'grid',
      className: 'sd-tiers-grid'
    }, tiers.map(function (t) {
      return e('div', {
        className: 'sd-tier',
        key: t.tier
      }, [e('div', {
        key: 'm',
        className: 'sd-tier-mark',
        style: {
          background: bg[t.tier],
          color: fg[t.tier]
        }
      }, t.mark), e('div', {
        key: 'n',
        className: 'sd-tier-name'
      }, t.name), e('div', {
        key: 'd',
        className: 'sd-tier-desc'
      }, t.desc)]);
    }))]);
  }
  function Waitlist() {
    var es = React.useState('');
    var email = es[0],
      setEmail = es[1];
    var ds = React.useState(false);
    var done = ds[0],
      setDone = ds[1];
    function submit(ev) {
      ev.preventDefault();
      if (email.trim()) setDone(true);
    }
    return e('section', {
      className: 'sd-waitlist',
      id: 'waitlist'
    }, [e('h2', {
      key: 'h'
    }, ['Start your ', e('em', {
      key: 'em'
    }, 'collection'), '.']), e('p', {
      key: 'sub',
      className: 'sub'
    }, "The first drawing goes out soon. Leave a name on the list — we'll send a deck when it's ready."), done ? e('div', {
      key: 'done',
      className: 'sd-waitlist-done'
    }, "You're on the list. See you at the first drawing.") : e('form', {
      key: 'form',
      className: 'sd-waitlist-form',
      onSubmit: submit
    }, [e(Q.Input, {
      key: 'in',
      type: 'email',
      placeholder: 'your@email.com',
      value: email,
      onChange: function (ev) {
        setEmail(ev.target.value);
      },
      required: true
    }), e(Q.Button, {
      key: 'btn',
      variant: 'accent',
      type: 'submit'
    }, 'Save me a deck')]), !done ? e('div', {
      key: 'note',
      className: 'sd-waitlist-note'
    }, 'No spam. Just drawings.') : null]);
  }
  function Footer() {
    var cols = [{
      h: 'Browse',
      items: ['All Cards', 'Decks', 'New Drops', 'Heirlooms']
    }, {
      h: 'Works With',
      items: ['Claude', 'Codex', 'Cursor', 'Gemini']
    }, {
      h: 'SkillDecks',
      items: ['Journal', 'For Teams', 'Contact', 'Terms']
    }];
    return e('footer', {
      className: 'sd-footer'
    }, [e('div', {
      key: 'inner',
      className: 'sd-footer-inner'
    }, [e('div', {
      key: 'brand',
      className: 'sd-footer-brand'
    }, [e('h3', {
      key: 'h'
    }, ['Skill', e('em', {
      key: 'em'
    }, 'Decks')]), e('p', {
      key: 'p'
    }, 'A curated collection of agent tools for designers, PMs, and the work you actually do.')])].concat(cols.map(function (c) {
      return e('div', {
        key: c.h
      }, [e('h4', {
        key: 'h'
      }, c.h), e('ul', {
        key: 'u'
      }, c.items.map(function (i) {
        return e('li', {
          key: i
        }, e('a', {
          href: '#'
        }, i));
      }))]);
    }))), e('div', {
      key: 'bottom',
      className: 'sd-footer-bottom'
    }, [e('span', {
      key: 1
    }, '\u00a9 2026 SkillDecks \u00b7 Printed with care'), e('span', {
      key: 2
    }, 'Tools, made by hand.')])]);
  }
  Object.assign(window, {
    Nav: Nav,
    Hero: Hero,
    Featured: Featured,
    Manifesto: Manifesto,
    TiersSection: TiersSection,
    Waitlist: Waitlist,
    Footer: Footer
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/Sections.js", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/data.js
try { (() => {
// SkillDecks catalog — the three hand-drawn cards from the source collection.
window.CARDS = [{
  id: 'critique-companion',
  number: '001',
  title: 'Critique Companion',
  category: 'Design',
  tier: 'heirloom',
  portrait: '../../assets/portraits/critique-companion.jpg',
  blurb: "The thoughtful reviewer who sees what's working before naming what isn't. For design crits, doc reviews, and reading between your own lines.",
  about: "Critique Companion reads your work the way a generous senior would — it starts with what's already right, then names the one change that matters most. It holds the brief in mind, resists nitpicking, and always leaves you knowing what to do next.",
  works: ['Claude', 'Codex', 'Cursor', 'Gemini'],
  drawn: 'Drawn Spring 2026 · individually numbered'
}, {
  id: 'spec-sharpener',
  number: '002',
  title: 'Spec Sharpener',
  category: 'Product',
  tier: 'featured',
  portrait: '../../assets/portraits/spec-sharpener.jpg',
  blurb: 'Turns the vague product idea into the spec that gets built. Names the missing pieces, stress-tests the rationale, keeps the point up front.',
  about: 'Spec Sharpener takes a half-formed idea and returns a spec an engineer can start on Monday. It surfaces the open questions you were avoiding, pressure-tests the why, and keeps the one-line point at the very top where it belongs.',
  works: ['Claude', 'Codex', 'Cursor', 'Gemini'],
  drawn: "Editor's pick · rotated this season"
}, {
  id: 'research-synthesist',
  number: '003',
  title: 'Research Synthesist',
  category: 'Research',
  tier: 'signed',
  portrait: '../../assets/portraits/research-synthesist.jpg',
  blurb: 'Finds the pattern under the pile. Reads interview notes, survey data, and session clips to surface what matters and separates signal from story.',
  about: 'Research Synthesist reads the whole pile — notes, transcripts, survey rows — and tells you what is actually true across them. It separates the vivid anecdote from the real pattern, and cites where each finding came from.',
  works: ['Claude', 'Codex', 'Cursor', 'Gemini'],
  drawn: 'Signed & dated · drawn with extra care'
}];
window.TIERS = [{
  mark: 'E',
  name: 'Everyday',
  tier: 'everyday',
  desc: "The staples. Reliable, approachable, always free. The cards you'll reach for on a Monday morning."
}, {
  mark: 'F',
  name: 'Featured',
  tier: 'featured',
  desc: "Editor's picks, rotated regularly. What's worth your attention this season."
}, {
  mark: 'S',
  name: 'Signed',
  tier: 'signed',
  desc: 'Drawn with extra care. Attributed, dated, and built for a particular kind of craft.'
}, {
  mark: 'H',
  name: 'Heirloom',
  tier: 'heirloom',
  desc: 'Limited runs, individually numbered. Meant to be kept, not just used.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProductCard = __ds_scope.ProductCard;

})();
