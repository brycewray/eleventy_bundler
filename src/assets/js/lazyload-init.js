import LazyLoad from 'vanilla-lazyload'

const lazyLoadOptions = {
  use_native: true,
  threshold: 150, // default: 300
}

const createLazyLoadInstance = () => {
	return new LazyLoad(lazyLoadOptions)
}

export default () => {
	document.addEventListener("DOMContentLoaded", createLazyLoadInstance)
}