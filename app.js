(() => {
  "use strict";
  const menuButton = document.querySelector("[data-menu-toggle]");
  const sidebar = document.getElementById("sidebar");
  if (menuButton && sidebar) {
    menuButton.addEventListener("click", () => {
      const isOpen = sidebar.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const feedbackForm = document.getElementById("feedback-form");
  const feedbackStatus = document.getElementById("feedback-status");
  if (feedbackForm && feedbackStatus) {
    feedbackForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!feedbackForm.checkValidity()) {
        feedbackForm.reportValidity();
        return;
      }
      feedbackStatus.textContent = "Thank you! Your feedback has been validated in this demo.";
      feedbackForm.reset();
    });
  }

  const modal = document.getElementById("report-modal");
  const openModalButton = document.querySelector("[data-open-modal]");
  const reportForm = document.getElementById("report-form");
  const reportTitle = document.getElementById("report-title");
  const modalStatus = document.getElementById("modal-status");
  if (modal && openModalButton) {
    openModalButton.addEventListener("click", () => {
      if (typeof modal.showModal === "function") {
        modal.showModal();
        window.setTimeout(() => reportTitle && reportTitle.focus(), 0);
      } else {
        window.alert("Your browser does not support the dialog element. Please use a modern browser.");
      }
    });
    modal.addEventListener("close", () => openModalButton.focus());
  }
  if (reportForm && modal && modalStatus) {
    reportForm.addEventListener("submit", (event) => {
      const submitter = event.submitter;
      if (submitter && submitter.id === "create-report") {
        event.preventDefault();
        if (!reportForm.checkValidity()) {
          reportForm.reportValidity();
          return;
        }
        modalStatus.textContent = "Report draft created locally for this demo.";
        reportForm.reset();
        window.setTimeout(() => {
          if (modal.open) modal.close("success");
          modalStatus.textContent = "";
        }, 900);
      }
    });
  }
})();