import { raf, clamp } from '@emotionagency/utils'
import { TinyEmitter } from 'tiny-emitter'

export class SectionRevealer {
  isRendering = false
  $sc: HTMLElement
  emitter: typeof TinyEmitter.prototype

  constructor(readonly $el: HTMLElement) {
    this.$sc = document.querySelector('#scroll-container')

    this.emitter = new TinyEmitter()
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
    this.emitter.on('update', (percent: number) => {
      cb(clamp(percent, 0, 100))
    })
  }

  compute() {
    const b = this.$prevSection.getBoundingClientRect()

    const offset = +this.$el.dataset.offset * b.height
    const percent = (1 - b.bottom / window.innerHeight) * 100

    this.$wrapper.style.height = this.$el.offsetHeight + 'px'

    if (b.bottom > offset && b.top < 0) {
      this.$el.style.top = offset + 'px'
      // this.$el.style.zIndex = '-1'
      this.$el.style.width = '100%'
      this.$el.classList.add('js-fixed')
    } else {
      this.$el.style.top = '0px'
      this.$el.classList.remove('js-fixed')
    }

    this.emitter.emit('update', percent)
  }

  destroy() {
    raf.off(this.compute)
  }
}
