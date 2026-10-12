// ==========================================================================
// WCphotography — site scripts
// ==========================================================================

// --- Business settings: edit these in one place -------------------------
const SITE = {
  // Create a free form at https://formspree.io and paste its ID here
  // (the part after /f/ in the form URL). Until then the form opens the
  // visitor's email app instead.
  formspreeId: "YOUR_FORMSPREE_ID",
  email: "hello@wcphotography.com",
};

// --- Mobile nav ----------------------------------------------------------
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

// --- Footer year ---------------------------------------------------------
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// --- Portfolio filters ---------------------------------------------------
const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    items.forEach((item) => {
      item.classList.toggle("hidden", f !== "all" && item.dataset.category !== f);
    });
  });
});

// Pre-select a filter from the URL, e.g. portfolio.html#aerial
if (filterBtns.length && location.hash) {
  const match = document.querySelector(`.filter-btn[data-filter="${location.hash.slice(1)}"]`);
  if (match) match.click();
}

// --- Lightbox ------------------------------------------------------------
const lightbox = document.querySelector(".lightbox");
if (lightbox) {
  const lbImg = lightbox.querySelector("img");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (!img) return; // placeholder tile, nothing to enlarge
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lightbox.classList.add("open");
    });
  });
  const close = () => lightbox.classList.remove("open");
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lbImg) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

// --- Pre-fill service on contact form from ?service=... -----------------
const serviceSelect = document.querySelector("#service");
if (serviceSelect) {
  const s = new URLSearchParams(location.search).get("service");
  if (s && [...serviceSelect.options].some((o) => o.value === s)) serviceSelect.value = s;
}

// --- Contact form --------------------------------------------------------
const form = document.querySelector("#contact-form");
if (form) {
  const status = form.querySelector(".form-status");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    // No Formspree yet: fall back to the visitor's email app
    if (!SITE.formspreeId || SITE.formspreeId.startsWith("YOUR_")) {
      const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
      location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        "New inquiry from " + (data.get("name") || "website")
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    status.className = "form-status";
    status.textContent = "Sending…";
    try {
      const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      form.reset();
      status.classList.add("ok");
      status.textContent = "Thanks! We got your message and will reply within 1 business day.";
    } catch {
      status.classList.add("err");
      status.textContent = `Something went wrong. Please email us directly at ${SITE.email}.`;
    }
  });
}
