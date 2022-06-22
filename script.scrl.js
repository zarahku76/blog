function animate(elem, style, unit, from, to, time, prop) {
	if (!elem) {
		return;
	}
	var start = new Date().getTime(),
		timer = setInterval(function () {
			var step = Math.min(1, (new Date().getTime() - start) / time);
			if (prop) {
				elem[style] = from + step * (to - from) + unit;
			} else {
				elem.style[style] = from + step * (to - from) + unit;
			}
			if (step === 1) {
				clearInterval(timer);
			}
		}, 0);
	if (prop) {
		elem[style] = from + unit;
	} else {
		elem.style[style] = from + unit;
	}
}
document.querySelectorAll('a[href^="#"][class="scrl"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		var target = document.getElementById(this.getAttribute('href').replace('#',''));
		var doc = document.documentElement;
		var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
		animate(document.scrollingElement || document.documentElement, "scrollTop", "", top, target.offsetTop, 500, true);
	});
});
