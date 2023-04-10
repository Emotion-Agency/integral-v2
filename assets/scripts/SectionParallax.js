import { raf } from '@emotionagency/utils'
import gsap from 'gsap'

const ease = 'power1.inOut'

export class SectionParallax {
  isRendering = false

  constructor($els) {
    this.$els = [...$els]

    this.$sc = document.querySelector('#scroll-container')
  }

  init() {
    this.compute = this.compute.bind(this)

    raf.on(this.compute)
  }

  get $wrapper() {
    return this.$els.map($el => {
      return $el.closest('[data-parallax-wrapper]')
    })
  }

  get $prevSection() {
    return this.$wrapper.map($el => {
      return $el.previousSibling
    })
  }

  compute() {
    this.$els.forEach(($el, i) => {
      const b = this.$prevSection[i].getBoundingClientRect()
      // const offset = $el.dataset.offset * b.height * (b.bottom * 0.004)
      const offset = $el.dataset.offset * b.height
      const percent = (1 - b.bottom / window.innerHeight) * 100

      if (percent >= 50) {
        this.inAnimate($el)
      } else {
        this.outAnimate($el)
      }

      this.$wrapper[i].style.height = $el.offsetHeight + 'px'

      if (b.bottom > offset && b.top < 200) {
        $el.style.position = 'fixed'
        $el.style.top = offset + 'px'
        $el.style.zIndex = -i - 1
        $el.style.width = '100%'
        $el.classList.add('js-fixed')
      } else {
        $el.style.position = 'relative'
        $el.style.top = '0px'
        $el.classList.remove('js-fixed')
      }
    })
  }

  inAnimate($el) {
    if (!$el.classList.contains('animated-in')) {
      console.log('animated in')
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
      console.log('animated out')

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
