(function () {
  if (!document.querySelector('script[src="https://analytics.verralink.app/script.js"]')) {
    const script = document.createElement("script");
    script.src = "https://analytics.verralink.app/script.js";
    script.async = true;
    script.dataset.websiteId = "caac8aa7-7b9d-47ee-9443-e3c636952ff8";

    document.body.appendChild(script);
  }
})();