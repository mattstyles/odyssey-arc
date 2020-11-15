
import { patch as corePatch } from '@raid/addons'
import { patchSelector as selectorPatch } from '@arc/utils'

const shape = {
  // [current, max]
  hull: [70, 70],
  fuel: 10
}

const rootKey = 'ship'
export const initialState = {
  [rootKey]: shape
}

export const patchUpdate = corePatch(rootKey)
export const patchSelector = selectorPatch(rootKey)
