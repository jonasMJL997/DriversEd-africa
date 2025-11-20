(() => {
  const img = document.querySelector("#certificateImage");
  const srcLabel = document.querySelector("#certificateSource");
  const errorNode = document.querySelector(".certificate-panel__error");

  if (!img) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const customSrc = params.get("img");

  const setSourceLabel = (value) => {
    if (srcLabel) {
      srcLabel.textContent = value;
    }
  };

  const showError = (message) => {
    if (errorNode) {
      errorNode.textContent = message;
    }
  };

  const clearError = () => showError("");

  if (customSrc) {
    const decoded = decodeURIComponent(customSrc);
    img.src = decoded;
    setSourceLabel(decoded);
  }

  img.addEventListener("load", () => {
    clearError();
  });

  img.addEventListener("error", () => {
    showError(
      "We couldn't load the certificate image. Please verify the link or file path."
    );
  });
})();

