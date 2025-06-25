(function () {
  applyStyles();

  function applyStyles() {
    const styleEl = document.createElement("style");
    styleEl.textContent = `
      .chat-container {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(chrome-extension://${chrome.runtime.id}/images/bg-1.gif) !important;
        background-blend-mode: multiply;
        background-color: unset !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
      }

      .pin-message-container {
        background-color: rgba(0,0,0,.4) !important;
      }

      .chat-container. > div > .border-Neutral-Primary-200 {
        background-color: rgba(0,0,0,.4) !important;
      }

      .h-\[32px\].w-\[32px\]:hover {
        background-color: rgba(0,0,0,.4) !important;
      }
    `;
    document.head.appendChild(styleEl);
  }
})();
