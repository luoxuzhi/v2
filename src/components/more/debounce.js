export default (fn, delay = 200) => {
	let timer
	return (...args) => {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(this, args)
		}, delay)
	}
}
