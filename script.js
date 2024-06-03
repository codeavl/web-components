class CurrentDate extends HTMLElement {
  connectedCallback() {
    const now = new Date();
    this.textContent = `current time: ${now.toLocaleDateString()}`;
  }
}

customElements.define('current-date', CurrentDate);
