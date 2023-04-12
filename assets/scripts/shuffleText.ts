import SplitType from 'split-type'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const shuffleText = ($el: HTMLElement): HTMLElement[] => {
  const text = new SplitType($el, { types: 'words, chars' })

  const chars = text.chars

  return shuffleArray(chars)
}
