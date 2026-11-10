/* Launch sale countdown for eidosedgestudio.com (home, Handy and bundle pages).

   SALE_END must match the expiry of the MXN38 code on Gumroad: 17 Nov 2026, 00:05 GMT-8 = 08:05 UTC (13:35 India time).
   It is written in UTC (the Z), so the sale ends at the same moment for every visitor. Change only this line to move it.

   On the page:
   - [data-countdown]          shows the time left ("6d 23h 59m 59s"); add data-countdown="blocks" for the big hero style.
   - [data-sale-only]          is hidden once the sale has ended (banner, timers, "launch price" lines).
   - [data-regular="..."]      swaps its text for the regular price or wording once the sale has ended.
   - links containing /MXN38   lose the code once the sale has ended, so checkout shows the regular price.
   When the sale is over for good, also update the prices written in the HTML itself. */
var SALE_END = '2026-11-17T08:05:00Z';

(function () {
  var end = new Date(SALE_END).getTime();
  var timers = document.querySelectorAll('[data-countdown]');

  function two(n) { return (n < 10 ? '0' : '') + n; }

  function endSale() {
    document.documentElement.classList.add('sale-ended');
    document.querySelectorAll('[data-sale-only]').forEach(function (el) { el.style.display = 'none'; });
    document.querySelectorAll('[data-regular]').forEach(function (el) { el.textContent = el.getAttribute('data-regular'); });
    document.querySelectorAll('a[href*="/MXN38"]').forEach(function (a) { a.href = a.href.replace('/MXN38', ''); });
  }

  function tick() {
    var left = end - Date.now();
    if (left <= 0) { endSale(); return false; }
    var s = Math.floor(left / 1000);
    var d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
    timers.forEach(function (el) {
      if (el.getAttribute('data-countdown') === 'blocks') {
        el.innerHTML = '<span><b>' + d + '</b><i>days</i></span><span><b>' + two(h) + '</b><i>hrs</i></span>' +
                       '<span><b>' + two(m) + '</b><i>min</i></span><span><b>' + two(sec) + '</b><i>sec</i></span>';
      } else {
        el.textContent = d + 'd ' + two(h) + 'h ' + two(m) + 'm ' + two(sec) + 's';
      }
    });
    return true;
  }

  if (isNaN(end)) return;
  if (tick()) {
    var timer = setInterval(function () { if (!tick()) clearInterval(timer); }, 1000);
  }
})();
