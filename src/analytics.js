const analytics = () => {
	const el = document.querySelector(".main-header")
	let countClicks = 0;
	el.addEventListener('click', () => {
		countClicks++;
		console.log('Number of clicks:',countClicks)
	})
}
document.addEventListener("load", () => analytics())
