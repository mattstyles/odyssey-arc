
import { patch as corePatch } from '@raid/addons'
import { patchSelector as selectorPatch } from '@arc/utils'

const shape = {
  stage: 'foo',
  turn: {
    // Absorb? Absorb different types?
    block: 10,
    power: [3, 3]
  }
}

const rootKey = 'battle'
export const initialState = {
  [rootKey]: shape
}

export const patchUpdate = corePatch(rootKey)
export const patchSelector = selectorPatch(rootKey)
