import { raf } from '@emotionagency/utils'

export default class NavbarPos {
  $sc = document.querySelector('#scroll-container')
  hovered = false

  constructor($el) {
    this.$navbar = $el
    this.mouseFunc = e => {
      this.mouseHandler(e)
    }
  }

  init() {
    this.scrollPos = 0
    this.scrollNav = this.scrollNav.bind(this)
    raf.on(this.scrollNav)
  }

  mouseHandler(e) {
    if (e.screenY <= 300) {
      document.body.classList.remove('nav-hidden')
      this.hovered = true
    } else {
      this.hovered = false
      document.body.classList.add('nav-hidden')
    }
  }

  scrollNav() {
    this.top = -this.$sc.scrollTop

    if (this.hovered) {
      return
    }

    this.isVisible && this.addVisibility()

    this.isHidden && this.removeVisibility()

    this.scrollPos = -this.$sc.scrollTop

    this.isBg ? this.removeBg() : this.addBg()
  }

  get isHidden() {
    return this.top < this.scrollPos && this.scrollPos < 0 && -this.top >= 0
  }

  get isVisible() {
    return this.top > this.scrollPos || this.isFixed
  }

  get isFixed() {
    return window.smoothScroll ? window.smoothScroll.isFixed : false
  }

  get isBg() {
    return -this.scrollPos <= window.innerHeight * 0.1
  }

  addVisibility() {
    document.body.classList.remove('nav-hidden')
    document.removeEventListener('mousemove', this.mouseFunc)
  }

  removeVisibility() {
    document.body.classList.add('nav-hidden')
    document.addEventListener('mousemove', this.mouseFunc)
  }

  addBg() {
    this.$navbar.classList.add('with-bg')
  }

  removeBg() {
    this.$navbar.classList.remove('with-bg')
  }

  destroy() {
    this.scrollPos = 0
    raf.off(this.scrollNav)
  }
}
