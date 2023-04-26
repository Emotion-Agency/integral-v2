import { clamp } from '@emotionagency/utils'

export default class Scrolling {
  constructor($el, $parent) {
    this.$el = $el
    this.$parent = $parent
    this.$sc = document.querySelector('#scroll-container')
  }

  get distanceFromTop() {
    return this.$sc.scrollTop + this.$parent.getBoundingClientRect().top
  }

  get rawPercentScrolled() {
    return (
      (this.$sc.scrollTop - this.distanceFromTop) /
      (this.$parent.scrollHeight - window.innerHeight)
    )
  }

  get percentScrolled() {
    return clamp(this.rawPercentScrolled, 0, 1)
  }

  computeFromMaxToMin(min, max) {
    const value = max * (1 - this.percentScrolled) - min * this.percentScrolled
    return clamp(value, min, max)
  }

  computeFromMinToMax(min, max) {
    const value = max * this.percentScrolled
    return clamp(value, min, max)
  }
}
