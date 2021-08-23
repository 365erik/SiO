const tobButton = () => {
		const button = document.getElementById("ToTop");
		if (button) {
				button.addEventListener('click', (e) => {
						e.preventDefault();
						window.scrollTo(0, 0);
				});
		} else {
				return;
		}

		let lastKnownScrollPosition = 0;
		let isShowing = false;
		let ticking = false;

		const toggleButton = () => {
				if (lastKnownScrollPosition > window.innerHeight) {
						if (!isShowing) {
								button.classList.add("show");
								isShowing = true;
						}
				} else if (isShowing) {
						isShowing = false;
						setTimeout(() => {
								button.classList.remove("show")
						}, 200);
				}
		};

		document.addEventListener("scroll", (e) => {
				lastKnownScrollPosition = window.scrollY;
				if (!ticking) {
						window.requestAnimationFrame(() => {
								toggleButton();
								ticking = false;
						});
						ticking = true;
				}
		});

}

export default tobButton;
