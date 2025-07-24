// Scroll to top on reload
window.addEventListener("load", () => {
  setTimeout(() => window.scrollTo(0, 0), 10);
});

document.addEventListener("DOMContentLoaded", () => {
  const sendButton = document.querySelector(".contact-form button");
  const form = document.querySelector(".contact-form");

  if (sendButton && form) {
    sendButton.addEventListener("click", (e) => {
      e.preventDefault();
      const name = form.querySelector("input[name='name']")?.value.trim();
      const email = form.querySelector("input[name='email']")?.value.trim();
      const message = form.querySelector("textarea[name='message']")?.value.trim();

      if (name && email && message) {
        alert("Message sent successfully! (Note: Demo only)");
        form.reset();
      } else {
        alert("Please fill out all fields before sending your message.");
      }
    });
  }
});
