# Chrome Extension Manifest V3 CSP Rules

- **Context**: When generating or modifying HTML strings, templates, or files for a Chrome Extension (Manifest V3).
- **Constraint**: NEVER use inline event handlers (such as `onclick="functionName()"`, `onchange="..."`, etc.) directly inside HTML elements.
- **Implementation**: ALWAYS use Event Delegation. Attach an `addEventListener` (e.g., `click`, `change`) to a static parent container and check `e.target.closest('.class-name')` or read `data-*` attributes to handle the event.
- **Rationale**: Chrome's Content Security Policy (CSP) for Manifest V3 strictly forbids the execution of inline JavaScript. Inline handlers will be silently blocked by the browser.
