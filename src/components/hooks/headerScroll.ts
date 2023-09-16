document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('header')
	if (!header) {
		console.warn('Header element not found in the DOM.')
		return
	}

	let isHeaderHidden = false
	let lastScrollY = 0

	window.addEventListener('scroll', () => {
		const scrollY = window.scrollY
		const scrollDown = scrollY > lastScrollY
		const scrollPercentage =
			(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

		if ((scrollDown && scrollPercentage > 40) || (!scrollDown && isHeaderHidden)) {
			isHeaderHidden = scrollDown
			header.style.transform = `translateY(${isHeaderHidden ? '-100%' : '0'})`
			header.style.transition = 'transform 0.3s ease-in-out'
		}

		lastScrollY = scrollY
	})
})
