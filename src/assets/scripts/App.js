import EventBus from './utils/EventBus'
import IE11PolyFills from './utils/IE11PolyFills'
import { throttle, debounce } from 'throttle-debounce'
import SplitText from '../../assets/scripts/utils/SplitText'

export default class App {

  /**
    * Loads the page
    * then calls `this.start()` when DOM is ready
    */
    constructor() {
        this.iePolyfills = new IE11PolyFills()
        this.resize = this.resize.bind(this)
        this.scroll = this.scroll.bind(this)
        this.update = this.update.bind(this)

        this.raf = null

        this.resizeDebounced = debounce(100, this.resize)
        this.resizeThrottled = throttle(150, this.resize)
        this.scrollDebounced = debounce(100, this.scroll)
        this.scrollThrottled = throttle(50, this.scroll)

        this.checkMobile()
        this.start()
    }

  /**
    * Inits everything that is app-wide
    * ie: Menu, Emergence, scroll / resize events...
    *
    * @returns {void}
    */
    start() {
        this.events()
    }

    checkMobile() {
      App.isMobile && document.body.classList.remove('isMobile')
      App.isMobile && document.documentElement.classList.remove('isMobile')
      /* eslint-disable */
      App.isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
      App.isMobile && document.body.classList.add('isMobile')
      App.isMobile && document.documentElement.classList.add('isMobile')
    }

    resize() {
        EventBus.dispatch('resize')
    }

    scroll() {
        this.isScrolling = true;

        window.clearTimeout( this.scrollTimeout );
        this.scrollTimeout = setTimeout(() => {
            this.isScrolling = false;
		}, 66);
		
    }

	update() {
		this.currentRenderer.update()
		this.raf = requestAnimationFrame(this.update)
	}

    events() {
        window.addEventListener('resize', this.resizeThrottled)
        window.addEventListener('resize', this.resizeDebounced)
        window.addEventListener('resize', this.resize, false)
        window.addEventListener('scroll', this.scrollThrottled)
        window.addEventListener('scroll', this.scroll, { passive: true })
        window.addEventListener('orientationchange', this.resize)
    }
}
