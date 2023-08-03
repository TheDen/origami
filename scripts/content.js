function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

waitForElm('[aria-label="Share Tweet"]').then((elm) => {
  var allSpans = document.getElementsByTagName("span");
  for (let i = 0; i < allSpans.length; i++) {
    if (allSpans[i].innerText == "Ad") {
      allSpans[
        i
      ].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
    }
    if (allSpans[i].innerText == "Promoted Tweet") {
      allSpans[i].remove();
    }
  }
});
