function removeAds() {
  let allSpans = document.getElementsByTagName("span");
  if (typeof allSpans !== "undefined") {
    for (let i = 0; i < allSpans.length; i++) {
      if (typeof allSpans[i].innerText !== "undefined") {
        if (allSpans[i].innerText == "Ad") {
          allSpans[
            i
          ].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        }
        if (allSpans[i].innerText == "Promoted Tweet") {
          allSpans[i].remove();
        }
      }
    }
  }
}

setInterval(function () {
  removeAds();
}, 1500);
