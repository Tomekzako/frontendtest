import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      letters: [
        {
          letter: 'a',
          fields: [
            {position: 1, selected: false},
            {position: 2, selected: false},
            {position: 3, selected: false},
            {position: 4, selected: false},
            {position: 5, selected: false},
            {position: 6, selected: false},
            {position: 7, selected: false},
            {position: 8, selected: false},
          ]
        },
        {
          letter: 'b',
          fields: [
            {position: 1, selected: false},
            {position: 2, selected: false},
            {position: 3, selected: false},
            {position: 4, selected: false},
            {position: 5, selected: false},
            {position: 6, selected: false},
            {position: 7, selected: false},
            {position: 8, selected: false},
          ]
        },
        {
          letter: 'c',
          fields: [
            {position: 1, selected: false},
            {position: 2, selected: false},
            {position: 3, selected: false},
            {position: 4, selected: false},
            {position: 5, selected: false},
            {position: 6, selected: false},
            {position: 7, selected: false},
            {position: 8, selected: false},
          ]
        },
        {
          letter: 'd',
          fields: [
            {position: 1, selected: false},
            {position: 2, selected: false},
            {position: 3, selected: false},
            {position: 4, selected: false},
            {position: 5, selected: false},
            {position: 6, selected: false},
            {position: 7, selected: false},
            {position: 8, selected: false},
          ]
        },
        {
          letter: 'e',
          fields: [
            {position: 1, selected: false},
            {position: 2, selected: false},
            {position: 3, selected: false},
            {position: 4, selected: false},
            {position: 5, selected: false},
            {position: 6, selected: false},
            {position: 7, selected: false},
            {position: 8, selected: false},
          ]
        },
        {
          letter: 'f',
          fields: [
            {position: 1, selected: false},
            {position: 2, selected: false},
            {position: 3, selected: false},
            {position: 4, selected: false},
            {position: 5, selected: false},
            {position: 6, selected: false},
            {position: 7, selected: false},
            {position: 8, selected: false},
          ]
        },
        {
          letter: 'g',
          fields: [
            {position: 1, selected: false},
            {position: 2, selected: false},
            {position: 3, selected: false},
            {position: 4, selected: false},
            {position: 5, selected: false},
            {position: 6, selected: false},
            {position: 7, selected: false},
            {position: 8, selected: false},
          ]
        },
        {
          letter: 'h',
          fields: [
            {position: 1, selected: false},
            {position: 2, selected: false},
            {position: 3, selected: false},
            {position: 4, selected: false},
            {position: 5, selected: false},
            {position: 6, selected: false},
            {position: 7, selected: false},
            {position: 8, selected: false},
          ]
        },
      ],
      clickedSquares: [] as String[]
    }
  },
  actions: {
    saveClickedSquare(clickedElement: string) {
      this.clickedSquares.unshift(clickedElement)
    },
    selectSquare(letter: string, position: number, value: boolean) {
      this.resetSelectedSquares()
      const findLetterIndex = this.letters.findIndex(el => el.letter === letter)
      const findPositionIndex = this.letters[findLetterIndex].fields.findIndex(el => el.position === position)
      this.letters[findLetterIndex].fields[findPositionIndex].selected = value
    },
    resetSelectedSquares() {
      this.letters.forEach(letter => {
        letter.fields.forEach(el => el.selected = false)
      })
    },
    resetAllSelections() {
      this.clickedSquares = []
      this.resetSelectedSquares()
    }
  },
})