import { raf, clamp, keysGenerator } from '@emotionagency/utils'
import gsap from 'gsap'
import emitter from 'tiny-emitter/instance'

const ease = 'power1.inOut'

export class SectionRevealer {
  isRendering = false
  $sc: HTMLElement
  eventKey: string

  constructor(readonly $el: HTMLElement) {
    this.$sc = document.querySelector('#scroll-container')
    this.eventKey = keysGenerator(8)
  }

  init() {
    this.compute = this.compute.bind(this)

    raf.on(this.compute)
  }

  get $wrapper(): HTMLElement {
    return this.$el.closest('[data-reveal-wrapper]') as HTMLElement
  }

  get $prevSection(): HTMLElement {
    return this.$wrapper.previousSibling as HTMLElement
  }

  onUpdate(cb: (...args) => any) {
    emitter.on(`${this.eventKey}:update`, (percent: number) => {
      cb(clamp(percent, 0, 100))
    })
  }

  compute() {
    const b = this.$prevSection.getBoundingClientRect()

    // const offset = $el.dataset.offset * b.height * (b.bottom * 0.004)
    const offset = +this.$el.dataset.offset * b.height
    const percent = (1 - b.bottom / window.innerHeight) * 100

    if (percent >= 50) {
      this.inAnimate(this.$el)
    } else {
      this.outAnimate(this.$el)
    }

    this.$wrapper.style.height = this.$el.offsetHeight + 'px'

    if (b.bottom > offset && b.top < 200) {
      this.$el.style.position = 'fixed'
      this.$el.style.top = offset + 'px'
      // this.$el.style.zIndex = '-1'
      this.$el.style.width = '100%'
      this.$el.classList.add('js-fixed')
    } else {
      this.$el.style.position = 'relative'
      this.$el.style.top = '0px'
      this.$el.classList.remove('js-fixed')
    }

    emitter.emit(`${this.eventKey}:update`, percent)
  }

  inAnimate($el) {
    if (!$el.classList.contains('animated-in')) {
      // console.log('animated in')
      const $img = $el.querySelector('[data-a-bg]')
      const $mask = $el.querySelector('[data-a-mask]')

      gsap.to($img, { duration: 1.2, scale: 1, ease, overwrite: true })
      gsap.to($mask, {
        duration: 1.2,
        opacity: 1,
        ease,
        overwrite: true,
        delay: 1,
      })
      $el.classList.add('animated-in')
      $el.classList.remove('animated-out')
    }
  }

  outAnimate($el) {
    if (!$el.classList.contains('animated-out')) {
      // console.log('animated out')

      const $img = $el.querySelector('[data-a-bg]')
      const $mask = $el.querySelector('[data-a-mask]')
      gsap.to($img, { duration: 1.2, scale: 1.1, ease, overwrite: true })
      gsap.to($mask, { duration: 1.2, opacity: 0, ease, overwrite: true })
      $el.classList.remove('animated-in')
      $el.classList.add('animated-out')
    }
  }

  destroy() {
    raf.off(this.compute)
  }
}
