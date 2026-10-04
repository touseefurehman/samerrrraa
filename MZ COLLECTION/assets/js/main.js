/* =========================================================
   MZ Collection — shared scripts
   ========================================================= */

// Put your WhatsApp number here (country code, digits only, e.g. "923001234567").
// When set, every "Order Now" button opens WhatsApp with the product name filled in.
// When empty, the buttons scroll to the Contact section instead.
const WHATSAPP_NUMBER = "";

document.addEventListener("DOMContentLoaded", () => {
  // ---- Mobile menu ----
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open);
    });

    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", false);
      })
    );
  }

  // ---- Order buttons ----
  document.querySelectorAll("[data-order]").forEach((btn) => {
    const product = btn.dataset.order;

    if (WHATSAPP_NUMBER) {
      const text = product
        ? `Hi MZ Collection! I'd like to order the ${product}.`
        : "Hi MZ Collection! I'd like to place an order.";
      btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      btn.target = "_blank";
      btn.rel = "noopener";
    } else if (!product) {
      // The contact section's own WhatsApp button has nothing to link to yet.
      btn.hidden = true;
    } else {
      btn.href = "#contact";
    }
  });

  // ---- Lightbox for product images ----
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&times;</button><img alt="">';
  document.body.appendChild(lightbox);
  const lightboxImg = lightbox.querySelector("img");

  const closeLightbox = () => lightbox.classList.remove("open");

  document.querySelectorAll(".product-card .media img").forEach((img) =>
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("open");
    })
  );

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // ---- Reveal on scroll ----
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  // ---- Footer year ----
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
